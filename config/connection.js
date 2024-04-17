// const Sequelize = require('sequelize');
// require('dotenv').config(); ///not found  : npm i dotenv

// let sequelize;

// if (process.env.JAWSDB_URL) {
//   sequelize = new Sequelize(process.env.JAWSDB_URL);
// } else {
//   sequelize = new Sequelize(
//     'happy_data',
//     'root',
//     "password"
//     ,
//     {
//       host: 'localhost',
//       dialect: 'mysql',
      
//       port: 3306
//     }
//   );
// }
// //options.dialect = urlParts.protocol.replace(/:$/, "");
// ///Cannot read property of null , reading replace("")
// module.exports = sequelize;
const {Sequelize} = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  
  'u9dhbkxv98mcagol',
     'u5ifcozbtu7i9vil',
    "l154pepp9qzk2l5d",
  {
    host: 't89yihg12rw77y6f.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    dialect: 'mysql',
    port: 3306,
  }
);

module.exports = sequelize;