let btn = document.getElementById("button");
let body = document.getElementById("background")
let simp = document.getElementById("simp");
let hex = document.getElementById("hex");
/*let backgroundText = document.getElementById("backgroundtext")
let createTextNode = document.createTextNode("new Text")*/


let colors = ['salmon', 'green', 'blue', 'purple', 'red'];
let firstColor = 0;
let secondColor = 1;



btn.addEventListener("click", function () {
    body.style.background = colors[firstColor];
    firstColor = firstColor + 1
    if(firstColor > colors.length)
    {
        body.style.background = colors[secondColor]
        firstColor = firstColor + 1;
    
    }
    //firstColor >= colors.length - 1 ? 0 : firstColor + 1;

})

simp.addEventListener("click", function(){
    console.log("value");
})

hex.addEventListener("click", function(){
    console.log('hex click');
})