import { Schema, model} from 'mongoose'

const ShopSchema = new Schema({
    shop_name: {
        type: String,
        required: true,
    },
    address : {
        type: String,
        required: true
    },
    town: {
        type: String,
        required: true
    },

    employee: {
        type: String,
        required: true
    },
    account: {
        ref: "User",
        type: Schema.Types.ObjectId,
    }
}, { timestamps: true})

const Shop = model("shop", ShopSchema);
export default Shop;

