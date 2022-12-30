import { Router } from "express";
import { Address } from "../models";

const router = Router()

router.post("/v1/address", async(req, res) => {
    try{

        let address = new Address ({
            ... req.body
        })
        await address.save()
        return res.status(201).json({
            success: true,
            message: "Address added Successfuly"
        })

    }catch(err){
        console.log(err)
    }
})

export default router;