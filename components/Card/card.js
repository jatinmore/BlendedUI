var btnCard = document.querySelector('.close');
var cardDismiss = document.querySelector('.card-dismiss')
var btnReset = document.querySelector('.card-reset')

btnCard.addEventListener('click', () => {
    cardDismiss.style.display = 'none';
    btnReset.style.display = 'block';
})

btnReset.addEventListener('click', () => {
    cardDismiss.style.display = 'flex';
    btnReset.style.display = 'none';

})