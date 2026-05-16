/* model import */
import User from '../models/user.model.js'

/* services */
export const create = (data) => {

    new User(data).save().then(() => {

        console.log('Usuário Cadastrado: ' + data)

    }).catch(err => console.log(err))
}