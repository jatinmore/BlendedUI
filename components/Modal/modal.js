var btnModal = document.querySelector('.btn-modal');
var btnClose = document.querySelector('.btn-close');
var popup = document.querySelector('.popup')

btnModal.addEventListener('click', () => {
    console.log('click')
    popup.style.display = 'flex';
})

btnClose.addEventListener('click', () => {
    console.log('click')
    popup.style.display = 'none';

})