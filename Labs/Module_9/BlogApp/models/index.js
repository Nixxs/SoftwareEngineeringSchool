"use strict";
const User = require("./users"); //require the model
const Comment = require("./comments"); //require the model
const Post = require("./posts"); //require the model
const Like = require("./likes"); //require the model

async function init() {
  // associations
  User.hasMany(Post);
  Post.belongsTo(User);

  User.hasMany(Comment);
  Comment.belongsTo(User);

  User.hasMany(Like);
  Like.belongsTo(User);

  Post.hasMany(Comment);
  Comment.belongsTo(Post);

  Post.hasMany(Like);
  Like.belongsTo(Post);

  await User.sync();
  await Post.sync();
  await Comment.sync();
  await Like.sync();
}

init();

module.exports = {
  User,
  Comment,
  Post,
  Like,
};
