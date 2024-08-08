function getRandomColor(){
    const r = Math.floor(Math.random()*100)+100;
    const g = Math.floor(Math.random()*100)+100;
    const b = Math.floor(Math.random()*100)+225;
    return `rgb(${r},${g},${b})`;
}

function changeBackground(){
    const randomColour = getRandomColor();
    document.body.style.backgroundColor = randomColour;
}
   
setInterval(changeBackground,1000);