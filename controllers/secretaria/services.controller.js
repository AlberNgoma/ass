/* service import */
import * as servicesService from '../../services/secretaria/services.service.js'

/* controller */
export const readServices = (req, res) => {

    servicesService.read().then((services) => {

        // waiting flash msg
        res.render('secretaria/services', { services })

    }).catch(err => {

        console.log('Erro Interno: ' + err)
        // waiting flash msg
        res.redirect('/user/profile')
    })
}

export const createService = (req, res) => {

    const data = {
        title: req.body.serviceCreateTitle,
        price: req.body.serviceCreatePrice,
        duraction: req.body.serviceCreateDuraction
    }

    servicesService.create(data).then(() => {

        // waiting flash msg
        res.redirect('/secretaria/services/read')

    }).catch(err => {

        console.log('Erro Interno: ' + err)
        // waiting flash msg
        res.redirect('/secretaria/services/read')
    })
}

export const deleteService = (req, res) => {

    servicesService.delet(req.params.id).then(() => {

        // waiting flash msg
        res.redirect('/secretaria/services/read')

    }).catch(err => {

        console.log('Erro Interno: ' + err)
        // waiting flash msg
        res.redirect('/secretaria/services/read')
    })
}

export const updateStatusService = (req, res) => {

    const { id, status } = req.params

    servicesService.updateStatus(id, status).then(() => {

        // waiting flash msg
        res.redirect('/secretaria/services/read')

    }).catch(err => {

        console.log('Erro Interno: ' + err)
        // waiting flash msg
        res.redirect('/secretaria/services/read')
    })
}