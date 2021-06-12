const User = require('../models/user')

class ProfileController {
    async createProfile(req, res){
        try {
            const { link, title } = req.body
            // const { id } = req.params;
            const {username} = req.body
            const id = req.userId

            const user = await User.findById(id)

            if(user.links.length >= 1) {
                return res.status(400).json('/auth/createbutton')
            }

            if(await User.findOne({ username })) 
                return res.status(400).json({Error: "Username already exists, try again"})
            
            
                       
            await User.findByIdAndUpdate(id, {username:username, $push: {links:{link: link, title: title}}})

    
            const us = await User.findById(id)
                
            return res.status(200).json(us)
                
        } catch (err) {
            return res.status(500).json({Error: "create button failed"})
        }
    }
}

module.exports = ProfileController