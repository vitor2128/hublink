const User = require('../models/user')

class ProfileController {
    async createProfile(req, res){
        try {
            const { username, titleProfile, bio } = req.body
  
            const id  = req.userId

            if(await User.findOne({ username })) 
                return res.status(400).json({Error: "Username already exists, try again"})
                       
            await User.findByIdAndUpdate(id, {
                    username:username,
                    titleProfile:titleProfile,
                    bio:bio,
                })
    
            const user = await User.findById(id)
                
            return res.status(200).json(user)
                
        } catch (err) {
            return res.status(500).json({Error: "create button failed"})
        }
    }
    async findProfile(req, res){
        try {
            const { username } = req.body
  
            const id  = req.userId

            if(await User.findOne({ username })) 
                return res.status(401).json({Error: "Username already exists, try again"})
                       
            // await User.findByIdAndUpdate(id, {
            //         username:username,
            //         titleProfile:titleProfile,
            //         bio:bio,
            //     })
    
            // const user = await User.findById(id)
                
            return res.status(200).json({OK:"Ok"})
                
        } catch (err) {
            return res.status(500).json({Error: "create button failed"})
        }
    }
}

module.exports = ProfileController