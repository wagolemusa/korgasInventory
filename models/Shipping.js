import { Schema, model } from "mongoose";

const ShippingSchema = new Schema ({
    quantity: {
        type: Number,
        required: true
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "Categoty"
    },
    size: {
        type: Schema.Types.ObjectId,
        ref: "Size"
    },
    tracker: {
        type: Schema.Types.ObjectId,
        ref: "Tracker"
    }
}, { timestamps: true })

const Shipping = model("shipping", ShippingSchema)
export default Shipping;


