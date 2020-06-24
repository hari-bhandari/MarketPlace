const express=require('express')

const {addItem,removeItem,updateItem,getItems,uploadPhoto} =require('../controllers/items')
const router=express.Router()

const advancedResults=require('../middlewares/advancedResult')
const {protect,authorize}=require('../middlewares/auth')
const Item=require('../models/Item')
router.route('/').get(advancedResults(Item),getItems).post(protect,addItem)
router.route('/:id').delete(protect,removeItem).put(protect,updateItem)
// router.route('/:id/photo').put(protect,uploadPhoto)
module.exports=router