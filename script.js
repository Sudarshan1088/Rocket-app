let myDiv = document.getElementById("my-Div");

document.addEventListener("mousemove",(e) => {
    move(e);
});


const move=(e) =>{
    let x = e.pageX;
    let y = e.pageY;

    myDiv.style.left = x-100 +"px";
    myDiv.style.top = y-100 +"px";
}