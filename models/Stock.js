import { Schema, model } from 'mongoose'

const StockSchema = new Schema ({
    category: {
        type: Schema.Types.ObjectId,
        ref: "Categoty"
    },
    size: {
        type: Schema.Types.ObjectId,
        ref: "Size"
    },
    quantity: {
        type: Number,
        required: true
    },
    shop: {
        ref: "Shop",
        type: Schema.Types.ObjectId,
    },
    tracker: {
        type: Schema.Types.ObjectId,
        ref: "Tracker"
    }
}, {timestamps: true})

const Stock = model("stock", StockSchema);
export default Stock;
