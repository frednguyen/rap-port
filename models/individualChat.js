module.exports = function(sequelize, DataTypes) {
  var IndividualChat = sequelize.define('IndividualChat', {
    message_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    chat_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    me: {
      type: DataTypes.STRING,
      allowNull: false
    },
    friend: {
      type: DataTypes.STRING,
      allowNull: false
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  },
  {
    classMethods: {
      associate: function(models) {
        IndividualChat.hasMany(models.IndividualScore, {
          onDelete: 'cascade'
        });
      }
    }
  });
  return IndividualChat;
};
  



