const Item=require('../models/Item');
const asyncHandler=require('../middlewares/async');
const ErrorResponse=require('../utils/errorResponse');

//@desc Get all bootcamps
//@route GET /
//@access
exports.getItems=asyncHandler(async(req,res,next)=>{
    res.status(200).json(res.advancedResults)
})

//@desc add a item
//@route POST /items
//@access Private
exports.addItem=asyncHandler(async (req,res,next)=>{
    const {name,price,description,location}=req.body;

    //Create a item
    const item=await Item.create({
        name,price,description,location
    });
    res.status(201).send({success:true,item:item})

})//@desc remove a item
//@route REMOVE /items
//@access private
exports.removeItem=asyncHandler(async (req,res,next)=>{
    let item = await Item.findById(req.params.id, req.body);
    if (!item){
        return next(new ErrorResponse(`Item ${req.params.id} is not found `))
    }
    if(item.user.toString()!==req.user.id){
        return next(new ErrorResponse(`Item ${req.params.id} cannot be deleted `))

    }
    item.remove()
    res.status(200).json({
        success:true,
        data: {}
    });

})
//@desc update a item
//@route PUT /item:id
//@access private
exports.updateItem= asyncHandler(async (req,res,next)=>{
    let item=await Item.findById(req.params.id);
    if(!item){
        return next(new ErrorResponse(`item not found with id of ${req.params.id}`,404));
    }
    //make sure user is bootcamp user
    if(item.user.toString()!==req.user.id){
        return next(new ErrorResponse(`User ${req.params.id} is not authorized to update this item`,401));
    }
    item=await Item.findOneAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true
    })
    res.status(200).json({
        success:true,
        data:item
    });

})

