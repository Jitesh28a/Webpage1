require('dotenv').config()
const express=require('express')
const mongoose=require('mongoose')
const userRoutes=require('./routes/user')

const app=express()

app.listen(3000,()=>{
    console.log('Server is running at 3000')
})
//cors
const cors = require('cors');
app.use(cors());

//middelware
app.use(express.json())
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})
//Routes
app.use('/user', userRoutes);


//connect to database
mongoose.connect(process.env.DATABASE)
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log('CONNECTED TO DATABASE & Server is running at Port ',process.env.PORT)
    })
})
.catch((error)=>{
    console.log(error)
})
