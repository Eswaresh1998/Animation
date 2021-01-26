const card = document.querySelector('.cards');
const container = document.querySelector('.container');
//Items
const image = document.querySelector('.image');
const name = document.querySelector('.name');
const about = document.querySelector('.about');
const skills1 = document.querySelector('.skills1');
const skills2 = document.querySelector('.skills2');
const getInTouch = document.querySelector('.getInTouch');

//Moving the animation event 
container.addEventListener('mousemove', (e)=>{
    let xAxis = (window.innerWidth/2 -e.pageX)/15;
    let yAxis = (window.innerHeight/2 -e.pageY)/15;
    card.style.transform =`rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    //popout
    image.style.transform ="translateZ(175px)";
    name.style.transform ="translateZ(150px)";
    about.style.transform ="translateZ(125px)";
    skills1.style.transform ="translateZ(100px)";
    skills2.style.transform ="translateZ(100px)";
    getInTouch.style.transform ="translateZ(75px)";
});
//Animation In
container.addEventListener('mouseenter', (e)=>{
    card.style.transition ='none';
});

//Animation out
container.addEventListener('mouseleave', (e)=>{
    card.style.transform =`rotateY(0deg) rotateX(0deg)`;
    card.style.transition ="all 0.5s ease";
    //pop back
    image.style.transform ="translateZ(0px)";
    name.style.transform ="translateZ(0px)";
    about.style.transform ="translateZ(0px)";
    skills1.style.transform ="translateZ(0px)";
    skills2.style.transform ="translateZ(0px)";
    getInTouch.style.transform ="translateZ(75px)";
});