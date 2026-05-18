/* modules import */
import {Router} from 'express'

/* router config */
const router = Router()

/* controller import */
import * as UsersManagerControllers from '../../controllers/admin/users.controller.js'

/* user management by admin routes */
router.get('/users/:role', UsersManagerControllers.readUsers)
router.post('/users/block/:id', UsersManagerControllers.blockUser)
// unblock user
// become user as secretaria
// become secretaria as user
// delete user

export default router