let userImg = document.querySelector('#user-img');
let userMenu = document.querySelector('#user-menu');

function delete_cookie(name) {
    document.cookie =
        name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
function logOut() {
    delete_cookie('token');
    window.location = 'http://localhost:3000/';
}
function showUserMenu() {
    if (userImg.classList.contains('hide')) {
        userImg.classList.remove('hide');
        userMenu.classList.remove('d-none');
    } else {
        userImg.classList.add('hide');
        userMenu.classList.add('d-none');
    }
}
window.addEventListener(
    'click',
    function (e) {
        userImg.classList.add('hide');
        userMenu.classList.add('d-none');
    },
    true,
);
