import { Router } from "express";
import { GasStock } from "../models";
import { requiresSignin } from "../middlewares";


const router = Router()

router.post("/v1/stock", requiresSignin, async (req, res) => {
    try {
        let { manager } = req;
        let { date, openStock, closedStock, currentStock } = req.body;
         const totalstock = Number(openStock ) + Number(closedStock) 

         currentStock = totalstock
        let stock = new GasStock({
            account: manager.id,
            date,
            openStock,
            closedStock,
            totalstock,
            currentStock
        })

        await stock.save();
        return res.status(201).json({
            success: true,
            message: "Stock Added"
        })

    } catch (err) {
        console.log(err)
    }
})

router.get("/v1/stock", requiresSignin, async (req, res) => {
    try {

        let stock = await GasStock.find().sort({_id: -1})
        return res.status(200).json({
            stock
        })

    } catch (err) {
        console.log(err)
    }
})


export default router

