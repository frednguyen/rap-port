module.exports = function(sequelize, DataTypes) {
  var AggregateChat = sequelize.define('AggregateChat', {
    chat_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    from: {
      type: DataTypes.STRING,
      allowNull: false
    },
    to: {
      type: DataTypes.STRING,
      allowNull: false
    },
    message: {
      type: DataTypes.TEXT('medium'),
      allowNull: false
    }
  }, 
  {
    classMethods: {
      associate: function(models) {
        AggregateChat.hasMany(models.AggregateScore, {
          onDelete: 'cascade'
        });
      }
    }
  });
  return AggregateChat;
};
  