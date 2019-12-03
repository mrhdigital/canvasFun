//alert("Linked ");

const canvas = document.querySelector("#draw");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = "BASA55";
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 70;
//ctx.globalCompositeOperation = 'difference';
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;
function draw(e) {
    // stop the function running when mouse down in not used
    if(!isDrawing) return;
    console.log(e);
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
   // ctx.lineWidth = hue;
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
    if (ctx.lineWidth >= 70 || ctx.lineWidth <= 1) {
        direction = !direction;
    }
     if (direction) {
         ctx.lineWidth++;
     } else{
     ctx.lineWidth--;
     }

}
canvas.addEventListener("mousedown",(e) => { 
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});


canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup",() => isDrawing = false);
canvas.addEventListener("mouseout",() => isDrawing = false);


const canvas1 = document.querySelector("#draw1");
const ctx1 = canvas1.getContext("2d");
canvas1.width = window.innerWidth;
canvas1.height = window.innerHeight;
ctx1.strokeStyle = "BASA55";
ctx1.lineJoin = "round";
ctx1.lineCap = "round";
ctx1.lineWidth = 70;
//ctx.globalCompositeOperation = 'difference';
let isDrawing1 = false;
let lastX1 = 0;
let lastY1 = 0;
let hue1 = 0;
let direction1 = true;
function draw(e) {
    // stop the function running when mouse down in not used
    if(!isDrawing1) return;
    console.log(e);
    ctx1.strokeStyle = `hsl(${hue1}, 100%, 50%)`;
   // ctx.lineWidth = hue;
    ctx1.beginPath();
        // start from point 
    ctx1.moveTo(lastX1, lastY1);
    // go to point
    ctx1.lineTo(e.offsetX, e.offsetY);
    ctx1.stroke();
    // lastX = e.offsetX;
    // lastY = e.offsetY;
    // above code can be written as follow:
    [lastX1, lastY1] = [e.offsetX, e.offsetY];
    hue1++;
    if(hue1 >= 360) {
        hue1 = 0;
    }
    if (ctx1.lineWidth >= 70 || ctx1.lineWidth <= 1) {
        direction1 = !direction1;
    }
     if (direction1) {
         ctx1.lineWidth++;
     } else{
     ctx1.lineWidth--;
     }

}
canvas.addEventListener("mousedown",(e) => { 
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});


canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup",() => isDrawing = false);
canvas.addEventListener("mouseout",() => isDrawing = false);


