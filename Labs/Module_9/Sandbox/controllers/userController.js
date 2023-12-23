"use strict";
const UserModel = require("../models/users");

// finds all users in DB, then sends array as response
const getUsers = (res) => {
  UserModel.findAll({})
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

// uses JSON from request body to create new user in DB
const createUser = (data, res) => {
  UserModel.create(data)
    .then((data) => {
        
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

// uses JSON from request body to update user ID from params
const updateUser = (req, res) => {
  UserModel.update(req.body, { where: { id: req.params.id } })
    .then((data) => {
      UserModel.findOne({ where: { id: data } })
        .then((user) => {
                res.send({ result: 200, data: user })
            }
        )
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

// deletes user matching ID from params
const deleteUser = (req, res) => {
  UserModel.destroy({ where: { id: req.params.id } })
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
};
// ++ Test updating and deleting a user using Postman
