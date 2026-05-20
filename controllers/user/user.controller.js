/* modules import */
import passport from 'passport'
//import bcrypt from 'bcryptjs'

/* controllers */
export const showSign = (req, res) => {

    res.render('user/sign')
}

export const signin = (req, res, next) => {

    passport.authenticate('local', {
        successRedirect: '/user/profile',
        failureRedirect: '/user/sign?action=in',
        failureFlash: true
    })(req, res, next)
}

export const signout = (req, res) => {

    req.logout(err => {

        if(err) {

            console.log('Erro Interno: ' + err)
            res.redirect('/user/profile')

        } else {

            // waiting flash msg
            res.redirect('/user/sign?action=in')
        }
    })
}