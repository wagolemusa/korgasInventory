import { Router } from "express";
import { Employees } from "../models";
import { requiresSignin } from "../middlewares";

const router = Router();

// creates employees
router.post('/v1/employee', requiresSignin, async (req, res) => {

    try {
        let { manager } = req;
        const { lastname } = req.body

        let userlastName = await Employees.findOne({ lastname })
        if (userlastName) {
            return res.status(411).json({
                success: false,
                message: "Last Name exits"
            }) 
        }

        let employee = new Employees({
            account: manager.id,
            ...req.body

        })
        await employee.save()
        return res.status(201).json({
            success: true,
            message: "Employee Created successfully"
        })

    } catch (err) {
        console.log(err)
    }
})

//Queries employees
router.get('/v1/employee', requiresSignin, async(req, res) => {

    try{

        let employee = await Employees.find();
        return res.status(200).json({
            employee
        })
    }catch(err){
        console.log(err)
    }
})

export default router;


