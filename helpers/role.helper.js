var db = require('../models/index.js');

module.exports = {
    assignRoleName: function(user, callback){
        db.Role.findById(user.RoleId)
        .then(role=>{
            callback(role.role);
        })
        .catch(err=>{
            res.status('500').json({
                message: 'Error id role'
            });
        })
    }
}