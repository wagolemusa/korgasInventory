import { Router } from "express"
import { requiresCustomer } from "../../middlewares"
import { Book, User } from "../../models"

const router = Router()

router.post('/v2/book', requiresCustomer, async(req, res) => {

    try{

        let { customer } = req;

        let book = new Book({
            account: customer.id,
            ...req.body

        })
        await book.save();

        return res.status(201).json({
            success: true,
            message: "Your Order will Proceded"
        })

    }catch(err){
        console.log(err)
    }
    
})

router.get('/v1/book', requiresCustomer, async(req, res) => {

    try{
        let book = await Book.find();
        return res.status(200).json({
            book
        })

    }catch(err){
        console.log(err)
    }
})


// fetch price for customers
router.get('/v1/price', requiresCustomer, async(req, res) => {
    try{

        let { customer } = req;

        let price = await User.find({customer: customer.id}).select("price");

        return res.status(200).json({
            success: true,
            price
        })

    }catch(err){
        console.log(err)
    }
})




export default router







