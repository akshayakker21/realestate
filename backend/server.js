let express = require('express');
let app=express();
const cors = require('cors')
app.use(cors())
 
let bodyparser = require('body-parser');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}))




app.use('/login',require('./login'))
app.use('/register',require('./register'))
app.use('/fetch',require('./fetch'))
app.use('/fetch2',require('./fetch2'))



app.listen(3028,(req,res)=>{
    console.log("port listening at 3200")
})
