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
    address : {
        type: Schema.Types.ObjectId,
        ref: "Address"
    },
    
}, {timestamps: true})

const Futures = model("future", FutureclientsSchema)
export default Futures



