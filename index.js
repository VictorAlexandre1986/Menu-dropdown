const card = document.querySelector('.card');
const cardtoggle = document.querySelector('.toggle');
cardtoggle.onclick=function(){
    card.classList.toggle('active');
}