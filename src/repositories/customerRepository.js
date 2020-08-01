const Customer = require('../models/customer')

exports.create = async(data) => {
    let customer = new Customer(data)
    await customer.save()
}