const $parent = document.querySelector('.parent');

let isDown = false;
let startX;
let scrollLeft;

$parent.addEventListener('mousedown', (e) => {
    isDown = true;

    $parent.classList.add('active');

    startX = e.pageX - $parent.offsetLeft;
    scrollLeft = $parent.scrollLeft;

})


$parent.addEventListener('mouseup', (e) => {
    isDown = false;
    $parent.classList.remove('active');

})

$parent.addEventListener('mousemove',(e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - $parent.offsetLeft;
    const walk = (x - startX)*3;
    $parent.scrollLeft =  scrollLeft - walk ;


})

$parent.addEventListener('mouseleave',(e) => {
    isDown= false;
})