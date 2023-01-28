import { Schema, model } from "mongoose";

const CategoryProduct = new Schema({
    name: {
        type: String,
        required: true
    }
})


const Categoryproducts = model("categoryproduct", CategoryProduct)
export default Categoryproducts

