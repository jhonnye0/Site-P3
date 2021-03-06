const User = require('../models/User');

module.exports = {
    async store(req, res) {    
        
        const { user } = req.headers;
        const { userId } = req.params;

        const loggedUser = await User.findById(user);
        const targetUser = await User.findById(userId);

        if(!targetUser){
            res.status(400).json({ error: 'User not found' });
        }
        
        if(!targetUser.likes.includes(loggedUser._id)){
            targetUser.likes.push(loggedUser._id);
            await targetUser.save();
        }
        
        return res.json(targetUser);
    }
};