const mongoose=require('mongoose')
const slugify=require('slugify')
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
        type:mongoose.Schema.ObjectId,
        ref:'User',
        required:true
    },
    slug:{
        type:String,
        unique:true
    }


})
// ItemSchema.pre('save',function (next) {
//     this.slug=slugify(this.name,{lower:true})
//     next();
//
// })
module.exports=mongoose.model('Item',ItemSchema)