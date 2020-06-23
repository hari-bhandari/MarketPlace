///////////importing modules//////////////////////
const express=require('express')
const dotenv=require('dotenv')
////////////////////////////////////////////////


///////////config //////////////////////
dotenv.config({path:'./config/config.env'})
////////////////////////////////////////////////

const app=express()
///////////init middlewares//////////////////////
app.use(express.json())
////////////////////////////////////////////////


const PORT=process.env.PORT||5000
app.get('/',(req,res)=>{
    res.send('Welcome to the market place')
})
app.listen(PORT,()=>{
    console.log(`Server started on ${PORT}`)
})
