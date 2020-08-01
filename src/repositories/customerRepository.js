const Customer = require('../models/customer')

exports.getAll = async() => {
    const res = await Customer.find()
    return res
}

exports.create = async(data) => {
    let customer = new Customer(data)
    await customer.save()
}