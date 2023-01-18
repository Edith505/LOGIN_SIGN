const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/LoginSignUpDb", {useNewUrlParser: true})
.then(() => {
  console.log("ConnectedSuccessful")
})
.catch(() => {
  console.log("Error in the Connection")
})

const LogInSchema = new mongoose.Schema({
  email :{
    type: String,
    require : true
  },
  password :{
    type: String,
    require : true
  }
})

// Creating collection
const collection  = mongoose.model("LSCollection", LogInSchema)

module.exports = collection



