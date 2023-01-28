import { Schema, model } from "mongoose"

const EmployeeSchema = new Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required:false,
    },
    idnumber: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    salary: {
        type: String,
        required: true,
    }, 
    sex : {
        type: String,
        required: true
    },
    responsibilty:{
        type: String,
        required: true
    },
    address : {
        type: String,
        required: true
    },
    town: {
        type: String,
        required: true
    },
    account: {
        ref: "User",
        type: Schema.Types.ObjectId,
    }

}, {timestamps: true})

const Employee = model("employee", EmployeeSchema);
export default Employee;