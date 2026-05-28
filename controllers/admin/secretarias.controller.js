/* modules import */
import bcrypt from 'bcryptjs'

/* service import */
import * as SecretariaManagerServices from '../../services/admin/secretaria.service.js'

/* controllers */
export const createSecretaria = (req, res) => {

    const data = {
        name: req.body.createSecretariaName,
        tel: req.body.createSecretariaTel,
        bi: req.body.createSecretariaBI,
        role: 'Secretária',
    }
    
    bcrypt.hash('secretaria2026', 10).then(hash => {

        data.pwd = hash

        SecretariaManagerServices.create(data).then(() => {

            // waiting msg
            res.redirect('/admin/users/read/Secretária')

        }).catch(err => {

            console.log('Erro Interno: ' + err)
            // waiting msg
            res.redirect('/admin/users/read/Secretária')
        })
    })
}