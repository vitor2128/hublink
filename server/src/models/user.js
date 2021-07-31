const mongoose = require('../database')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    username: {
        type: String,
        default: '',
        require: true,
    },
    titleProfile: {
        type: String,
        default: '',
        require: true,
    },
    bio: {
        type: String,
        default: '',
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
                        default: '#fff',
                        type: String,

                    },
                    fontColor: {
                        default: '#000',
                        type: String,

                    },
                    fontStyle: {
                        default: '1',
                        type: String,

                    },
                    borderColor: {
                        default: '#fff',
                        type: String,

                    },
                    borderStyle: {
                        default: 'solid',
                        type: String,

                    },
                    icon: {
                        default: '',
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