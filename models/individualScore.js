module.exports = function(sequelize, DataTypes) {
  var IndividualScore = sequelize.define('IndividualScore', {
    message_id: {
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
    scores: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    classMethods: {
      associate: function(models) {
        IndividualScore.belongsTo(models.IndividualChat, {
          foreignKey: {
          allowNull: false
          }
        });
      }
    }    
  });
  return IndividualScore;
};