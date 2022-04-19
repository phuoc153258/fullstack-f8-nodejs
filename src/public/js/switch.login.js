const signIn = document.querySelector('#signIn')
const signUp = document.querySelector('#signUp')
const loginContents = document.querySelectorAll('.login-content')

signUp.addEventListener('click', function () {
    loginContents[0].classList.add('d-none')
    loginContents[1].classList.remove('d-none')
})

signIn.addEventListener('click', function () {
    loginContents[0].classList.remove('d-none')
    loginContents[1].classList.add('d-none')
})