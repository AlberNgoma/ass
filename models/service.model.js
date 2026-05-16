import mongoose from 'mongoose'

const {Schema, model} = mongoose

const ServiceSchema = new Schema({

    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    duraction: {
        type: Number,
        required: true
    }
})

const Service = model('Service', ServiceSchema)

export default Service