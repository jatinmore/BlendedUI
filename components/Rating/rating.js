var btnRating = document.querySelectorAll('.rate')
var rate = document.querySelector('.fa-star')

for (let i = 0; i < btnRating.length; i++) {
    btnRating[i].addEventListener('click', () => {
        // btnRating[i].style.color = 'yellow'

        if (btnRating[i].style.color == 'yellow') {
            btnRating[i].style.color = 'black'

        } else {
            btnRating[i].style.color = 'yellow'

        }
    })
}