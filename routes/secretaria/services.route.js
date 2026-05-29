/* modules import */
import express from 'express'

/* router config */
const router = express.Router()

/* controller import */
import * as servicesMangerController from '../../controllers/secretaria/services.controller.js'

/* secretaria routes */
router.get('/services/read', servicesMangerController.readServices)
router.post('/services/create', servicesMangerController.createService)
router.post('/services/update/status/:id/:status', servicesMangerController.updateStatusService)

export default router