import { Schema, model } from "mongoose";
import Blood from "@/resources/blood/blood.interface"

const BloodSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    categories: {
        type: String,
        required: true
    },
},
    {
        timestamps: true
    }
)

export default model<Blood>("Blood", BloodSchema) 
