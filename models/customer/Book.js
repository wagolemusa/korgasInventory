import { Schema, model } from "mongoose"

const BookSchema = new Schema({
    date: {
        type: String,
        required: true
    },
    cylinders:[
        {
            brand:{type: String, String: false},
            kgs:{type: Number, required: true},
            quantity: { type: Number, required: true},
            total: { type: Number, required: false}
        }
    ],
    finaltotal: {
        type: Number,
        required: true
    },
    amount: {
        type: Number,
        required: false
    },
    payslipImage: {
        type: String,
        required: false
    },
    paymentmethod: {
        type: String,
        required: false
    },
    payment: {
        type: String,
        default: "notpaid"
    },
    account: {
        ref: "User",
        type: Schema.Types.ObjectId,
    }

}, { timestamps: true })

const Boook = model("book", BookSchema)
export default Boook;

