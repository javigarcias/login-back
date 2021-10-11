const jwt = require('jsonwebtoken');
const { User } = require('../models');

const auth = async (req,res,next)=>{
    try {
        const token = req.headers.authorization.split(' ')[1];
        const payload = jwt.verify(token, 'dynamizatic');
        next();
        
    } catch (error) {
        console.error(error)
        res.status(401).send({ error, message: 'You are not authorized'})
    }
}

module.exports = auth;