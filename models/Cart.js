import { Schema, model } from "mongoose";

const CartSchema = new Schema({
    cartItems: [
        {
            stcok:{
                type: Schema.Types.ObjectId,
                ref: "Stock"
            },
            quantity: {
                type: Number, 
                default: 1 
            },
            
        }
    ]
}, { timestamps: true });

const Cart = model("cart", CartSchema);
export default Cart
