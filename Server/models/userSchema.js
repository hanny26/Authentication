const mongoose  = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email")
            }
        }
},

   password: {
       type: String,
       required: true,
       minlength: 6,
   },

   
   cpassword: {
    type: String,
    required: true,
    minlength: 6,
},
  
tokens:[
    {
        token:{
            type: String,
            required: true,
        }
    }
]

})

// creating model

const userdb = new mongoose.model('user', userSchema);

module.exports = userdb;