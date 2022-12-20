import { Schema, model } from "mongoose"
import { pick } from 'lodash'


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
    password: {
        type: String,
        required: true,
    },
    verified:{
        type: Boolean,
        required: false,
    },
    address : {
        type: Schema.Types.ObjectId,
        ref: "Address"
    }

}, {timestamps: true})

EmployeeSchema.methods.getUserInfo = function () {
    return pick(this, ["_id", "firstname", "lastname",  "email", "idnumber", "verified"]);
}

const Employee = model("employee", EmployeeSchema);
export default Employee;