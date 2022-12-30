import { Schema, model } from "mongoose"

const TrellerSchema = new Schema ({
    date: {
        type: String,
        required: true
    },
    numberPlate:{
        type: String,
        required: true
    },
    driverName: {
        type: String,
        required: true,
    },
    phoneNumber:{
        type: Number,
        required: true
    },
    first_time_net_wight: {
        type: String,
        required: false
    },
    second_time_net_wight: {
        type: String,
        required: false
    },
    remain_gas_los: {
        type: String,
        required: true
    },
    account: {
        ref: "User",
        type: Schema.Types.ObjectId,
    }
}, { timestamps: true})

const Treller = model("treller", TrellerSchema)
export default Treller;

