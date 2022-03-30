const prismaCLient = require('../database/prismaClient')


module.exports = {
    async create(req, res){
        const { name, email, password } = req.body

       

        const newUser = await prismaCLient.user.create({
            data:{
                name,
                email,
                password
            }
        })
        return res.json(newUser)
    },

    async index(req, res){
        const response = await prismaCLient.user.findMany()

        return res.json(response)
    },

    async update(req, res){
        const { id } = req.params
        const { name } = req.body
        

        const response = await prismaCLient.user.update({
            where:{
                id: parseInt(id)
            },
            data:{
                name: name
            }
        })

        return res.json(response)

    },

    async delete(req, res){
        const { id } = req.params

        const response = await prismaCLient.user.delete({
            where:{
                id: parseInt(id)
            }
        })

        return res.json(response)

    }
}