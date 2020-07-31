const Product = require('../models/product')
const ValidationContract = require('../validators/fluentValidator')

exports.getAll = (req, res, next) => {
    Product.find({ active: true }, 'title price slug')
        .then(product => {
            res.status(200).send(product)
        })
        .catch(err => {
            res.status(400).send(err)
        })
}

exports.getBySlug = (req, res, next) => {
    const { slug } = req.params

    Product.findOne({ active: true, slug }, 'title description price slug tags')
        .then(product => {
            if (product) {
                res.status(200).send(product)
            } else {
                res.status(404).send({ message: 'Product not found' })
            }
        })
        .catch(err => {
            res.status(400).send(err)
        })
}

exports.getById = (req, res, next) => {
    const { _id } = req.params

    Product.findById({ _id })
        .then(product => {
            res.status(200).send(product)
        })
        .catch(err => {
            res.status(400).send({ message: 'Product not found' })
        })
}

exports.getByTag = (req, res, next) => {
    const { tag } = req.params

    Product.find({ active: true, tags: tag }, 'title description price slug tags')
        .then(product => {
            res.status(200).send(product)
        })
        .catch(err => {
            res.status(400).send(err)
        })
}

exports.create = (req, res, next) => {
    const { title, slug, description, price, active, tags } = req.body
    
    let contract = new ValidationContract()
    contract.hasMinLen(title, 3, 'The title must contain at least 3 characters')
    contract.hasMinLen(slug, 3, 'The slug must contain at least 3 characters')
    contract.hasMinLen(description, 3, 'The description must contain at least 3 characters')

    if (!contract.isValid()) {
        res.status(400).send(contract.errors()).end()
        return
    }

    Product.findOne({ slug })
        .then(product => {
            if (!product) {
                Product.create({
                    title,
                    slug,
                    description,
                    price,
                    active,
                    tags
                }).then(product => {
                    res.status(201).send({
                        message: 'Successfully registered product!',
                        product
                    })
                }).catch(err => {
                    res.status(400).send({
                        message: 'Product registration failure!',
                        data: err
                    })
                })
            } else {
                res.status(400).send({ error: 'Product already exists' })
            }
        })
        .catch(err => ({
            message: 'Something wrong happened',
            data: err
        }))
}

exports.put = (req, res, next) => {
    const { _id } = req.params
    const { title, description, slug, price } = req.body

    Product.findByIdAndUpdate({ _id }, {
        $set: {
            title,
            description,
            slug,
            price
        }
    }).then(product => {
        res.status(201).send({
            message: 'Successfully updated product'
        })
    }).catch(err => {
        res.status(400).send({
            message: 'Product update failure',
            data: err
        })
    })
}

exports.delete = (req, res, next) => {
    const { _id } = req.params

    Product.findById({ _id })
        .then(product => {
            if (product){
                Product.findOneAndRemove({ _id })
                    .then(() => {
                        res.status(201).send({
                            message: 'Successfully deleted product'
                        })
                    })
                    .catch(err => {
                        res.status(400).send(err)
                    })
            } else {
                res.status(404).send({
                    message: 'Product not found',
                })
            }
        })
        .catch(err => {
            res.status(400).send({
                message: 'Product delete failure',
                data: err
            })
        })
}