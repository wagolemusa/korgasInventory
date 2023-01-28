import { Router } from "express";
import { Stock } from "../../models";
import { requiresSignin } from "../../middlewares";

const router = Router()

// create shops
router.post('/v1/add/stock', requiresSignin, async(req, res) => {
    try{
        let { manager } = req;
   
        const { category, added_stock, shop} = req.body

        let initQnt = await Stock.findOne({category: category, shop: shop}).select("stock_quantity").sort({_id: -1});

        let stocQnt = initQnt.stock_quantity

        let initial_quantity = Number(stocQnt)

        let stock_quantity = Number(stocQnt) + Number(added_stock)

        let shopStock = new Stock({
            account: manager.id,
            category,
            initial_quantity,
            added_stock,
            stock_quantity,
            shop
        })
        await shopStock.save()
        return res.status(201).json({
            success: true,
            message: "Shop Was created"
        })

    }catch(err){
        console.log(err)

    }
})



router.post('/v1/admin/add/stock', requiresSignin, async(req, res) => {
    try{
        let { manager } = req;
        const { category, added_stock, shop } = req.body;
        
        let firstStockAdd = new Stock({
            account: manager.id,
            category,
            added_stock,
            shop
        })
        await firstStockAdd.save()
        return res.status(201).json({
            success: true,
            message: "Shop Was created"
        })

    }catch(err){
        console.log(err)
    }
})

// get Shops
router.get('/v1/add/stock', requiresSignin, async(req, res) => {
    try{

        let shops = await Stock.find();
        return res.status(200).json({
            shops
        })

    }catch(err){
        console.log(err)
    }
})



export default router 





