const User = require('../models/user')

class CreateButtonController {
    async createButton(req, res){
        try {
            const { link, title, background, fontColor, borderColor } = req.body
            // const { id } = req.params;
            const id = req.userId

            const user = await User.findById(id)

            if(user.username === '') {
                return res.status(401).json({Error: 'redirect tela profile '})
            }

            if(user.plane == 'pro'){
                await User.findByIdAndUpdate(id, 
                    {$push: {
                            links:{
                                link: link, 
                                title: title,
                                css: [{
                                    background: background,
                                    fontColor: fontColor,
                                    borderColor: borderColor,
                                }]
                            }
                        }
                    })
    
                const us = await User.findById(id)
                
                return res.status(200).json(us)
            }
            
                       
            await User.findByIdAndUpdate(id, {$push: {links:{link: link, title: title}}})
    
            const us = await User.findById(id)
                
            return res.status(200).json(us)
                
        } catch (err) {
            return res.status(500).json({Error: "create button failed"})
        }
    }
}

module.exports = CreateButtonController