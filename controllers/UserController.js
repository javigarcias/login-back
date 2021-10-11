const { User } = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const ndmail = require("nodemailer");

const UserController = {
  async register(req, res) {
    let bodyData = req.body;

    //REGEX Pass entre 8 y 10 caracteres con Mayusculas, minúsculas y caracter especial
    let regExPassword =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/;

    //Comprobación requerimientos REGEX de Password

    if (!regExPassword.test(bodyData.password)) {
      res.send({
        message: "El password introducido no es válido",
      });
      return;
    }
    //Encriptado Password
    let hashPass = await bcrypt.hash(bodyData.password, 10);

    try {
      const user = await User.create({
        firstName: bodyData.first_name,
        lastName: bodyData.last_name,
        email: bodyData.email,
        password: hashPass,
        userName: bodyData.username,
        adress: bodyData.adress,
        adress2: bodyData.adress_2,
        country: bodyData.country,
        state: bodyData.state,
        zip: bodyData.zip,
        nameOfCard: bodyData.name_of_card,
        creditCardNumber: bodyData.credit_card_number,
        expiration: bodyData.expiration,
        cvv: bodyData.cvv,
      });
      res.status(201).send(user);
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "There was a problem create user" });
    }
  },

  async getAll(req, res) {
    try {
      const users = await User.findAll();
      res.status(201).send(users);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send({ message: "There was a problem trying to get users" });
    }
  },

  async login(req, res) {
    try {
      const user = await User.findOne({
        where: {
          email: req.body.email,
        },
      });
      if (!user) {
        return res.status(400).send({ message: "Wrong email" });
      }
      const isMatch = await bcrypt.compare(req.body.password, user.password);
      if (!isMatch) {
        return res.status(400).send({
          message: "Wrong password",
        });
      }
      //Genera Token don el secreto "dynamizatic" y expira en 30 dias
      const token = jwt.sign({ id: user.id }, "dynamizatic", {
        expiresIn: "30d",
      });
      user.token = token;
      await user.save(); //Guarda el token generado en la base de  datos
      res.status(201).send(user);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send({ message: "There was a problem trying to login user" });
    }
  },

  async getByName(req, res) {
    try {
      const userFind = await User.findOne({
        where: {
          email: req.params.email,
        },
      });
      if (!userFind) {
        return res.status(400).send({
          message: "User not found",
        });
      }
      res.status(201).send(userFind);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send({ message: "There was a problem trying to find users" });
    }
  },

  async delete(req, res) {
    try {
      const user = await User.destroy({
        where: {
          email: req.params.email,
        },
      });
      if (!user) {
        return res.status(400).send({
          message: "User not found",
        });
      }
      res.status(201).send({
        message: "User deleted",
      });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "There was a problem delete user" });
    }
  },

  async update(req, res) {
    try {
      const user = await User.update(req.body, {
        where: {
          email: req.body.email,
        },
      });
      if (!user) {
        return res.status(404).send({
          message: "User not found",
        });
      }
      res.status(201).send({
        message: "User data update",
      });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "There was a problem update user" });
    }
  },

  async resetPass(req, res) {
    try {
      const tokenReset = req.body.tokenReset;
      const newPass = req.body.password;
      jwt.verify(token, "dynamizatic");
      const user = await User.findOne({ where: { token: token } });
      if (!user) {
        return res.status(401).send({ message: "Invalid Token" });
      }
      const hashPass = await bcrypt.hash(newPass, 10);
      user.pasword = hashPass;

    } catch (error) {
      console.error(error);
      res.status(401).send({ error, message: "Invalid Token" });
    }
  },

  async generatePassUrl(req,res) {
      try {
          
      } catch (error) {
          
      }
  }
};

module.exports = UserController;
