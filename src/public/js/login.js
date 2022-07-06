function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    let expires = 'expires=' + d.toUTCString();
    document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
}
function getCookie(cname) {
    let name = cname + '=';
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
    return '';
}
function delete_cookie(name) {
    document.cookie =
        name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
function login() {
    $('#login-message').empty();
    $.ajax({
        url: 'http://localhost:3000/auth/login/handler',
        type: 'POST',
        data: {
            email: $('#email').val(),
            password: $('#password').val(),
        },
    })
        .then((data) => {
            if (data.message === 'Login success !!!') {
                setCookie('token', data.token, 1);
                window.location = 'http://localhost:3000/';
            } else {
                $('#login-message').append(
                    '*Tài khoản hoặc mật khẩu chưa chính xác !!!',
                );
            }
        })
        .catch((err) => {
            $('#login-message').append(
                '*Tài khoản hoặc mật khẩu chưa chính xác !!!',
            );
        });
}
function registerUser() {
    let password = $('#password-register').val()
    let rePassword = $('#rePassword-register').val()
    if(password != '' && rePassword != '' && (password == rePassword)){
        $.ajax({
            url: 'http://localhost:3000/auth/register/handler',
            type: 'POST',
            data: {
                fullName: $('#fullName-register').val(),
                email: $('#email-register').val(),
                password: $('#password-register').val(),
            },
        })
        .then(data => {
            if(data.message === 'Register success !!!'){
                setCookie('token', data.token, 1);
                window.location = 'http://localhost:3000/';
            }
            else {
                swal({
                    title: "Thông tin chưa hợp lệ !!!",
                    icon: "error",
                    button: "Đồng ý",
                });
            }
        })
        .catch(err => {
            swal({
                title: "Thông tin chưa hợp lệ !!!",
                icon: "error",
                button: "Đồng ý",
            });
        })
    }
    else {
        swal({
            title: "Thông tin chưa hợp lệ !!!",
            icon: "error",
            button: "Đồng ý",
        });
    }
}