/* modules import */
import { Router } from 'express'

/* router config */
const router = Router()

/* controller import */
import * as crudControllers from '../../controllers/user/crud.controller.js'

/* user routes */
router.post('/sign/up', crudControllers.createUser)
router.post('/update/:id', crudControllers.updateUser)
router.post('/update/photo/:id', crudControllers.updatePhotoUser)

export default router