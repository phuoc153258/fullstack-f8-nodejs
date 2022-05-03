function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function delete_cookie(name) {
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
function login() {
    $.ajax({
        url: 'http://localhost:3000/login/handle',
        type: 'POST',
        data: {
            email: $('#email').val(),
            password: $('#password').val()
        }
    })
        .then(data => {
            if(data.message =='Success') {
                setCookie('token', data.token, 1)
                window.location.replace("http://localhost:3000/");
            }
            else {
                console.log("Failed")
            }
        })
        .catch(err => {
            console.log(err)
        })
}