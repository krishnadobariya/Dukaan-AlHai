const router = require('express').Router();
const adminSchema = require('../middleware/auth');
const Admin = require('../models/admin');

router.get('/admin', (req,res) => {
    res.render('admin');
})

router.post('/admin', async (req,res) => {
    const username = req.body.username;
    const user = await Admin.findOne({username:username});
    const adminUser = await Admin.find({});
    // console.log(adminUser);
    const ismatch = adminUser[0].username == req.body.username && adminUser[0].password == req.body.password;
    const token = await user.generateauthtoken();
    res.send({user:user})
})

module.exports = router;