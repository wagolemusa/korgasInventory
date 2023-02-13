import { Router } from "express";
import { Kgs,Tankcategories } from "../models"; 
import { requiresSignin } from "../middlewares";
import { accountSid, authToken } from "../constants/index";
import mulitemail from "../functions/multSender";
const client = require('twilio')(accountSid, authToken);

const router = Router()

router.post("/v1/kgs", requiresSignin, async(req, res) => {
    try{
        let { manager } = req;
        
        let tank = await Tankcategories.findOne().sort({_id: -1});
    

    
        let gaskgs = new Kgs({
            account: manager.id,
           
            ...req.body ,
            tank_category: tank.korgas_tank
        })
        
        await gaskgs.save();
        
     
        let subject = "Gas Orders"
        let text = "musa"

        let order = gaskgs.cylinders.map(item => (
            `${item.kgs} kgs ... ${item.quantity} cylinders = ${item.total} <br/>`
        ))
        let html = `
        
        ----------------------------------------------------
        
            <h2>${gaskgs.customer}'s Order </h2> 
            <b> On ${gaskgs.date}<b/><br/>
           <h3> ${order.join("\n")}</h3/><br/>
            <h1>Total: <b>${gaskgs.finaltotal} <b/></h1>

            -----------------------------------------------
        `


        mulitemail(subject, text, html)


        return res.status(201).json({
            success: true,
            message: "Save data"
        })

        

    }catch(err){
        console.log(err)
    }
})

//  Quey kgs
router.get('/v1/kgs', requiresSignin, async(req, res) => {
    try{

        let kgs = await Kgs.find().find().sort({_id: -1});

        return res.status(200).json({
            kgs
        })

    }catch(err){       
        console.log(err)
    }
})

router.patch("/v1/update/stock", requiresSignin, async(req, res) => {
    try{

        await Kgs.updateMany({ in_stock: "in_stock", tank_category: "kor-tank-1" });
    
        return res.status(201).json({
            success: true,
            message: "Udated successfuly"
        })

    }catch(err){
        console.log(err)
    }
})

export default router;





