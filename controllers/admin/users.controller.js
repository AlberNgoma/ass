/* service import */
import * as UsersManagerServices from '../../services/admin/users.service.js'

/* controllers */
export const readUsers = (req, res) => {

    const role = req.params.role

    UsersManagerServices.read(role).then((users) => {

        console.log(users)
        // waiting flash msg
        // waiting render view w/ users data
        
    }).catch(err => {
        
        console.log('Erro Interno: ' + err)
        // waiting flash msg
        res.redirect(`/admin/users#${role}`)
    })
}