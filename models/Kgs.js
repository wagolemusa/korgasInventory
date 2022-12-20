import { Schema, model } from "mongoose";

const KgsSchema = new Schema ({
    date: {
        type: String,
        required: true
    },
    customers : {
        type: Schema.Types.ObjectId,
        ref: "Customers"
    },
    cylinders:[
        {
            kgs:{type: String, required: true},
            quantity: { type: String, required: true}
        }
    ],
    total: {
        type: String,
        required: true
    }

    
}, { timestamps: true})

const Kgscylinders = model("kgscylinders", KgsSchema)
export default Kgscylinders;

