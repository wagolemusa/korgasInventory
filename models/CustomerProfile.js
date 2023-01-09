import { Schema, model } from "mongoose"


const CustomerProfileSchema = new Schema({
    businessname: {
        type: String,
        required: true
    },
    phonenumber: {
        type: Number,
        required: true
    },
    whatsupnumber: {
        type: Number,
        required: true
    },
    mounthlySale: {
        type: Number,
        required: true
    },
    idnumber: {
        type: String,
        required: false
    },
    address : {
        type: Schema.Types.ObjectId,
        ref: "Address"
    },
    town:{
        type:String,
        required: true
    },
    account: {
        ref: "User",
        type: Schema.Types.ObjectId,
    }

},{ timestamps: true })

const Customerprofile = model("customerprofile", CustomerProfileSchema);
export default Customerprofile


