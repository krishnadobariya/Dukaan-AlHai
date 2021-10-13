const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/dukkanAlHai")
.then(() => {
    console.log('Database Connection');
}).catch((e) => {
    console.log('Database Not Connected');
})