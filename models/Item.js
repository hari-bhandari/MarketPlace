const mongoose=require('mongoose')
const ItemSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'The Item you are selling requires a name']
    },
    price:{
        type:Number,
        required:[true,'The Item you are selling requires a price']
    },
    description:{
        type:String
    },
    location:{
        type:String
    },
    user:{
        type:mongoose.Schema.ObjectID,
        ref:'User',
        required:true
    }


})
module.exports=mongoose.model('Item',ItemSchema)