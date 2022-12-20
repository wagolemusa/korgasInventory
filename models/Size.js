import { Schema, model } from "mongoose"

const SizeSchema = new Schema({
    size: {
        type: String,
        required: true,
    }
},{timestamps: true})

const Size = model("size", SizeSchema);
export default Size;
