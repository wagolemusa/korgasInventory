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


router.get('/v1/address', async(req, res) => {

    try{
        let address = await Address.find();

        return res.status(200).json({
            address
        })

    }catch(err){
        console.log(err)
    }
})
export default router;