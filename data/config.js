//knex lib and the knexfile
const knex =require('knex')
const configs =require('../knexfile')

//the swiss army knife to be able to interact with the db
//is instantiated by invoking knex passing in a specific configuration
//(we only have "development")
module.exports =knex(configs.development)