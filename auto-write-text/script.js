const text="My name is Hajimurad ";
let index=0;
function writeText(){
    const write_auto=document.body.innerText=text.slice(0,index);

    index++;
    if(index>text.length){
        index=0;
    }
}
setInterval(writeText,100)