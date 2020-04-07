function drawBackground(backgroundColour, floorColour) {
    ctx.fillStyle = backgroundColour;
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    drawFloor(floorColour);
}
function drawFloor(floorColour) {

    ctx.fillStyle = floorColour;
    ctx.fillRect(0, canvas.height - 66 * UNIT, canvas.width, 66 * UNIT)

}