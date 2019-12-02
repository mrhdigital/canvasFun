//alert("Linked ");

const canvas = document.querySelector("#draw");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = "BASA55";
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 60;
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
function draw(e) {
    // stop the function running when mouse down in not used
    if(!isDrawing) return;
    console.log(e);
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.lineWidth = hue;
    ctx.beginPath();
        // start from point 
    ctx.moveTo(lastX, lastY);
    // go to point
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    // lastX = e.offsetX;
    // lastY = e.offsetY;
    // above code can be written as follow:
    [lastX, lastY] = [e.offsetX, e.offsetY];
    hue++;
    if(hue >= 360) {
        hue = 0;
    }

}
canvas.addEventListener("mousedown",(e) => { 
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});


canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup",() => isDrawing = false);
canvas.addEventListener("mouseout",() => isDrawing = false);
