"use strict";
const Models = require("../models");

// finds all users in DB, then sends array as response
const getLikes = (req, res) => {
  Models.Like.findAll({where: {userId: req.params.userid}})
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

// uses JSON from request body to create new user in DB
const createLike = (data, res) => {
  Models.Like.create(data)
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

// deletes user matching ID from params
const deleteLike = (req, res) => {
  Models.Like.destroy({ where: { id: req.params.id } })
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

module.exports = {
  getLikes,
  createLike,
  deleteLike
};
// ++ Test updating and deleting a user using Postman
