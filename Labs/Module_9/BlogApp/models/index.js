"use strict";
const User = require("./users"); //require the model
const Comment = require("./comments"); //require the model
const Post = require("./posts"); //require the model
const Like = require("./likes"); //require the model

async function init() {
  // associations
  User.hasMany(Post, {
    foreignKey: {
        name: "userId",
        allowNull: false,
    },
});
Post.belongsTo(User, {
    foreignKey: {
        name: "userId",
        allowNull: false,
    }
});
User.hasMany(Comment, {
    foreignKey: {
        name: "userId",
        allowNull: false,
    },
});
Comment.belongsTo(User, {
    foreignKey: {
        name: "userId",
        allowNull: false,
    },
});
User.hasMany(Like, {
    foreignKey: {
        name: "userId",
        allowNull: false,
    }
});
Like.belongsTo(User, {
    foreignKey: {
        name: "userId",
        allowNull: false,
    },
});
Post.hasMany(Comment, {
    foreignKey: {
        name: "postId",
        allowNull: false,
    },
});
Comment.belongsTo(Post, {
    foreignKey: {
        name: "postId",
        allowNull: false,
    },
});
Post.hasMany(Like, {
    foreignKey: {
        name: "postId",
        allowNull: false,
    },
});
Like.belongsTo(Post, {
    foreignKey: {
        name: "postId",
        allowNull: false,
    }
});

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
