/* modules import */
import {Router} from 'express'

/* router config */
const router = Router()

/* controller import */
import * as UsersManagerControllers from '../../controllers/admin/users.controller.js'

/* user management by admin routes */
router.get('/users/:role', UsersManagerControllers.readUsers)
router.post('/users/block/:id', UsersManagerControllers.blockUser)
router.post('/users/unblock/:id', UsersManagerControllers.unblockUser)
router.post('/users/update/role/:id', UsersManagerControllers.updateRoleUser)
router.post('/users/delete/:id', UsersManagerControllers.deleteUser)

export default router