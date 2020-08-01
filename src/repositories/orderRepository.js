const Order = require('../models/order')

exports.create = async(data) => {
    let order = new Order(data)
    await order.save()
}