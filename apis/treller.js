import { Router } from "express";
import  { Treller, User } from '../models'
import { requiresSignin } from "../middlewares";

const router =  Router()

/**
 * @description Record Treller data
 * @access Only Manager, sub-Admin and Admin can access
 * @api /api/v1/treller
 * @type POST
 */
router.post('/v1/treller', requiresSignin,  async(req, res) => {
    try{
        let { manager } = req;
        let {date, numberPlate, driverName, phoneNumber,first_time_net_wight, second_time_net_wight, remain_gas_los } =  req.body;

        remain_gas_los = first_time_net_wight - second_time_net_wight;

        let treller = new Treller({
            account: manager.id,
            date,
            numberPlate,
            driverName,
            phoneNumber,
            first_time_net_wight,
            second_time_net_wight,
            remain_gas_los
        })
        await treller.save();
        return res.status(201).json({
            success: true,
            message: "Data  created"
        })

    }catch(err){
        console.log(err)
    }
})

export default router;



