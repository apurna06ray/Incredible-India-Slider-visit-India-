let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').appendChild(items[0]);
});
prev.addEventListener('click', function(){
    let items= document.querySelectorAll('.item');

    document.querySelector('.slide').prepend(items[items.length-1]);
});
const bg = document.querySelector(".background-animation");
for(let i =0; i<70; i++){
    let circle = document.createElement("span");
    circle.classList.add("circle");
    circle.style.left = Math.random()*100+"%";
    circle.style.animationDuration=(5+Math.random()*5)+"s";
    circle.style.width = (2 + Math.random()*5) + "px";
circle.style.height = circle.style.width;
    bg.appendChild(circle);
}
