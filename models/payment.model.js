import mongoose from 'mongoose'

const {Schema, model} = mongoose

const PaymentSchema = new Schema({

    stydent: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    employer: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    service: {
        type: Schema.Types.ObjectId,
        ref: 'Service'
    },
    create: {
        type: Date,
        default: Date.now
    }
})

const Payment = model('Payment', PaymentSchema)

export default Payment