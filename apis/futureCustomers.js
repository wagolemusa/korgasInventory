import { Router } from "express";
import { FutureClients } from "../models";
import { requiresSignin } from "../middlewares";    

const router = Router()

/**
 * @description Create Customer
 * @access Only Manager, sub-Admin and Admin can access
 * @api /api/v1/future/customer
 * @type POST
 */

router.post("/v1/future/customer", requiresSignin, async(req, res) => {
    try{
        let { manager } = req;

        let future = new FutureClients({
            account: manager.id,
            ... req.body
        })

        await future.save();
        return res.status(201).json({
            success: true,
            message: "Future Customers saved"
        })

    }catch(err){
        console.log(err)
    }
})

export default router;

