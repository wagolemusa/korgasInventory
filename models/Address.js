import { Schema, model } from "mongoose";
const AddressSchema = new Schema ({
    district: {
        type: String,
        required: false
    }
}, { timestamps: true})

const Address = model("address", AddressSchema)
export default Address

