/* model import */
import User from "../../models/user.model.js";

/* services */
export const read = (role) => {

    User.find({ role: role })
        .sort({ 'data.create': 'desc' })
        .lean()
        .then((users) => {

            return users

        }).catch(err => console.log(err))
}