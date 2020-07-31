const Product = require('../models/product')
const ValidationContract = require('../validators/fluentValidator')
const repository = require('../repositories/productRepository')


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

exports.getBySlug = async(req, res, next) => {
    const { slug } = req.params

    try {
        let data = await repository.getBySlug(slug)
        res.status(200).send(data)
    } catch (e) {
        res.status(500).send({
            message: 'Failure to process your request'
        })
    }
}

exports.getById = async(req, res, next) => {
    const { _id } = req.params

    try {
        let data = await repository.getById(_id)
        res.status(200).send(data)
    } catch (e) {
        res.status(500).send({
            message: 'Failure to process your request'
        })
    }
}

exports.getByTag = async(req, res, next) => {
    const { tag } = req.params

    try {
        let data = await repository.getByTag(tag)
        res.status(200).send(data)
    } catch (e) {
        res.status(500).send({
            message: 'Failure to process your request'
        })
    }
}

exports.create = async(req, res, next) => {
    const { title, slug, description, price, active, tags } = req.body
    
    let contract = new ValidationContract()
    contract.hasMinLen(title, 3, 'The title must contain at least 3 characters')
    contract.hasMinLen(slug, 3, 'The slug must contain at least 3 characters')
    contract.hasMinLen(description, 3, 'The description must contain at least 3 characters')

    if (!contract.isValid()) {
        res.status(400).send(contract.errors()).end()
        return
    }

    const newProduct = {
        title, 
        slug, 
        description, 
        price, 
        active, 
        tags
    }

    try {
        await repository.create(newProduct)
        res.status(201).send({ message: 'Successfully registered product!' })
    } catch (e) {
        res.status(500).send({
            message: 'Failure to process your request'
        })
    }
}

exports.put = async(req, res, next) => {
    const { _id } = req.params
    const { title, description, slug, price } = req.body

    const product = {
        title,
        description,
        slug,
        price
    }

    try {
        await repository.update(_id, product)
        res.status(201).send({ message: 'Successfully updated product!' })
    } catch (e) {
        res.status(500).send({
            message: 'Failure to process your request'
        })
    }
}

exports.delete = async(req, res, next) => {
    const { _id } = req.params

    try {
        await repository.delete(_id)
        res.status(201).send({ message: 'Successfully deleted product!' })
    } catch (e) {
        res.status(500).send({
            message: 'Failure to process your request'
        });
    }
}