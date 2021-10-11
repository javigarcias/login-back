const {User} = require('../models');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserController = {
    async register(req,res) {
        let bodyData = req.body;

        //REGEX Pass entre 8 y 10 caracteres con Mayusculas, minúsculas y caracter especial
        let regExPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/;

        //Comprobación requerimientos REGEX de Password 
    
        if(!regExPassword.test(bodyData.password)){
            res.send({
                message: "El password introducido no es válido"
            });
            return;
        }
        //Encriptado Password
        let hashPass = await bcrypt.hash(bodyData.password, 10);

        try{
            const user = await User.create({
                first_name: bodyData.first_name,
                last_name: bodyData.last_name,
                email: bodyData.email,
                password: hashPass,
                username: bodyData.username,
                adress: bodyData.adress,
                adress_2: bodyData.adress_2,
                country: bodyData.country,
                state: bodyData.state,
                zip: bodyData.zip,
                name_of_card: bodyData.name_of_card,
                credit_card_number: bodyData.credit_card_number,
                expiration: bodyData.expiration,
                cvv: bodyData.cvv
            });
            res.status(201).send(user);
        } catch(error) {
            console.error(error);
            res.status(500).send({ message: 'There was a problem create user'})
        }
    },

    async getAll(req,res){
        try {
            const users = await User.findAll();
            res.status(201).send(users);
        } catch (error) {
            console.error(error);
            res.status(500).send({ message: 'There was a problem trying to get users'})
            }
    },

    async login(req,res) {
        try {
            const user = await User.findOne({
                where:{
                    username:req.body.username
                }
            })
            if(!user){
                return res.status(400).send({message:'Wrong email'})
            }
            const isMatch = await bcrypt.compare(req.body.password,user.password)
            if(!isMatch){
                return res.status(400).send({
                    message:'Wrong password'
                })   
            }
            const token = jwt.sign({ id: user.id}, 'dynamizatic');
            user.token = token;
            user.reload();
            res.status(201).send(user) 
        }catch (error) {
            console.error(error);
            res.status(500).send({ message: 'There was a problem trying to login user'})
        }
    },

    async getByName(req,res) {
        try {
            const userFind = await User.findOne({
                where: {
                    username: req.params.username
                }
            })
            if(!userFind){
                return res.status(400).send({
                    message:'User not found'
                })
            }
            res.status(201).send(userFind)
        } catch (error) {
            console.error(error);
            res.status(500).send({ message: 'There was a problem trying to find users'})
        }
    },

    async delete(req,res) {
        try {
            const user = await User.destroy({
                where:{
                    username:req.params.username
                }
            })
            if(!user){
                return res.status(400).send({
                    message:'User not found'
                })
            }
            res.status(201).send({
                message: 'User deleted'
            })
        } catch (error) {
            console.error(error);
            res.status(500).send({ message: 'There was a problem delete user'})
        }
    }

    
    
}

module.exports = UserController;


