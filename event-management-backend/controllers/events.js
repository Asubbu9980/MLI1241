const UserModel = require("../models/events");
// const _=require("lodash")


const getUsers = function (req, res, next) {
    UserModel.find().then ((data) =>{
      return res.send(data);
    });
  }





const createUser = function (req, res, next) {
  let user = new UserModel(req.body);
  user.save(function (err, data) {
    if (err) {
      res.status(422).send(err);
    } else {
      res.status(200).send(data);
    }
  });
};



module.exports = { getUsers, createUser}