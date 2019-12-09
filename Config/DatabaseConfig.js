const Sequelize = require('sequelize');

const sequelize = new Sequelize('nove', 'root', 'kingdom123', {
    host: 'localhost',
    dialect: 'mysql', /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
    logging: false
  });
  
sequelize.authenticate()
.then(function(result){
    console.log("successfully")
})
.catch(function(err){
    console.log(err)
})

module.exports = {
    Sequelize, sequelize
}
