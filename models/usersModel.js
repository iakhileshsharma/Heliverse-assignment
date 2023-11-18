const mongoose = require('mongoose');
const Joi = require('joi');


const userSchema = new mongoose.Schema({
    first_Name : {
        type : String,
        required : true,
        minlength : 3,
        maxlength : 20
    },

    last_Name : {
        type: String,
        required : true,
        minlength : 3,
        maxlength : 20
    },

    email : {
        type: String,
        required: true
    },

    gender : {
        type: String,
        required: true
    },

    domain : {
        type : String,
        required: true
    },

    available : {
        type : Boolean,
        required: true
    }
})

const User = mongoose.model('User' , userSchema)



function validateData(user){
    const schema = Joi.object({
        first_Name : Joi.string().min(3).max(20).required(),
        last_Name : Joi.string().min(3).max(20).required(),
        email : Joi.string().required(),
        gender : Joi.string().required(),
        domain : Joi.string().required(),
        available : Joi.boolean().required()

    })
    return schema.validate(user)
  }
  
  
  exports.User = User
  exports.validate = validateData
  






