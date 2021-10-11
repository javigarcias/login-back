const {User} = require('../models');
const bcrypt = require("bcryptjs");

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
    }
}

module.exports = UserController;

