import { Schema, model } from 'mongoose'

const ProductSchema = new Schema({
    category: {
        type: String,
        required: true
    },
    kgs: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
    },
    points: {
        type: String,
        required: false
    },
    account: {
        ref: "User",
        type: Schema.Types.ObjectId,
    }
}, {timestamps: true})

const Product = model("product", ProductSchema);
export default Product;