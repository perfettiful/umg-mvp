const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const { Artist } = require('./Artist')

class Track extends Model {}

Track.init(
  {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    isrc: {
        type: DataTypes.STRING,
        allowNull: false
      },

    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    artists: {
      type: DataTypes.JSON,
      allowNull: false

    },
    albumCoverUrl: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'track'
  }
);

module.exports = Track;
