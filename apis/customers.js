import { Router } from "express";
import { Customers } from "../models";
import {  validationResult } from 'express-validator';
import { CustomerValidation } from "../validators/user_validator";
import { requiresSignin } from "../middlewares";

const router = Router()

/**
 * @description Create Customers Account
 * @access Only Manager, sub-Admin and Admin can access
 * @api /api/v1/customers
 * @type POST
 */
router.post('/v1/customers', requiresSignin, async(req, res)=> {
    try{
        let { manager } = req;
        // Categoryproductsne({ phonenumber })
        // if (customer1){            account: manager.id,

        //     return res.status(411).json({
        //         success: false,
        //         message: "Customer phone Number exits"
        //     })
        // }
        // let customer2 = await Customers.findOne({ whatsupnumber })
        // if (customer2){
        //     return res.status(411).json({
        //         success: false,
        //         message: "Customer whatups Number exits"
        //     })
        // }
        // const errors = validationResult(req);
        // if(!errors.isEmpty()){
        //     return res.status(400).json({
        //         success: false,
        //         message: errors.array()

        //     })
        // }
        let customer = new Customers({
            account: manager.id,
            ... req.body
        }) 
        await customer.save();
        return res.status(201).json({
            success: true,
            message: "Customer was created successfuly"
        })

    }catch(err){
        console.log(err)
    }
})

/**
 * @description Select only Business Name in Customers
 * @access Only Manager, sub-Admin and Admin can access
 * @api /api/v1/customers
 * @type GET
 */
router.get("/v1/customers", requiresSignin, async(req, res) => {
    try{

        let buz = await Customers.find().select('businessname');
        return res.status(200).json({
            buz
        })

    }catch(err){
        console.log(err)
    }
})

// featch all customers data
router.get('/v1/clients', requiresSignin, async(req, res) => {
    try{
        let customer = await Customers.find();
        return res.status(200).json({
            customer
        })
    }catch(err){
        console.log(err)
    }
})

// Query Customer by Id
router.get('/v1/client/:id', requiresSignin, async(req, res) => {
    try{
        const client = await Customers.findById(req.params.id);
        return res.status(200).json({
            client
        })

    }catch(err){
        console.log(err)
    }
})

// Update Customer
router.put('/v1/customer/:id', requiresSignin, async(req, res) => {
    const { id } = req.params;
    try{
        const {businessname,phonenumber, whatsupnumber, email, mounthlySale,address,town, price } = req.body;
        const coustomer = await Customers.findByIdAndUpdate(id, {businessname,phonenumber, whatsupnumber, email, mounthlySale,address,town, price })
        return res.status(201).json({
            coustomer
        })

    }catch(err){
        console.log(err)
    }
})

export default router;