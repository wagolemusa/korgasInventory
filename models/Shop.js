import { Schema, model} from 'mongoose'

const ShopSchema = new Schema({
    shop_name: {
        type: String,
        required: true,
    },
    address : {
        type: Schema.Types.ObjectId,
        ref: "Address"
    },
    employee: {
        ref: "Employee",
        type: Schema.Types.ObjectId,
    }
}, { timestamps: true})

const Shop = model("shop", ShopSchema);
export default Shop;

