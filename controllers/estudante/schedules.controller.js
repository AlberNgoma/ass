/* services import */
import * as ScheduleServices from '../../services/estudante/schedules.service.js'

/* controllers */
export const readSchedules = (req, res) => {

    ScheduleServices.read().then((schedules) => {

        // waiting flash msg
        res.render('/schedules', { schedules })

    }).catch(err => {

        console.log('Erro Interno: ' + err)
        // waiting flash msg
        res.redirect('/user/profile')
    })
}