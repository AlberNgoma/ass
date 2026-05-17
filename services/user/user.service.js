/* model import */
import User from '../../models/user.model.js'

/* services */
export const create = (data) => {

    new User(data).save().then(() => {

        console.log('Usuário Cadastrado: ' + data)

    }).catch(err => console.log(err))
}

export const update = (id, data) => {

    User.findByIdAndUpdate(

        { _id: id },
        { $set: data }

    ).then(() => {

        console.log('Usuário Atualizado')

    }).catch(err => console.log(err))
}

export const updatePhoto = (id, foto) => {

    User.findByIdAndUpdate(

        {_id: id},
        {$set: {foto: foto}}

    ).then(() => {

        console.log('Foto de Usuário Atuilizado')

    }).catch(err => console.log(err))
}