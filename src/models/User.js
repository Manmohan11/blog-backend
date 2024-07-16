module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      profile_picture: {
        type: DataTypes.STRING,
      },
      role_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      dob: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      }
    });
  
    User.associate = (models) => {
      User.belongsTo(models.Role, { foreignKey: 'role_id' });
      User.hasMany(models.Blog, { foreignKey: 'author_id' });
      User.hasMany(models.Comment, { foreignKey: 'user_id' });
      User.hasMany(models.Like, { foreignKey: 'user_id' });
      User.hasMany(models.CommentLike, { foreignKey: 'user_id' });
      User.hasMany(models.CommentReply, { foreignKey: 'user_id' });
      User.hasMany(models.Bookmark, { foreignKey: 'user_id' });
      User.hasMany(models.Flag, { foreignKey: 'flagged_by' });
    };
  
    return User;
  };
  