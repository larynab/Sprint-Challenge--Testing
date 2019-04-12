//Database Configuration Settings
const db = require("../data/dbConfig.js");
//exporting helper functions
module.exports = {
    insert
}
async function insert(game) {
    return db('games').insert(game); 
}
  

  