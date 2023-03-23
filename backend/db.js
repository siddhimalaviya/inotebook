const mongoose = require('mongoose');
const mongoURI = "mongodb://0.0.0.0:27017/inotebookDB"
mongoose.set("strictQuery",false)

const connectToMongo = () => {
    mongoose.connect(mongoURI, ()=>{
        console.log('connected to Mongo Successfully');
    })
}

module.exports = connectToMongo;