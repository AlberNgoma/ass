function userDeleteSetId(id) {

    const form = document.querySelector('form#user-delete--form')
    form.setAttribute('action', `/admin/users/read/delete/${id}`)
}