import { Schema, model } from 'mongoose'

const StockSchema = new Schema ({
    category: {
        type: String,
        required: true
    },
    initial_quantity: {
        type: Number,
        default: 0
    },
    added_stock: {
        type: Number,
        default: 0
    },
    stock_quantity:{
        type: Number,
        default: 0
    },
    shop: {
      type: String,
      required: true
    },
    account: {
        ref: "User",
        type: Schema.Types.ObjectId,
    }
}, {timestamps: true})

const Stock = model("stock", StockSchema);
export default Stock;
