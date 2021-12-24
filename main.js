canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");
var mouseevent="empty";
var last_mouse_x="";
var last_mouse_y="";
color="blue";
width="5";
canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e){
mouseevent="mouseDown";
}
canvas.addEventListener("mouseup",mymouseup);
function mymouseup(e){
mouseevent="mouseUP";
}
canvas.addEventListener("mouseleave",mymouseleave);
function mymouseleave(e){
mouseevent="mouseLeave";
}
canvas.addEventListener("mousemove",mymousemove);
function mymousemove(e){
current_mouse_x = e.clientX - canvas.offsetLeft;
current_mouse_y = e.clientY - canvas.offsetTop;
if (mouseevent="mouseDown"){
ctx.beginPath()
ctx.strokeStyle = color;
ctx.lineWidth = width;
console.log("x = " + last_mouse_x + "y = " + last_mouse_y);
ctx.moveTo(last_mouse_x, last_mouse_y);
ctx.lineTo(current_mouse_x,current_mouse_y);
ctx.stroke();
}
last_mouse_x = current_mouse_x; 
last_mouse_y = current_mouse_y;
}