/* service import */
import * as UserServices from '../../services/user.service.js'

/* controllers */
export const createUser = (req, res) => {

    const data = {
        name: req.body.signupUserName,
        tel: req.body.signupUserTel
    }

    UserServices.create(data).then(() => {

        res.redirect('/user/sign/in')

    }).catch(err => {

        console.log('Erro Interno: ' + err)
        res.redirect('/user/sign/up')
    })
}