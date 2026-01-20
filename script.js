function openMenu(){
    document.getElementById("mobileMenu").classList.add("active");
}
function closeMenu(){
    document.getElementById("mobileMenu").classList.remove("active");
}

const canvas=document.getElementById("cobraRain");
const ctx=canvas.getContext("2d");

function resize(){
    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;
}
resize();

const text="❤️❤️";
const size=28;
let cols, drops;

function init(){
    cols=canvas.width/size;
    drops=[];
    for(let i=0;i<cols;i++) drops[i]=Math.random()*canvas.height;
}
init();

function draw(){
    ctx.fillStyle="rgba(255, 255, 255, 0.08)";
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle="red";
    ctx.font=size+"px monospace";
    for(let i=0;i<drops.length;i++){
        ctx.fillText(text[Math.floor(Math.random()*text.length)],i*size,drops[i]);
        drops[i]+=size;
        if(drops[i]>canvas.height && Math.random()>0.95) drops[i]=0;
    }
}
setInterval(draw,50);
window.addEventListener("resize",()=>{resize();init();});
