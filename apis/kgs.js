import { Router } from "express";
import { Kgs } from "../models"; 
import { requiresSignin } from "../middlewares";

const router = Router()

router.post("/v1/kgs", requiresSignin, async(req, res) => {
    try{
        let { manager } = req;

        let gaskgs = new Kgs({
            account: manager.id,
            ...req.body 
        })
        
        await gaskgs.save();
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
export default router;





