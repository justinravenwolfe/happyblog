const {Model, DataTypes} = require('sequelize');
//TODO: Write the connection file
// Encyption
const bcrypt = require('bcrypt'); 
const sequelize = require('../config/connection'); 

//User module
class User extends Model {
    checkPassword(loginPw){
        return bcrypt.compareSync(loginPw, this.password); 
    }
}

User.init (
{
id:{
    type: DataTypes.INTEGER,
    allowNull: false, 
    primaryKey: true,
    autoIncrement: true, 

},
username:{
    type: DataTypes.STRING,
    allowNull: false, 
},
password:{
    type: DataTypes.STRING, 
    allowNull: false, 
    validate: {
        len: [8]
    },
},
},
{
    hooks: {
        beforeCreate: async (newUserData) => {
            newUserData.password = await bcrypt.hash(newUserData.password, 10);
            return newUserData;
        },
        beforeUpdate: async (updatedUserData) => {
            updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
            return updatedUserData; 
        },
    },
    sequelize,
    freezeTableName: true,
    underscored: true, 
    modelName: 'user',
}); 

module.exports = "User"; 
