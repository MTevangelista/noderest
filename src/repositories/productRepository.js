const Product = require('../models/product')

exports.getAll = async() => {
    const res = await Product.find({
        active: true
    }, 'title price slug')
    return res
}

exports.getBySlug = async(slug) => {
    const res = await Product
        .findOne({
            slug: slug,
            active: true
        }, 'title description price slug tags');
    return res;
}

exports.getById = async(_id) => { 
    const res = await Product.findById(_id)
    return res
}

exports.getByTag = async(tag) => {
    const res = await Product.find({ 
        active: true, tags: tag 
    }, 'title description price slug tags')
    return res
}

exports.create = async(data) => { 
    let product = new Product(data)
    await product.save()
}

exports.update = async(_id, { title, description, slug, price }) => { 
    await Product.findByIdAndUpdate({ _id }, {
        $set: {
            title,
            description,
            slug,
            price
        }
    })
}

exports.delete = async(id) => {
    await Product.findOneAndRemove(id);
}