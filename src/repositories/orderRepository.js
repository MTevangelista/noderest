const Order = require('../models/order')

exports.getAll = async() => {
    const res = Order
        .find({}, 'number status customer items')
        .populate('customer', 'name')
        .populate('items.product', 'title')
    return res
}

exports.create = async(data) => {
    let order = new Order(data)
    await order.save()
}