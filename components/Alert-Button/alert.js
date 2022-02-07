var btnClose= document.querySelector('.btn-close');
var alertBlock=document.querySelector('.dismiss');
var reset = document.querySelector('.reset');


btnClose.addEventListener('click',()=>{
    alertBlock.style.display='none';
    reset.style.display='block'
})

reset.addEventListener('click',()=>{
    alertBlock.style.display='block';

})