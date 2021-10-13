const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const adminSchema = new mongoose.Schema({
    _id: {
        type: String
    },
    username: {
        type: String
    },
    password: {
        type: String
    },
    tokens: [
        {
            token: {
                type: String,
                required: true
            }
        }
    ]
},{
    collection: 'Admin'
});

adminSchema.methods.generateauthtoken = async function(){
    try {
        console.log(this);
        const token = jwt.sign({_id:this._id.toString()}, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token: token})
        await this.save();
        return token;
    } catch (error) {
        console.log(error);
    }
}

module.exports = mongoose.model('Admin', adminSchema);