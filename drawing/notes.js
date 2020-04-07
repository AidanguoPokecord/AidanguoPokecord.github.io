//conditionals
//asking a true or false question and executing code
//depending on the answer
if (question) {
    //     //when the answer is true execute the code here
} else if (question) {
    //asking another question if first was false
    //unlimited number
}
else {


    //     //when the answer is false execute code here

}
//transformation
function notes(x, y){
    drawRectangle(x, y);
}
function drawRectangle(x,y){

    //save(); starting the transformation
    ctx.save();
    ctx.fillStyle = "black";
    //scale (x, y); Scales the object to be smaller or bigger
    ctx.scale(2, 9);
    // translate (x, y) translate the origin of the canvas to given x/y values
    ctx.translate(x*UNIT, y*UNIT)
    ctx.fillRect(0,0,100,100);
    //restor(); restores the origin back to (0,0)
    ctx.restore();
}
