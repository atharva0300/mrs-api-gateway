// Used for defininf the permissions for RBAC 
const roles = require('../config/roles.json')

class Permissions{
    constructor(){
        this.permissions = []
        this.roles = roles.roles
    }

    getPermissionByRoleName(roleName){
        const role = this.roles.find((role) => role.name === roleName)
        return role ? role.permissions : [];
    }
}


module.exports = Permissions