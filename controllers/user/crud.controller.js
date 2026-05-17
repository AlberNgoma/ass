/* service import */
import * as UserServices from '../../services/user/user.service.js'

/* controllers */
export const createUser = (req, res) => {

    const data = {
        name: req.body.signupUserName,
        tel: req.body.signupUserTel
    }

    UserServices.create(data).then(() => {

        // waiting flash msg
        res.redirect('/user/sign/in')
        
    }).catch(err => {
        
        console.log('Erro Interno: ' + err)
        res.redirect('/user/sign/up')
    })
}

export const updateUser = (req, res) => {

    const data = {
        name: req.body.updateUserName,
        tel: req.body.updateUserTel
        // waiting other fields
    }
    
    UserServices.update(req.params.id, data).then(() => {
        
        // waiting flash msg
        res.redirect('/user/profile')

    }).catch(err => {

        console.log('Erro Interno: ' + err)
        res.redirect('/user/profile')
    })
}

export const updatePhotoUser = (req, res) => {

    const foto = req.body.updateUserPhoto

    UserServices.updatePhoto(req.params.id, foto).then(() => {

        // waiting flash msg
        res.redirect('/user/profile')

    }).catch(err => {

        console.log('Erro Interno: ' + err)
        res.redirect('/user/profile')
    })
}