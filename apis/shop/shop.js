import { Router } from "express";
import { Shop } from "../../models";  
import { requiresSignin } from "../../middlewares";

const router = Router()

// Created Shops
router.post('/v1/shop', requiresSignin, async(req, res) => {
    try{
    let { manager } = req;
    let shop = new Shop({
        account: manager.id,
        ...req.body
    })
    await shop.save()
    return res.status(201).json({
        success: true,
        message: "Shops are created Succusfuly"
    })

    }catch(err){
        console.log(err)
    }
})

// Fetch Shops 
router.get('/v1/shop', requiresSignin, async(req, res) => {

    try{
        let shop = await Shop.find();

        return res.status(200).json({
            shop
        })

    }catch(err){
        console.log(err)
    }
})


export default router;





