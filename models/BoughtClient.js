import { Schema, model } from "mongoose"

const BoughtSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    whatsNumber: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    town:{
        type: String,
        required: true
    },
    address : {
        type: Schema.Types.ObjectId,
        ref: "Address"
    },
}, { timestamps: true})

const Bought = model("bought", BoughtSchema)
export default Bought;


