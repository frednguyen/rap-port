module.exports = function(sequelize, DataTypes) {
  var IndividualScore = sequelize.define('IndividualScore', {
    // message_id: {
    //   type: DataTypes.STRING,
    //   allowNull: false
    // },
    emotion_ids: {
      type: DataTypes.STRING,
      allowNull: false
    },
    emotion_scores: {
      type: DataTypes.STRING,
      allowNull: false
    },
    language_ids: {
      type: DataTypes.STRING,
      allowNull: false
    },
    language_scores: {
      type: DataTypes.STRING,
      allowNull: false
    },
    social_ids: {
      type: DataTypes.STRING,
      allowNull: false
    },
    social_scores: {
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