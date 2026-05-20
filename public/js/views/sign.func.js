/* Visibility Toggle between signin and signup */
function signToggleForm() {
    document.getElementById('signin').classList.toggle('is-hidden');
    document.getElementById('signup').classList.toggle('is-hidden');
}

/* Auto Visibility Toggle between signin and signup */
const url = new URLSearchParams(window.location.search)

const urlAction = url.get('action')

if(urlAction == 'up') signToggleForm()