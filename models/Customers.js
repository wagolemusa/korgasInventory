import { Schema, model } from "mongoose"

const CustomersSchema = new Schema ({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
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
    
}, { timestamps: true })

const Customers = model("customers", CustomersSchema)
export default Customers

