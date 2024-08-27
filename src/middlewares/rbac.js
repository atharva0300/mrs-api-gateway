// Middleware for role-based access control ( RBAC )
const Role = require('../models/rolesModel')
const Permissions = require('../models/permissionsModel')

module.exports.checkPermission = (permission) => {
    return (req , res, next) => {
        const userRole = req.role ? req.role : 'anon';
        const userPermission = new Permissions().getPermissionByRoleName(userRole)

        if(userPermission.includes(permission)){
            return next()
        }else{
            return res.status(403).json({error : "Access denied"})
        }
    }
}

