import mongoose from 'mongoose'

const {Schema, model} = mongoose

const NotificactionSchema = new Schema({

    body: {
        type: String,
        required: true
    },
    sender: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    reciver: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    mark: {
        type: Schema.Types.ObjectId,
        ref: 'Mark'
    },
    payment: {
        type: Schema.Types.ObjectId,
        ref: 'Payment'
    },
    create: {
        type: Date,
        default: Date.now
    }
})

const Notificaction = model('Notificaction', NotificactionSchema)

export default Notificaction