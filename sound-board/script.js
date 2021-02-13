const sounds =[
    "applause",
    "boo",
    "gasp",
    "tada",
    "victory",
    "wrong"
];

sounds.forEach((sound)=>{
    const btn =document.createElement("button");
    btn.classList.add("btn");
    btn.innerText=sound;
    btn.addEventListener("click",()=>{
        stopSongs();
        document.getElementById(sound).play();
     

    });

    document.body.appendChild(btn)
});

function stopSongs(){
    sounds.forEach((sound)=>{
        stops=document.getElementById(sound);
        stops.pause();
        stops.currentTime=0;
    })
}
