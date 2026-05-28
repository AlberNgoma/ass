/* model import */
import Service from '../../models/service.model.js'

/* services */
export const read = () => {

    return Service.find()
        .lean()
        .sort({ create: 'desc' })
        .catch(err => console.log(err))
}