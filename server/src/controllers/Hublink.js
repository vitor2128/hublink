const User = require('../models/user')
const bcrypt = require('bcrypt')
const saltRounds = 10;

class Hublink {
    async inicialPage(req, res){
        try {
            const { username } = req.params;
           
            const user = await User.findOne({username})

            if(!user)
                return res.status(404).json({Error: 'link not found'})

            user.email = undefined
            user.name = undefined
            user.plane = undefined
            user.createAt = undefined
            user.__v = undefined

          
            return res.status(200).json(user)
    
        } catch (err) {
            return res.status(500).json({Error: "user not found"})
        }
    }
}

module.exports = Hublink