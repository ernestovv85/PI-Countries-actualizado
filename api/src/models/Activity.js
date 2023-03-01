const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('activity', {
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    difficulty: {
      type: DataTypes.ENUM ('1', '2', '3', '4', '5'),
      allowNull: false,
    },
    duration: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    season: {
      type: DataTypes.ARRAY (DataTypes.STRING),
      allowNull: true,
      },
  });
};