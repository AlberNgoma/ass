/* service import */
import * as UsersManagerServices from '../../services/admin/users.service.js'

/* controllers */
export const readUsers = (req, res) => {

    const role = req.params.role

    UsersManagerServices.read(role).then((users) => {

        // waiting flash msg
        // waiting render view w/ users data
        
    }).catch(err => {
        
        console.log('Erro Interno: ' + err)
        // waiting flash msg
        res.redirect(`/admin/users#${role}`)
    })
}

export const blockUser = (req, res) => {

    const id = req.params.id

    UsersManagerServices.block(id).then(() => {

        // waiting flash msg
        res.redirect(`/admin/users#${id}`)

    }).catch(err => {
        
        console.log('Erro Interno: ' + err)
        // waiting flash msg
        res.redirect(`/admin/users#${id}`)
    })
}

export const unblockUser = (req, res) => {

    const id = req.params.id

    UsersManagerServices.unblock(id).then(() => {

        // waiting flash msg
        res.redirect(`/admin/users#${id}`)

    }).catch(err => {

        console.log('Erro Interno: ' + err)
        // waiting flash msg
        res.redirect(`/admin/users#${id}`)
    })
}