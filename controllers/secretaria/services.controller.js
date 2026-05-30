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
        title: req.body.createServiceTitle,
        price: req.body.createServicePrice,
        duraction: req.body.createServiceDuraction,
        status: req.body.createServiceStatus
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