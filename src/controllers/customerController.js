const ValidationContract = require('../validators/fluentValidator')
const repository = require('../repositories/customerRepository')

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
    const { name, email, password } = req.body
    
    let contract = new ValidationContract()
    contract.hasMinLen(name, 3, 'The name must contain at least 3 characters')
    contract.isEmail(email, 'Invalid e-mail')
    contract.hasMinLen(password, 6, 'The password must contain at least 6 characters')

    if (!contract.isValid()) {
        res.status(400).send(contract.errors()).end()
        return
    }

    const newCustomer = {
        name,
        email,
        password
    }

    try {
        await repository.create(newCustomer)
        res.status(201).send({ message: 'Successfully registered customer!' })
    } catch (e) {
        res.status(500).send({
            message: 'Failure to process your request'
        })
    }
}