import mongoose from 'mongoose'

const {Schema, model} = mongoose

const MarkSchema = new Schema({

    student: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    service: {
        type: Schema.Types.ObjectId,
        ref: 'Service'
    },
    day: {
        type: Number,
        required: true
    },
    month: {
        type: Number,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    create: {
        type: Date,
        default: Date.now
    }
})

const Mark = model('Mark', MarkSchema)

export default Mark