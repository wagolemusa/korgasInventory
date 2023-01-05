import { Schema, model } from "mongoose"

const GasStockSchema = new Schema({
    date: {
        type: String,
        required: false
    },
    openStock: {
        type: Number,
        required: true
    },
    closedStock: {
        type: String,
        required: true
    },
    totalstock: {
        type: Number,
        required: false
    },
    currentStock: {
        type: Number,
        required: false
    },
    account: {
        ref: "User",
        type: Schema.Types.ObjectId,
    }
}, { timestamps: true})

const Gasstock = model("gasstock", GasStockSchema)
export default Gasstock;

