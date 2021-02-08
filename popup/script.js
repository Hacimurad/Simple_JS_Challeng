const open=document.querySelector("#open");
const close=document.querySelector("#close");
const main=document.querySelector(".popup-container");

//Event
open.addEventListener("click",()=>{
    main.classList.add("active");
});

close.addEventListener("click",()=>{
    main.classList.remove("active");
})