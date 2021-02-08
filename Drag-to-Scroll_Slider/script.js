const slider=document.querySelector('.parent');

//Variable
let touch=false;
let startX;
let scrollLeft;

//Event
slider.addEventListener('mousedown',(e) =>{
    touch=true;
    slider.classList.add("active");
    startX=e.pageX-slider.offsetLeft;
    scrollLeft=slider.scrollLeft
 
});

slider.addEventListener('mouseleave',() =>{
    touch=false;
    slider.classList.remove("active");
});

slider.addEventListener('mouseup',() =>{
    touch=false;
    slider.classList.remove("active");
});

slider.addEventListener('mousemove',(e) =>{
    if(!touch) return;
    e.preventDefault();
    const x=e.pageX-slider.offsetLeft
     walk=x-startX
     slider.scrollLeft=scrollLeft-walk
    console.log(x,startX)
});


