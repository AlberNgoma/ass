/* model import */
import User from "../../models/user.model.js";

/* services */
export const read = (role) => {

    return User.find({ role: role })
        .sort({ 'data.create': 'desc' })
        .lean()
        .catch(err => console.log(err))
}

export const block = (id) => {

    User.findByIdAndUpdate(

        { _id: id },
        { $set: { status: 'Bloqueado' } }

    ).then(() => {

        console.log('Usuário Bloqueado')

    }).catch(err => console.log(err))
}

export const unblock = (id) => {

    User.findByIdAndUpdate(

        { _id: id },
        { $set: { status: 'Offline' } }

    ).then(() => {

        console.log('Usuário Desbloqueado')

    }).catch(err => console.log(err))
}

export const updateRole = (id, role) => {

    User.findByIdAndUpdate(

        { _id: id },
        { $set: { role: role } }

    ).then(() => {

        console.log('Role Atulizado')

    }).catch(err => console.log(err))
}

export const delet = (id) => {

    return User.findByIdAndDelete({ _id: id }).then(() => {

        console.log('Usuário Deletado')

    }).catch(err => console.log(err))
}