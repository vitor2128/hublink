const mongoose = require('../database')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    username: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        unique: true,
        require: true,
        lowercase: true,
        
    },
    password: {
        type: String,
        select: false,
        require: true,
    },
    plane: {
        type: String,
        default: 'basic',
    },
    links: [
        {
            title: {
                type: String,
                require: true,
            },
            link: {
                type: String,
                require: true,
            }, 
            css: [
                {
                    background: {
                        type: String,
                        require: true,
                    },
                    fontColor: {
                        type: String,
                        require: true,
                    },
                    fontStyle: {
                        type: String,
                        require: true,
                    },
                    borderColor: {
                        type: String,
                        require: true,
                    },
                    borderStyle: {
                        type: String,
                        require: true,
                    },
                    icon: {
                        type: String,
                    },
                }
            ]
        }
    ],
    
    createAt: {
        type: Date,
        default: Date.now,
    },
})

const User = mongoose.model('users', UserSchema);

module.exports = User