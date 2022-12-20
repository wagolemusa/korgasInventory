import { Schema, model } from 'mongoose'

const ProductSchema = new Schema({
    serial_number: {
        type: String,
        required: true
    },
    retail_price: {
        type: Number,
        required: true
    },
    wholesale_price: {
        type: Number,
        required: true,
    },
    points: {
        type: String,
        required: false
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "Categoty"
    },
    size: {
        type: Schema.Types.ObjectId,
        ref: "Size"
    },
    employee: {
        ref: "Employee",
        type: Schema.Types.ObjectId,
    }
}, {timestamps: true})

const Product = model("product", ProductSchema);
export default Product;