//window.alert("We are connected with js")
// var name = window.prompt("Enter Your name")

var convas = document.getElementById("mycanvas")

// console.log(canvas)

var ctx = canvas.getContext("2d")

const grad = ctx.createLinearGradient(100,100, 200,100)
grad.addColorStop(0,"red")
grad.addColorStop(0.7,"blue")

grad.addColorStop(1,"orange")

//ctx.font = "50px Arial"
//ctx.fillStyle = grad
//ctx.fillText("Hello class",100,100)
//ctx.fillStyle("red")


ctx.font = "50px Arial"
ctx.strokeStyle = grad
ctx.storkeText("Hello Class ",100,100)

ctx.fillStyle = grad
ctx.fillRect(0,0,130,130)


ctx.beginPath();
ctx.arc(120,120,40,0,2*Math.PI)
ctx.fillStyle = radial
ctx.fillStyle()
ctx.stroke()