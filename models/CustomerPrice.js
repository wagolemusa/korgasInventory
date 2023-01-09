import { Schema, model } from "mongoose";

const CustomerPriceSchema = new Schema({
    price: {
        type: String,
        required: true
    },
    customer: {
        ref: "Customerprofile",
        type: Schema.Types.ObjectId,
    },
    account: {
        ref: "User",
        type: Schema.Types.ObjectId,
    }
}, { timestamps: true })

const Customerprice = model("customerprice", CustomerPriceSchema)
export default Customerprice


