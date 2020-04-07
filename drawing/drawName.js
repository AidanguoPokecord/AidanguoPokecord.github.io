function drawName(x, y) {
    ctx.save();
    
    ctx.translate(x*UNIT, y*UNIT);
    ctx.scale(3, 4);
    ctx.fillStyle = "black";
    drawA();
    drawI();
    drawD();
    drawLA();
    drawN();
    drawlastG();
    drawO();
    drawU();
    ctx.restore();
}
function drawA() {
    ctx.fillRect(0, 1*UNIT, 1 * UNIT, 4 * UNIT);
    ctx.fillRect(1*UNIT, 0*UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(1*UNIT, 2*UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(2*UNIT, 1*UNIT, 1 * UNIT, 4 * UNIT);
   

}
function drawI(){
    ctx.fillRect(4*UNIT, 3*UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(4*UNIT, 1*UNIT, 1 * UNIT, 1 * UNIT);
}
function drawD(){
    
    ctx.fillRect(6*UNIT, 2*UNIT, 1 * UNIT, 3 * UNIT);
    ctx.fillRect(7*UNIT, 2*UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(7*UNIT, 4*UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(8*UNIT, 0*UNIT, 1 * UNIT, 5 * UNIT);
    
}
function drawLA(){
    ctx.fillRect(10*UNIT, 2*UNIT, 1 * UNIT, 3 * UNIT);
    ctx.fillRect(11*UNIT, 1*UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(11*UNIT, 3*UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(12*UNIT, 2*UNIT, 1 * UNIT, 3 * UNIT);
}
function drawN(){
    ctx.fillRect(14*UNIT, 2*UNIT, 1 * UNIT, 3 * UNIT);
    ctx.fillRect(16*UNIT, 2*UNIT, 1 * UNIT, 3 * UNIT);
    ctx.fillRect(15*UNIT, 2*UNIT, 1 * UNIT, 1 * UNIT);
}
function drawlastG(){
    ctx.fillRect(0*UNIT,6*UNIT,3*UNIT,UNIT);
    ctx.fillRect(0*UNIT,7*UNIT,UNIT,2*UNIT);
    ctx.fillRect(UNIT,8*UNIT,UNIT,UNIT);
    ctx.fillRect(2*UNIT,7*UNIT,UNIT,4*UNIT);

    ctx.fillRect(0,10*UNIT,2*UNIT,UNIT);

    //ctx.fillRect(6*UNIT, 0*UNIT, 1 * UNIT, 5 * UNIT);
}
function drawU(){
    ctx.fillRect(4*UNIT,6*UNIT,UNIT,3*UNIT);
    ctx.fillRect(6*UNIT,6*UNIT,UNIT,3*UNIT);
    ctx.fillRect(5*UNIT,8*UNIT,UNIT,UNIT);
    
}
function drawO(){
    ctx.fillRect(8*UNIT,6*UNIT,3*UNIT,UNIT);
    ctx.fillRect(8*UNIT,6*UNIT,UNIT,3*UNIT);
    ctx.fillRect(8*UNIT,8*UNIT,3*UNIT,UNIT);
    ctx.fillRect(10*UNIT,7*UNIT,UNIT,UNIT);

    ctx.fillRect(12*UNIT,8*UNIT,UNIT,UNIT);
    

}
