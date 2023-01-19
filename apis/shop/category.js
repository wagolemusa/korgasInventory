import { Router } from "express";
import { Category } from "../../models";

const router = Router()

// creating Category

router.post('/v1/category', async(req, res) => {

    try{
        const { category_name } = req.body;
        let category = new Category({
            category_name
        })
        await category.save();
        return res.status(201).json({
            success: true,
            message: "Category Are  Created"
        })
    }catch(err){
        console.log(err)
    }
})


// Fetching the  category

router.get('/v1/category', async(req, res) => {
    try{
        let cate = await Category.find();

        return res.status(200).json({
            cate
        })
    }catch(err){
        console.log(err)
    }
})

export default router;


