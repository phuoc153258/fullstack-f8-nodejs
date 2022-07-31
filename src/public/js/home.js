function delete_cookie(name) {
    document.cookie =
        name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
function logOut() {
    delete_cookie('token');
    window.location = 'http://localhost:3000/';
}
