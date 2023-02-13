import { Schema, model } from "mongoose";

const TankCategorySchema = new Schema({
    korgas_tank: {
        type: String,
        required:  true
    }
}, { timestamps: true })

const Tankcategories = model("tankcategories", TankCategorySchema);
export default Tankcategories

