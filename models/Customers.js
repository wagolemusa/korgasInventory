import { Schema, model } from "mongoose"

const CustomersSchema = new Schema ({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },

    
}, { timestamps: true })

const Customers = model("customers", CustomersSchema)
export default Customers

