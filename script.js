// movement animation  to happen

const card = document.querySelector('.card');
const container = document.querySelector('.container');

// Items 
const title = document.querySelector('.title');
const sneaker = document.querySelector('.sneaker img');
const purchase = document.querySelector('.purchase button');
const description = document.querySelector('.info h3');
const sizes = document.querySelector('.sizes');

// moving animation event

container.addEventListener('mousemove', (e) =>{
    let xAxis = (window.innerWidth / 2 - e.pageX) /20 ;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 20 ;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// animate in

container.addEventListener('mouseenter', (e) => {
    card.style.transition = 'none' ;
    //popout
    title.style.transform = "translateZ(100px)";
    sneaker.style.transform = "translateZ(150px) rotateZ(20deg)";
    purchase.style.transform = "translateZ(90px)";
    description.style.transform = "translateZ(90px)";
    sizes.style.transform = "translateZ(95px)";

});

// animate out

container.addEventListener('mouseleave', (e) => {
    card.style.transition = 'all 0.5s ease';
    card.style.transform = `rotate(0deg) rotate(0deg)`;
    //popback
    title.style.transform = "translateZ(0px)";
    sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
    purchase.style.transform = "translateZ(0px)";
    description.style.transform = "translateZ(0px)";
    sizes.style.transform = "translateZ(0px)";


});

// Best wishes .. Ali AL-Roainy ^_^ 