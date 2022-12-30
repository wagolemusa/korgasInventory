import { Router } from "express";
import { Kgs } from "../models"; 
import { requiresSignin } from "../middlewares";

const router = Router()

router.post("/v1/kgs", async(req, res) => {
    try{
        let { manager } = req;
        let { date, customers, cylinders, total } = req.body;

        // kgs = req.body.cylinders;
        // quantity = req.body.cylinders;
        // const totalgas = kgs * quantity;
        // total = total + totalgas;

        // console.log(kgs)
        // console.log(quantity)
        // console.log(totalgas)
        // console.log(total)
        

        let gaskgs = new Kgs({
            date,
            customers,

            cylinders: {
                kgs: req.body.cylinders.kgs,
                quantity: req.body.cylinders.quantity

            },

            cylinders:  req.body.cylinders.kgs * req.body.cylinders.quantity ,
            
            total
            
        })
        console.log(gaskgs)
        console.log(cylinders)

    }catch(err){
        console.log(err)
    }
})


export default router;





