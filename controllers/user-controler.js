const {User} = require('../models/User.js');

const userController = {

    getAllUsers: async(req, res) = {
        try {
            const users = await User.find();
            res.json(users);
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    },
    
    getUserById: async(req, res) => {
        try{
            const user = await User.findById(req.params.id);
            if(!user){
                res.status(404).json({error: 'User not found'});  
                return; 
            }
            res.json(user);
            }catch (error){
                console.log(error);
                res.status(500).json({error: "Internal Server Error"});
            }
        }

        
    }
    


