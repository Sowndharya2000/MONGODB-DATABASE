const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/empdata')
.then(()=>{
    console.log('connect');
})
.catch((error)=>{
    console.log(error);
})