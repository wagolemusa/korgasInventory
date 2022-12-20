import { Schema, model, SchemaType } from "mongoose";

const PaymentSchema = new Schema({
    amount:{
        type: String,
        required: true
    },
    payment_type: {
        type: String,
        required: true
    },
    paymant_reference: {
        type: String,
        required: false,
    },
    employee: {
        ref: "Employee",
        type: Schema.Types.ObjectId,
    },
    status: {
        type: String,
        default: "pending"
    },
    order: {
        ref: "Order",
        type: Schema.Types.ObjectId
    }
}, { timestamps: true})

const Payments = model("payment", PaymentSchema)
export default Payments;



