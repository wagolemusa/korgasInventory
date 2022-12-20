import { Schema, model } from "mongoose";

const PointSchema = new Schema ({
    phone_number: {
        type: Number,
        required: true
    },
    points:{
        type: Number,
        required: true
    },
    employee: {
        ref: "Employee",
        type: Schema.Types.ObjectId,
    }

}, { timestamps: true})

const Points = model("point", PointSchema);
export default Points;

