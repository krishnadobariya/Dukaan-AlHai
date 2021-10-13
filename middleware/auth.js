const jwt = require('jsonwebtoken');
const admin = require('../models/admin');

const auth = async (req,res,next) => {
    try {
        
        const token = req.cookies.jwt;
        console.log(token);
        const verifyUser = jwt.verify(token, process.env.SECRET_KEY);
        console.log(`Verify Token ${verifyUser}`);
        const user = await admin.findOne({ _id:verifyUser._id});
        console.log(`User Find ${user}`);

        req.token = token;
        req.user = user;
        next();

    } catch (error) {
        res.status(401).send('Not Match Data')
    }
}
