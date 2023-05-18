'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Posts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Posts.belongsTo(models.User, {
				foreignKey: 'user_id',
			});
    }
  }
  Posts.init({
    content: DataTypes.TEXT,
    image: DataTypes.STRING,
    publishDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Posts',
  });
  return Posts;
};