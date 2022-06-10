module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
      userName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      nickName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      fullName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false
      },
      adress: {
        type: DataTypes.STRING,
        allowNull: false
      },
      img: {
        type: DataTypes.STRING,
        allowNull: false
      },
      male:{
        type:DataTypes.BOOLEAN,
        allowNull: false

      }
      
    });
    return User;
  };