
const mongoose = require('mongoose')

class DatabaseConnection {
    serverUrl = "mongodb://127.0.0.1:27017"
    connect(){
        mongoose.connect(this.serverUrl)
        .then((res) => console.log("Connection to Database Successfull"))
        .catch((error) => console.log("Error in Connecting to the Database", error))
    }
}

const db = new DatabaseConnection();
module.exports = db