const ValidationContract = require('../validators/fluentValidator')
const repository = require('../repositories/orderRepository')
const guid = require('guid')

exports.getAll = async(req, res, next) => {
    try {
        let data = await repository.getAll()
        res.status(200).send(data)
    } catch (e) {
        res.status(500).send({
            message: 'Failure to process your request'
        })
    }
}

exports.create = async(req, res, next) => {
    const { customer, number, items } = req.body

    const newOrder = {
        customer,
        number: guid.raw().substring(0,6),
        items
    }

    try {
        await repository.create(newOrder)
        res.status(201).send({ message: 'Successfully registered order!' })
    } catch (e) {
        res.status(500).send({
            message: 'Failure to process your request'
        })
    }
}