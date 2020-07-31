const Product = require('../models/product')

exports.getAll = () => {
    return Product.find({
        active: true
    }, 'title price slug')
}

exports.getBySlug = (slug) => {
    return Product.findOne({
        active: true,
        slug
    }, 'title description price slug tags')
}

exports.getById = (_id) => { 
    return Product.findById(_id)
}

exports.getByTag = (tag) => {
    return Product.find({ 
        active: true, tags: tag 
    }, 'title description price slug tags')
}

exports.create = (data) => { 
    let product = new Product(data)
    return product.save()
}

exports.update = (_id, { title, description, slug, price }) => { 
    return Product.findByIdAndUpdate({ _id }, {
        $set: {
            title,
            description,
            slug,
            price
        }
    })
}

exports.delete = (slug) => {
    return Product.findOneAndRemove(slug)
}

exports.verifyIfProductExistsBySlug = (slug) => {
    return Product.findOne({ slug })
}

exports.verifyIfProductExistsById = (_id) => {
    return Product.findById(_id)
}