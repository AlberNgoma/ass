/* service import */
import * as servicesService from '../../services/secretaria/services.service.js'

/* controller */
export const readServices = (req, res) => {

    servicesService.read().then(() => {

        // waiting flash msg
        res.render('secretaria/services')

    }).catch(err => {

        console.log('Erro Interno: ' + err)
        // waiting flash msg
        res.redirect('/user/profile')
    })
}