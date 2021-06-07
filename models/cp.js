const Sequelize = require('sequelize');

module.exports = class Cp extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      humanaim: {
        type: Sequelize.STRING(500),
        allowNull: false,
      },
      tc: {
        type: Sequelize.STRING(200),
        allowNull: false,
      },
      part : {
        type: Sequelize.STRING(200),
        allowNull: false,
      }
    }, {
      sequelize,
      timestamps: false,
      underscored: false,
      modelName: 'Cp',
      tableName: 'Cp',
      paranoid: false,
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci',
    });
  }

  
};