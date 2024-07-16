module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define('Comment', {
      comment_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      blog_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      is_inappropriate: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      }
    });
  
    Comment.associate = (models) => {
      Comment.belongsTo(models.Blog, { foreignKey: 'blog_id' });
      Comment.belongsTo(models.User, { foreignKey: 'user_id' });
    };
  
    return Comment;
  };
  