import { Router } from "express";
import { Kgs } from "../models";
import Gasstock from "../models/GasStock";
import { requiresSignin } from "../middlewares";

const router = Router()

// Query total sum kgs from  Kgs table
router.get('/v1/total', async (req, res) => {
    try {

        // let kgstotal = await Kgs.aggregate([{ $group: { _id: null, "total": { $sum: "$finaltotal" } }} ] )
        let kgstotal = await Kgs.aggregate([{$match: {in_stock: "In_stack"} }, {$group: {_id: null, finaltotal: {$sum: "$finaltotal"}}}])
        console.log({ kgstotal: kgstotal[0].finaltotal})
        return res.status(200).json({
            kgstotal: kgstotal[0].finaltotal
        })

    } catch (err) {
        console.log(err)
    }
})

// Query the current stock from GasStock table
router.get('/v1/current/stock', async (req, res) => {

    try {
        
        let stockgas = await Gasstock.findOne().select("currentStock").sort({_id: -1});
        return res.status(200).json({
            stockgas
        })

    } catch (err) {
        console.log(err)
    }
})

export default router;