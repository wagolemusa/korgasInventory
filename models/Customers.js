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
        required: false
    },
    address : {
        type: String,
        required: false
    },
    town:{
        type:String,
        required: false
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


