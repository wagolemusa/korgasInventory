import { Router } from "express";
import { requiresSignin } from "../middlewares";
import Categoryproducts from "../models/CategoryProduct";

const router = Router()


//  Create Product Category
router.post('/v1/category/product', requiresSignin, async(req, res) => {
    try{
        let { manager } = req;
        let category = new Categoryproducts({
            account: manager.id,
            ...req.body,
        })
        await category.save()
        return res.status(201).json({
            success: true,
            message: "Category Are Created Successfully"
        })

    }catch(err){
        console.log(err)
    }
})

// Fetch category Product
router.get('/v1/category/product', requiresSignin, async(req, res) => {
    try{

        let categ = await Categoryproducts.find()
        return res.status(200).json({
            categ
        })

    }catch(err){
        console.log(err)
    }
})

export default router;



