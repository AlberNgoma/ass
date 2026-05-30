/* model import */
import Service from '../../models/service.model.js'

/* services */
export const read = () => {

    return Service.find()
        .lean()
        .sort({ create: 'desc' })
        .catch(err => console.log(err))
}

export const create = (data) => {

    return new Service(data).save().then(() => {

        console.log('Serviço Cadastrado')

    }).catch(err => console.log('Erro Interno: ', err))
}

export const delet = (id) => {

    return Service.findByIdAndDelete({ _id: id }).then(() => {

        console.log('Serviço Deletado')

    }).catch(err => console.log('Erro Interno: ' + err))
}

export const updateStatus = (id, status) => {

    return Service.findByIdAndUpdate(
     
        { _id: id },
        { $set: { status: status } }

    ).then(() => {

        console.log(`Serviço Atualizado para ${status}`)

    }).catch(err => console.log(err))
}