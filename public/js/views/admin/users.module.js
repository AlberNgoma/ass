function userDeleteSetIdAndRole(id, role) {

    const form = document.querySelector('form#user-delete--form')
    form.setAttribute('action', `/admin/users/delete/${id}/${role}`)
    console.log(`form ${form.id} set action attr. as /admin/users/delete/${id}/${role}`)
}