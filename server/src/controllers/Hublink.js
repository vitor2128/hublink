const User = require('../models/user')
const bcrypt = require('bcrypt')
const saltRounds = 10;

class Hublink {
    async inicialPage(req, res){
        try {
            const { username } = req.params;
           
            const user = await User.findOne({username})

            user.email = undefined
            user.name = undefined
            user.plane = undefined
            user.createAt = undefined
            user.__v = undefined
            user._id = 0
            user.id = 0
          
            return res.status(200).json(user)
    
        } catch (err) {
            return res.status(400).json({Error: "user not found"})
        }
    }
}

module.exports = Hublink