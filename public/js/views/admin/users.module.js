function userDeleteSetId(id) {

    const form = document.querySelector('form#user-delete--form')
    form.setAttribute('action', `/admin/users/delete/${id}`)
}