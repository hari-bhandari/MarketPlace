///////////importing modules//////////////////////
const express=require('express')
const dotenv=require('dotenv')
const fileUpload=require('express-fileupload')
const helmet=require('helmet')
const xss=require('xss-clean')
const rateLimit=require('express-rate-limit');
const hpp=require('hpp')
const cors=require('cors')
const mongoSanitize=require('express-mongo-sanitize')

////////////////////////////////////////////////


///////////config //////////////////////////////

dotenv.config({path:'./config/config.env'})

////////////////////////////////////////////////

const app=express()
///////////init middlewares//////////////////////

app.use(express.json())
//for photos
app.use(fileUpload())
//helmet for headers
app.use(helmet())
//santitize data
app.use(mongoSanitize())
////////////////////////////////////////////////


const PORT=process.env.PORT||5000
app.get('/',(req,res)=>{
    res.send('Welcome to the market place')
})
app.listen(PORT,()=>{
    console.log(`Server started on ${PORT}`)
})
