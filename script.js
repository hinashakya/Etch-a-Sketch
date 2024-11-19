function getSize(boxsize, boxRowsize){
       return boxsize/boxRowsize;
}

function getRandomColor(){
    let r=Math.floor(Math.random()*256);
    let g=Math.floor(Math.random()*256);
    let b=Math.floor(Math.random()*256);
    return `rgb(${r},${g},${b})`;
}

let container=document.querySelector(".container");
function createGrid(){
let boxsize=960;
let boxRowsize=prompt("Enter the no. of box in one row");
if(boxRowsize>100){
    alert("Enter a no between 0 to 100");
}
for(let i=0;i<boxRowsize*boxRowsize;i++){
    let frag=document.createElement('div');
    let size =getSize(boxsize,boxRowsize);
    frag.style.height=size+'px';
    frag.style.width=size+'px';
    frag.addEventListener('mouseover',()=>{
        let color = getRandomColor();
        frag.style.background=color;
        frag.style.opacity=`0.${i}`;
    })
    container.appendChild(frag);
}}
const button=document.querySelector("button");
button.addEventListener('click',()=>{
    container.innerHTML='';
    createGrid();
})

