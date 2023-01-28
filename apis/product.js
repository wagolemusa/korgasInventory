import { Router } from "express";
import { Product } from "../models";
import { requiresSignin } from "../middlewares";

const router = Router()

// Create Products
router.post('/v1/product', requiresSignin, async(req, res) => {
    try{

        let { manager } = req;

        let product = new Product({
            account: manager.id,
            ...req.body
        })
        await product.save()
        return res.status(201).json({
            success: true,
            message: "Product Saved"
        })
        
    }catch(err){
        console.log(err)
    }
})


// Fetch Product data
router.get('/v1/product', requiresSignin, async(req, res) => {
    try{    
        let product = await Product.find()
        return res.status(200).json({
            product
        })
    }catch(err){
        console.log(err)
    }
})

export default router;






