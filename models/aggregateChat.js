module.exports = function(sequelize, DataTypes) {
  var AggregateChat = sequelize.define('AggregateChat', {
    chat_id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
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
    },
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
  });
  return AggregateChat;
};
  