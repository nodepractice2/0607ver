const Sequelize = require('sequelize');

module.exports = class Gc extends Sequelize.Model {
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
      modelName: 'Gc',
      tableName: 'Gc',
      paranoid: false,
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci',
    });
  }

  
};