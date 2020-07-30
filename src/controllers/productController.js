const Product = require('../models/product')

exports.crete = (req, res, next) => {
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