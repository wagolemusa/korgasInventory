import { Router } from "express";
import { Tankcategories, Kgs, GasStock } from "../models";
import { requiresSignin } from "../middlewares";

const router = Router();

//  Create Tank Categeery
router.post('/v1/tank/category', requiresSignin, async(req, res) => {
    try{
        let { manager } = req;
        let tankCate = new Tankcategories({
            account: manager.id,
            ...req.body
        })
        await tankCate.save();

        await Kgs.updateMany({ in_stock: "outOfStock" })

        await GasStock.findOneAndUpdate({ in_stock: "outOfStock" })

        return res.status(201).json({
            success: true,
            message: "Tank Created succesfully"
        })

    }catch(err){
        console.log(err)
    }
})

//  Query the tank category
router.get('/v1/tank/category', requiresSignin, async(req, res) => {
    try{
         let tank = await Tankcategories.findOne().sort({_id: -1});;

         return res.status(200).json({
            tank
         })

    }catch(err){
        console.log(err)
    }
})

export default router;

