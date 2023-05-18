'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Project.belongsTo(models.Company, {
				foreignKey: 'company_id',
			});
      Project.belongsToMany(models.User, {
				through: 'User_Projects',
				as: 'user',
				foreignKey: 'project_id',
			});
    }
  }
  Project.init({
    nome: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Project',
  });
  return Project;
};