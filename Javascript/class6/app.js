
container=document.getElementById("container")
function changeColor(){
    bgColor=prompt("enter background color")
container.style.backgroundColor=bgColor
}
function changeTextColor(){
    textColor=prompt("enter text color")
    container.style.color=textColor
    }
container=document.getElementById("container")

image=document.getElementById("image")
image.style.display="none"
function imageShow(){
    image.style.display="block"
}