import { Schema, model } from "mongoose";

const CustomerPriceSchema = new Schema({
    price: {
        type: String,
        required: true
    },
    customer: {
        type: String,
        required: true
    },
    account: {
        ref: "User",
        type: Schema.Types.ObjectId,
    }
}, { timestamps: true })

const Customerprice = model("customerprice", CustomerPriceSchema)
export default Customerprice


