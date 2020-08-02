const ValidationContract = require('../validators/fluentValidator')
const repository = require('../repositories/orderRepository')
const guid = require('guid')
const authService = require('../services/auth')

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
    try {
        // Retrieve the token
        const token = req.body.token || req.query.token || req.headers['x-access-token'];
        // Decode the token
        const data = await authService.decodeToken(token)

        await repository.create({
            customer: data.id,
            number: guid.raw().substring(0,6),
            items: req.body.items
        })
        res.status(201).send({ message: 'Successfully registered order!' })
    } catch (e) {
        res.status(500).send({
            message: 'Failure to process your request'
        })
    }
}