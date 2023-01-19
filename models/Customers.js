import { Schema, model } from "mongoose"


const CustomerSchema = new Schema({
    businessname: {
        type: String,
        required: true
    },
    phonenumber: {
        type: Number,
        required: false
    },
    whatsupnumber: {
        type: Number,
        required: false
    },
    email: {
        type: String,
        required: false
    },
    mounthlySale: {
        type: Number,
        required: true
    },
    address : {
        type: String,
        required: true
    },
    town:{
        type:String,
        required: true
    },
    price: {
        type: Number,
        required: false
    },
    account: {
        ref: "User",
        type: Schema.Types.ObjectId,
    }

},{ timestamps: true })

const Customers = model("customer", CustomerSchema);
export default Customers


