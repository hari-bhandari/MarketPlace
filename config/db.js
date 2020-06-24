const mongoose=require('mongoose');

const connectDB=async ()=>{
    const conn=await mongoose.connect('mongodb+srv://hari:hari@contact-me-dujtq.mongodb.net/market?retryWrites=true&w=majority',{
        useNewUrlParser:true,
        useCreateIndex:true,
        useFindAndModify:false,
        useUnifiedTopology:true
    })
    console.log(`mongoDB connected: ${conn.connection.host}`)


}
module.exports=connectDB;