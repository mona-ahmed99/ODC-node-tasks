
const router = require('express').Router();
const user = require('../controller/user.controller')

router.get('/', user.addUser);

router.get('/allUsers', user.showAllUsers);

router.get('/singleUser', user.showSingleUser);

router.get('/edit', user.editUser);








module.exports = router;