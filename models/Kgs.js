import { Schema, model } from "mongoose";

const KgsSchema = new Schema ({
    date: {
        type: String,
        required: true
    },
    tank_category: {
        type: String,
        required: true
    },
    customer : {
        type: String,
        required: true
    },
    cylinders:[
        {
            kgs:{type: Number, required: true},
            quantity: { type: Number, required: true},
            total: { type: Number, required: false}
        }
    ],
    finaltotal: {
        type: Number,
        required: true
    },
    in_stock: {
        type: String,
        default: "In_stack"
    },
    account: {
        ref: "User",
        type: Schema.Types.ObjectId,
    }
    
}, { timestamps: true})

const Kgscylinders = model("kgscylinders", KgsSchema)
export default Kgscylinders;

