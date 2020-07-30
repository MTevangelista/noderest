const Product = require('../models/product')

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

    Product.findOne({ active: true, slug}, 'title description price slug tags')
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

exports.create = (req, res, next) => {
    const { title, slug, description, price, active, tags } = req.body

    Product.findOne({ slug })
        .then(product => {
            if (!product){
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
            data : err
        }))
}