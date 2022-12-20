import { Schema, model } from 'mongoose'

const TrackerSchema = new Schema({
    trancker_name: {
        type: String,
        required: true
    },
    number_plate: {
        type: String,
        required: true
    },
    driver_name: {
        type: String,
        required: true
    }

}, { timestamps: true})

const Tracker = model("tracker", TrackerSchema);
export default Tracker;
