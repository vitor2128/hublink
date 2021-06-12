const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const authConfig = require('../config/auth')

function generateToken(params = {}) {
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400,
    })
}

class LoginController {
    async auth(req, res){
        try {
            const {email, password} = req.body

            const user = await User.findOne({email: email}).select('+password')

            if(!user)
                return res.status(404).json('email invalid')

            if(!await bcrypt.compare(password, user.password))
                return res.status(404).json('password invalid')
            
            if(user.links.length === 0) {
                return res.status(401).json({Error: 'redirect tela profile '})
            }

            user.password = undefined
            user.createAt = undefined
            user.id = undefined
            

            //redirect tela inicial 
            // caso não tiver link ou profile redirecionar "/auth/new-account/new-profile"
            
            return res.json({
                user,
                token: generateToken({id: user.id, name: user.name})
            })

        } catch (error) {
            res.status(400).json({Error: "Login failed"})
        }
    }

}


module.exports = LoginController