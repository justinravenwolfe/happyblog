const Sequelize = require('sequelize');
require('dotenv').config(); ///not found  : npm i dotenv

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    'happy_data',
    'root',
    "password"
    ,
    {
      host: 'localhost',
      dialect: 'mysql',
      
      port: 3306
    }
  );
}
//options.dialect = urlParts.protocol.replace(/:$/, "");
///Cannot read property of null , reading replace("")
module.exports = sequelize;
