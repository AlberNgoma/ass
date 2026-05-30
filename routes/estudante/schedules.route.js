/* modules import */
import {Rourer} from 'express'

/* router config */
const router = Rourer()

/* controllers import */
import * as ScheduleControllers from '../../controllers/estudante/schedules.controller.js'

/* schedule routes */
router.get('/schedules/read', ScheduleControllers.readSchedules)

export default router