import { Schema, model } from "mongoose"

const GasStockSchema = new Schema({
    openstock: {
        type: String,
        required: true
    },
    closedStock: {
        type: String,
        required: true
    },
    gage: {
        type: String,
        required: false
    }
}, { timestamps: true})

const Gasstock = model("gasstock", GasStockSchema)
export default Gasstock;

