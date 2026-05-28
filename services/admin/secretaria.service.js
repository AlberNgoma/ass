/* model import */
import User from '../../models/user.model.js'

/* services */
export const create = (data) => {

    return new User(data).save().then(() => {

        console.log('Secretária Cadastrada')

    }).catch(err => console.log(err))
}