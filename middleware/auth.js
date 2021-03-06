const jwt = require('jsonwebtoken');
const { User } = require('../models');

const auth = async (req,res,next)=>{
    try {
        const token = req.headers.authorization.split(' ')[1]; //Limpia y deja solo el valor del token para compararlo
        const user =await User.findOne({ where: { token: token }});
        if (!user) {
            return res.status(401).send({ message: 'You are not authorized' })
        }
        req.user = user;
        next();
        
    } catch (error) {
        console.error(error)
        res.status(401).send({ error, message: 'You are not authorized'})
    }
}

module.exports = auth;