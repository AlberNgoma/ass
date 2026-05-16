import mongoose from 'mongoose'

const {Schema, model} = mongoose

const UserSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    tel: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['Usuário', 'Estudante', 'Secretária', 'Administrador'],
        default: 'Usuário'
    },
    date: {
        create: {
            type: Date,
            default: Date.now
        },
        brithday: {
            type: Date
        }
    }

})

const User = model('User', UserSchema)

export default User