const {Model, DataTypes, INTEGER} = require('sequelize');
//TODO: Write the connection file
// Encyption
const sequelize = require('../config/connection'); 

class Comment extends Model {
}
Comment.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey:true,
        autoIncrement:true,

    },
    body:{
        type: DataTypes.STRING,
        allowNull: false,
    },},

    {sequelize: sequelize,
    freezeTableName: true,
    underscored: true, 
    modelName: 'comment',  
});

module.exports = Comment; 