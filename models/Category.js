import { Schema, model } from 'mongoose';

const CategoriesSchema = new Schema({
    category_name: {
        type: String,
        required: true
    }
}, {timestamps: true})

const Category = model("categories", CategoriesSchema)
export default Category;

