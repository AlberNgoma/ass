/* model import */
import Service from '../../models/service.model.js'

export const read = () => {

    return Service
        .find({ status: 'Ativo' })
        .sort({ create: 'desc' })
        .lean()
        .catch(err => console.log(err))
}