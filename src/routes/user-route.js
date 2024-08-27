const express = require('express');
const { updateUserNameController } = require('../controllers/user-controller');
const router = express.Router()


// middleware 
const verifyJWT = require('../middlewares/verifyJWT')
const rbac = require("../middlewares/rbac")

router.patch('/username' , verifyJWT , rbac.checkPermission("update_username") , updateUserNameController);

module.exports = router;
