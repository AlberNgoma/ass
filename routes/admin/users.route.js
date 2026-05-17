/* modules import */
import {Router} from 'express'

/* router config */
const router = Router()

/* controller import */
import * as UsersManagerControllers from '../../controllers/admin/users.controller.js'

/* user management by admin routes */
router.get('/users/:role', UsersManagerControllers.readUsers)

export default router