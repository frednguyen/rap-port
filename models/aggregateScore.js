module.exports = function(sequelize, DataTypes) {
  var AggregateScore = sequelize.define('AggregateScore', {
    chat_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    category_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tone_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    score: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    classMethods: {
      associate: function(models) {
        AggregateScore.belongsTo(models.IndividualChat, {
          foreignKey: {
            allowNull: false
          }
        });
      }
    }
  });
  return AggregateScore;
};