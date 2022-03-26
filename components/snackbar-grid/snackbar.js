var btnSnackbar = document.querySelector('.btn-snackbar')
var snackbar = document.querySelector('.snackbar')


btnSnackbar.addEventListener('click', () => {
    console.log('click')
    snackbar.classList.add('show')
    setTimeout(() => {
        snackbar.classList.remove('show')
    }, 3000)
})