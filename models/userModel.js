const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
      name:{
        type: String,
        required:[true,'name is required'],
        trim:true,
        maxLength:[30,'name must ebless than 50 characters']
      },
      email:{
        type: String,
        required:[true,'email is reuired'],
        unique: true
      }
})
module.exports = mongoose.model("User",userSchema)