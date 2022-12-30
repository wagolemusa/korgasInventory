import {  Schema, model } from "mongoose"

const FutureclientsSchema = new Schema ({
    name:{
        type: String,
        required: true
    },
    phoneNumber:{
        type: String,
        required: true
    },
    whatsupNumber:{
        type: String,
        required: true
    },
    town:{
        type: String,
        required: true
    },
    status:{
        type: String,
        required: false
    },
    address : {
        type: Schema.Types.ObjectId,
        ref: "Address"
    },
    account: {
        ref: "User",
        type: Schema.Types.ObjectId,
    }
    
}, {timestamps: true})

const Futures = model("future", FutureclientsSchema)
export default Futures



