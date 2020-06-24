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
const path=require('path')
//importing files
const connectDB=require('./config/db')
const errorHandler=require('./middlewares/error')
//importing routes
const auth=require('./Routes/auth')
// const item=require('./Routes/item')
////////////////////////////////////////////////


///////////config //////////////////////////////

dotenv.config({path:'./config/config.env'})

////////////////////////////////////////////////

const app=express()
//connect to database
connectDB()
///////////init middlewares//////////////////////

app.use(express.json())
//for photos
app.use(fileUpload())
//helmet for headers
app.use(helmet())
//santitize data
app.use(mongoSanitize())
//xss
app.use(xss())
//limit rate
    const Limiter=rateLimit({
        windowsMs:10*1000*60,
        max:100
    })
app.use(Limiter)
//prevent http param pollution
app.use(hpp())
//enable cors
app.use(cors())
//making images static
app.use(express.static(path.join(__dirname,'public')))
//routes
// app.use('/item',item)
app.use('/auth',auth)
//error handler
////////////////////////////////////////////////
app.use(errorHandler)
const PORT=process.env.PORT||5000
app.get('/',(req,res)=>{
    res.send('Welcome to the market place')
})
app.listen(PORT,()=>{
    console.log(`Server started on ${PORT}`)
})
