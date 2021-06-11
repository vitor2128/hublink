const User = require('../models/user')
const bcrypt = require('bcrypt')
const saltRounds = 10;
const jwt = require('jsonwebtoken')

const authConfig = require('../config/auth')

function generateToken(params = {}) {
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400,
    })
}

class UsersController {
    async create(req, res){
        try {
            const {name, username, email, password} = req.body

            // if(name != undefined){
            //     return res.status(400).json({Error: "Name invalid"})
            // }

            if(name.length < 4){
                return res.status(400).json({Error: "Name invalid"})
            }
                
            // if(email != undefined)
            //     return res.status(400).json({Error: "email invalid"})
            // if(password != undefined)
            //     return res.status(400).json({Error: "password invalid"})
            
            if(await User.findOne({ email })) 
                return res.status(400).json({Error: "User already exists"})

            if(await User.findOne({ username })) 
                return res.status(400).json({Error: "Username already exists"})

            
            
            const salt = bcrypt.genSaltSync(saltRounds)
            const hash = bcrypt.hashSync(password, salt)

            const user = await User.create({name: name, username: username, email: email, password: hash})
                        
            user.password = undefined
            user.createAt = undefined

            return res.json({
                user,
                token: generateToken({id: user.id, name: user.name})
            })
                
        } catch (err) {
            return res.status(400).json({Error: "Registration failed"})
        }
    }
}

module.exports = UsersController