/* service import */
import * as UsersManagerServices from '../../services/admin/users.service.js'

/* controllers */
export const readUsers = (req, res) => {

    const role = req.params.role

    UsersManagerServices.read(role).then((users) => {

        // waiting flash msg
        // waiting render view w/ users data
        res.render('admin/users', { users, role })

    }).catch(err => {

        console.log('Erro Interno: ' + err)
        // waiting flash msg
        res.redirect(`/admin/users#users-content--${role}`)
    })
}

export const blockUser = (req, res) => {

    const id = req.params.id

    UsersManagerServices.block(id).then(() => {

        // waiting flash msg
        res.redirect(`/admin/users#user-content--${id}`)

    }).catch(err => {

        console.log('Erro Interno: ' + err)
        // waiting flash msg
        res.redirect(`/admin/users#user-content--${id}`)
    })
}

export const unblockUser = (req, res) => {

    const id = req.params.id

    UsersManagerServices.unblock(id).then(() => {

        // waiting flash msg
        res.redirect(`/admin/users#user-content--${id}`)

    }).catch(err => {

        console.log('Erro Interno: ' + err)
        // waiting flash msg
        res.redirect(`/admin/users#user-content--${id}`)
    })
}

export const updateRoleUser = (req, res) => {

    const id = req.params.id
    const role = req.body.updateUserRole

    // enum: ['Usuário', 'Estudante', 'Secretária', 'Administrador'],

    if (role == 'Usuário' || role == 'Estudante' || role == 'Secretária' || role == 'Administrador') {

        UsersManagerServices.updateRole(id, role).then(() => {

            // waiting flash msg
            res.redirect(`/admin/users#user-content--${id}`)

        }).catch(err => {

            console.log('Erro interno: ' + err)
            // waiting flash msg
            res.redirect(`/admin/users#user-content--${id}`)
        })

    } else {

        // waiting flash msg 'Role não Prevista'
        res.redirect(`/admin/users#user-content--${id}`)
    }
}

export const deleteUser = (req, res) => {

    const id = req.params.id
    const role = req.params.role

    UsersManagerServices.delet(id).then(() => {

        // waiting flash msg
        res.redirect(`/admin/users/read/${role}`)

    }).catch(err => {

        console.log('Erro Interno: ' + err)
        // waiting flash msg
        res.redirect(`/admin/users/read/${role}`)
    })
}