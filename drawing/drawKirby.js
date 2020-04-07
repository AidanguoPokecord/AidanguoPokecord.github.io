function drawKirby(type, frame, x, y) {
    ctx.save();
    ctx.translate(x * UNIT, y * UNIT);
    if (type == "default") {
        if (frame == 1) {
            drawLightPink();
            drawDarkPink();
            drawBorder();
        }
        else {

        }
    } else if (type == "walk") {
        //walk


        if (frame == 1) {
            fillLightPink();
            fillDarkPink();
            drawKirbyWalk1();
        }
        else if (frame == 2) {
            fillLightPink2();
            fillDarkPink2();
            drawKirbyWalk2();
        }
        else if (frame == 3) {
            fillLightPink3();
            fillDarkPink3();
            drawKirbyWalk3();
        }
        else if (frame == 4){
            fillLightPink2();
            fillDarkPink2();
            drawKirbyWalk2();
        }
    }
    else if (type == "jump") {

        if (frame == 1) {
            fillJumpPink();
            fillJumpDark();   
            drawKirbyJumpUp();
                       
        } else if (frame == 2) {

        }
    }


    ctx.restore();

}




function drawKirbyJumpUp() {
    ctx.fillStyle = "black";
    ctx.fillRect(2 * UNIT, 0 * UNIT, 3 * UNIT, UNIT);
    ctx.fillRect(6 * UNIT, 0 * UNIT, 6 * UNIT, UNIT);
    ctx.fillRect(13*UNIT,0*UNIT,2*UNIT,UNIT)
    ctx.fillRect(UNIT,UNIT,UNIT,UNIT)
    ctx.fillRect(5*UNIT,UNIT,UNIT,UNIT)
    ctx.fillRect(12*UNIT,UNIT,UNIT,UNIT)
    ctx.fillRect(15*UNIT,UNIT,UNIT,5*UNIT)
    ctx.fillRect(0,2*UNIT,UNIT,3*UNIT)
    ctx.fillRect(13*UNIT,2*UNIT,UNIT,UNIT)
    ctx.fillRect(UNIT,5*UNIT,UNIT,4*UNIT)
    ctx.fillRect(2*UNIT,6*UNIT,UNIT,UNIT)
    ctx.fillRect(14*UNIT,6*UNIT,UNIT,4*UNIT)
    ctx.fillRect(2*UNIT,9*UNIT,UNIT,2*UNIT)
    ctx.fillRect(UNIT,11*UNIT,UNIT,4*UNIT)
    ctx.fillRect(3*UNIT,11*UNIT,UNIT,UNIT)
    ctx.fillRect(4*UNIT,12*UNIT,2*UNIT,UNIT)
    ctx.fillRect(2*UNIT,15*UNIT,2*UNIT,UNIT)
    ctx.fillRect(4*UNIT,14*UNIT,UNIT,UNIT)
    ctx.fillRect(5*UNIT,13*UNIT,7*UNIT,UNIT)
    ctx.fillRect(6*UNIT,14*UNIT,UNIT,UNIT)
    ctx.fillRect(7*UNIT,15*UNIT,2*UNIT,UNIT)
    ctx.fillRect(9*UNIT,14*UNIT,UNIT,UNIT)
    ctx.fillRect(12*UNIT,12*UNIT,UNIT,UNIT)
    ctx.fillRect(13*UNIT,10*UNIT,UNIT,2*UNIT)
    ctx.fillRect(9*UNIT,4*UNIT,UNIT,3*UNIT)
    ctx.fillRect(11*UNIT,4*UNIT,UNIT,3*UNIT)
    ctx.fillRect(10*UNIT,9*UNIT,UNIT,UNIT)
}
function fillJumpPink() {
    ctx.fillStyle = "#F3C4E2";
    ctx.fillRect(UNIT,UNIT,14*UNIT,8*UNIT)
    ctx.fillRect(3*UNIT,9*UNIT,10*UNIT,4*UNIT)

}

function fillJumpDark() {
    ctx.fillStyle = "#EB76C8"
    ctx.fillRect(2*UNIT,UNIT,UNIT,UNIT)
    ctx.fillRect(4*UNIT,UNIT,3*UNIT,UNIT)
    ctx.fillRect(11*UNIT,UNIT,4*UNIT,UNIT)
    ctx.fillRect(UNIT,2*UNIT,UNIT,UNIT)
    ctx.fillRect(5*UNIT,2*UNIT,UNIT,UNIT)
    ctx.fillRect(12*UNIT,2*UNIT,UNIT,UNIT)
    ctx.fillRect(13*UNIT,3*UNIT,UNIT,UNIT)
    ctx.fillRect(UNIT,4*UNIT,UNIT,UNIT)
    ctx.fillRect(14*UNIT,5*UNIT,UNIT,UNIT)
    ctx.fillRect(2*UNIT,5*UNIT,UNIT,4*UNIT)
    ctx.fillRect(3*UNIT,6*UNIT,UNIT,UNIT)
    ctx.fillRect(6*UNIT,7*UNIT,2*UNIT,UNIT)
    ctx.fillRect(13*UNIT,7*UNIT,UNIT,UNIT)
    ctx.fillRect(13*UNIT,9*UNIT,UNIT,UNIT)
    ctx.fillRect(3*UNIT,10*UNIT,UNIT,UNIT)
    ctx.fillRect(2*UNIT,11*UNIT,3*UNIT,4*UNIT)
    ctx.fillRect(6*UNIT,12*UNIT,UNIT,UNIT)
    ctx.fillRect(7*UNIT,14*UNIT,2*UNIT,UNIT)
    ctx.fillRect(10*UNIT,12*UNIT,2*UNIT,UNIT)
    ctx.fillRect(12*UNIT,11*UNIT,UNIT,UNIT)
}





//walk 3
function drawKirbyWalk3() {
    ctx.fillStyle = "black";
    ctx.fillRect(5 * UNIT, 0, 5 * UNIT, UNIT)
    ctx.fillRect(3 * UNIT, UNIT, 2 * UNIT, UNIT)
    ctx.fillRect(10 * UNIT, UNIT, 2 * UNIT, UNIT)
    ctx.fillRect(2 * UNIT, 2 * UNIT, UNIT, 2 * UNIT)
    ctx.fillRect(UNIT, 4 * UNIT, UNIT, 6 * UNIT)
    ctx.fillRect(12 * UNIT, 2 * UNIT, UNIT, 2 * UNIT)
    ctx.fillRect(0, 9 * UNIT, UNIT, 4 * UNIT)
    ctx.fillRect(2 * UNIT, 9 * UNIT, UNIT, 2 * UNIT)
    ctx.fillRect(2 * UNIT, 10 * UNIT, 4 * UNIT, UNIT)
    ctx.fillRect(3 * UNIT, 11 * UNIT, UNIT, UNIT)
    ctx.fillRect(4 * UNIT, 12 * UNIT, UNIT, UNIT)
    ctx.fillRect(6 * UNIT, 9 * UNIT, UNIT, UNIT)
    ctx.fillRect(7 * UNIT, 7 * UNIT, UNIT, 2 * UNIT)
    ctx.fillRect(6 * UNIT, 6 * UNIT, UNIT, UNIT)
    ctx.fillRect(4 * UNIT, 13 * UNIT, 7 * UNIT, UNIT)
    ctx.fillRect(UNIT, 13 * UNIT, UNIT, UNIT)
    ctx.fillRect(2 * UNIT, 14 * UNIT, 2 * UNIT, UNIT)
    ctx.fillRect(9 * UNIT, 14 * UNIT, UNIT, UNIT)
    ctx.fillRect(11 * UNIT, 12 * UNIT, 2 * UNIT, UNIT)
    ctx.fillRect(12 * UNIT, 11 * UNIT, UNIT, UNIT)
    ctx.fillRect(13 * UNIT, 4 * UNIT, UNIT, 8 * UNIT)
    ctx.fillRect(10 * UNIT, 15 * UNIT, 5 * UNIT, UNIT)
    ctx.fillRect(15 * UNIT, 13 * UNIT, UNIT, 2 * UNIT)
    ctx.fillRect(14 * UNIT, 12 * UNIT, UNIT, UNIT)

    ctx.fillRect(11 * UNIT, 4 * UNIT, UNIT, 3 * UNIT)
    ctx.fillRect(11 * UNIT, 9 * UNIT, UNIT, UNIT)
}
function fillLightPink3() {
    ctx.fillStyle = "#F3C4E2";
    ctx.fillRect(2 * UNIT, 2 * UNIT, 11 * UNIT, 12 * UNIT)
    ctx.fillRect(3 * UNIT, UNIT, 7 * UNIT, UNIT)

}
function fillDarkPink3() {
    ctx.fillStyle = "#EB76CB";
    ctx.fillRect(5 * UNIT, UNIT, UNIT, UNIT)
    ctx.fillRect(9 * UNIT, UNIT, UNIT, UNIT)
    ctx.fillRect(3 * UNIT, 2 * UNIT, UNIT, UNIT)
    ctx.fillRect(11 * UNIT, 2 * UNIT, UNIT, UNIT)
    ctx.fillRect(2 * UNIT, 4 * UNIT, UNIT, UNIT)
    ctx.fillRect(5 * UNIT, 6 * UNIT, UNIT, UNIT)
    ctx.fillRect(9 * UNIT, 7 * UNIT, 2 * UNIT, UNIT)
    ctx.fillRect(2 * UNIT, 8 * UNIT, UNIT, UNIT)
    ctx.fillRect(UNIT, 9 * UNIT, 3 * UNIT, 5 * UNIT)
    ctx.fillRect(4 * UNIT, 11 * UNIT, UNIT, UNIT)
    ctx.fillRect(5 * UNIT, 12 * UNIT, UNIT, UNIT)
    ctx.fillRect(12 * UNIT, 10 * UNIT, UNIT, UNIT)

    ctx.fillRect(11 * UNIT, 11 * UNIT, UNIT, UNIT)
    ctx.fillRect(10 * UNIT, 12 * UNIT, 5 * UNIT, 3 * UNIT)

}





//walk 2

function fillDarkPink2() {
    ctx.fillStyle = "#EB76C8"
    ctx.fillRect(5 * UNIT, 2 * UNIT, UNIT, UNIT)
    ctx.fillRect(10 * UNIT, 2 * UNIT, UNIT, UNIT)
    ctx.fillRect(3 * UNIT, 3 * UNIT, UNIT, UNIT)
    ctx.fillRect(2 * UNIT, 4 * UNIT, UNIT, UNIT)
    ctx.fillRect(4 * UNIT, 8 * UNIT, UNIT, UNIT)
    ctx.fillRect(6 * UNIT, 8 * UNIT, 2 * UNIT, UNIT)
    ctx.fillRect(12 * UNIT, 8 * UNIT, UNIT, UNIT)
    ctx.fillRect(UNIT, 9 * UNIT, UNIT, UNIT)
    ctx.fillRect(2 * UNIT, 10 * UNIT, UNIT, UNIT)
    ctx.fillRect(4 * UNIT, 13 * UNIT, 8 * UNIT, 2 * UNIT)
    ctx.fillRect(4 * UNIT, 11 * UNIT, UNIT, UNIT)
    ctx.fillRect(5 * UNIT, 12 * UNIT, UNIT, UNIT)
    ctx.fillRect(11 * UNIT, 12 * UNIT, UNIT, UNIT)
    ctx.fillRect(12 * UNIT, 11 * UNIT, UNIT, UNIT)

}
function fillLightPink2() {
    ctx.fillStyle = "#F3C4E2";
    ctx.fillRect(2 * UNIT, 3 * UNIT, 11 * UNIT, 9 * UNIT)

    ctx.fillRect(UNIT, 6 * UNIT, UNIT, 4 * UNIT)
    ctx.fillRect(5 * UNIT, UNIT, 5 * UNIT, 2 * UNIT)
    ctx.fillRect(5 * UNIT, 11 * UNIT, 7 * UNIT, 2 * UNIT)


}
function drawKirbyWalk2() {
    ctx.fillStyle = "black";
    ctx.fillRect(5 * UNIT, UNIT, 6 * UNIT, UNIT)
    ctx.fillRect(3 * UNIT, 2 * UNIT, 2 * UNIT, UNIT)
    ctx.fillRect(11 * UNIT, 2 * UNIT, UNIT, UNIT)
    ctx.fillRect(2 * UNIT, 3 * UNIT, UNIT, UNIT)
    ctx.fillRect(12 * UNIT, 3 * UNIT, UNIT, 2 * UNIT)
    ctx.fillRect(13 * UNIT, 5 * UNIT, UNIT, 7 * UNIT)
    ctx.fillRect(UNIT, 4 * UNIT, UNIT, 2 * UNIT)
    ctx.fillRect(0 * UNIT, 6 * UNIT, UNIT, 4 * UNIT)
    ctx.fillRect(14 * UNIT, 6 * UNIT, UNIT, 5 * UNIT)
    ctx.fillRect(UNIT, 10 * UNIT, UNIT, UNIT)
    ctx.fillRect(2 * UNIT, 11 * UNIT, 2 * UNIT, UNIT)
    ctx.fillRect(4 * UNIT, 9 * UNIT, UNIT, 2 * UNIT)
    ctx.fillRect(3 * UNIT, 12 * UNIT, UNIT, 2 * UNIT)
    ctx.fillRect(4 * UNIT, 12 * UNIT, UNIT, UNIT)
    ctx.fillRect(4 * UNIT, 14 * UNIT, UNIT, UNIT)
    ctx.fillRect(5 * UNIT, 15 * UNIT, 6 * UNIT, UNIT)
    ctx.fillRect(5 * UNIT, 13 * UNIT, 7 * UNIT, UNIT)
    ctx.fillRect(9 * UNIT, 14 * UNIT, UNIT, UNIT)
    ctx.fillRect(11 * UNIT, 14 * UNIT, UNIT, UNIT)
    ctx.fillRect(12 * UNIT, 12 * UNIT, UNIT, UNIT)
    ctx.fillRect(9 * UNIT, 5 * UNIT, UNIT, 3 * UNIT)
    ctx.fillRect(11 * UNIT, 5 * UNIT, UNIT, 3 * UNIT)
    ctx.fillRect(10 * UNIT, 10 * UNIT, UNIT, UNIT)





}


//walk1
function drawKirbyWalk1() {
    ctx.fillStyle = "black";
    ctx.fillRect(5 * UNIT, 0, 5 * UNIT, UNIT);
    ctx.fillRect(3 * UNIT, UNIT, 2 * UNIT, UNIT);
    ctx.fillRect(10 * UNIT, UNIT, 2 * UNIT, UNIT);
    ctx.fillRect(2 * UNIT, 2 * UNIT, UNIT, UNIT);
    ctx.fillRect(12 * UNIT, 2 * UNIT, UNIT, UNIT);
    ctx.fillRect(UNIT, 3 * UNIT, 3 * UNIT, UNIT);
    ctx.fillRect(12 * UNIT, 3 * UNIT, 3 * UNIT, UNIT);
    ctx.fillRect(0, 4 * UNIT, UNIT, 4 * UNIT);
    ctx.fillRect(13 * UNIT, 4 * UNIT, UNIT, 7 * UNIT);
    ctx.fillRect(15 * UNIT, 4 * UNIT, UNIT, 4 * UNIT);
    ctx.fillRect(14 * UNIT, 8 * UNIT, UNIT, UNIT);
    ctx.fillRect(UNIT, 8 * UNIT, 2 * UNIT, UNIT);
    ctx.fillRect(UNIT, 9 * UNIT, UNIT, UNIT);
    ctx.fillRect(0, 10 * UNIT, UNIT, 2 * UNIT);
    ctx.fillRect(UNIT, 12 * UNIT, UNIT, 2 * UNIT);
    ctx.fillRect(2 * UNIT, 14 * UNIT, UNIT, UNIT);
    ctx.fillRect(3 * UNIT, 15 * UNIT, 2 * UNIT, UNIT);
    ctx.fillRect(5 * UNIT, 14 * UNIT, UNIT, UNIT);
    ctx.fillRect(2 * UNIT, 10 * UNIT, UNIT, UNIT);
    ctx.fillRect(3 * UNIT, 11 * UNIT, UNIT, UNIT);
    ctx.fillRect(4 * UNIT, 12 * UNIT, UNIT, UNIT);
    ctx.fillRect(5 * UNIT, 13 * UNIT, 5 * UNIT, UNIT);
    ctx.fillRect(10 * UNIT, 12 * UNIT, 2 * UNIT, UNIT);
    ctx.fillRect(10 * UNIT, 14 * UNIT, 3 * UNIT, UNIT);
    ctx.fillRect(13 * UNIT, 13 * UNIT, 2 * UNIT, UNIT);
    ctx.fillRect(15 * UNIT, 11 * UNIT, UNIT, 2 * UNIT);
    ctx.fillRect(12 * UNIT, 10 * UNIT, 3 * UNIT, UNIT);
    ctx.fillRect(12 * UNIT, 11 * UNIT, UNIT, UNIT);
    ctx.fillRect(8 * UNIT, 4 * UNIT, UNIT, 3 * UNIT);
    ctx.fillRect(10 * UNIT, 4 * UNIT, UNIT, 3 * UNIT);
    ctx.fillRect(9 * UNIT, 9 * UNIT, UNIT, UNIT);


}
function fillLightPink() {
    ctx.fillStyle = "#F3C4E2";
    ctx.fillRect(3 * UNIT, UNIT, 9 * UNIT, 12 * UNIT);
    ctx.fillRect(1 * UNIT, 4 * UNIT, 14 * UNIT, 5 * UNIT);
    ctx.fillRect(5 * UNIT, UNIT, UNIT, UNIT);



}
function fillDarkPink() {
    ctx.fillStyle = "#EB76CB";
    ctx.fillRect(5 * UNIT, UNIT, UNIT, UNIT);
    ctx.fillRect(9 * UNIT, UNIT, UNIT, UNIT);
    ctx.fillRect(3 * UNIT, 2 * UNIT, UNIT, UNIT);
    ctx.fillRect(11 * UNIT, 2 * UNIT, UNIT, UNIT);
    ctx.fillRect(UNIT, 4 * UNIT, UNIT, UNIT);
    ctx.fillRect(4 * UNIT, 4 * UNIT, UNIT, UNIT);
    ctx.fillRect(12 * UNIT, 4 * UNIT, UNIT, UNIT);
    ctx.fillRect(UNIT, 7 * UNIT, UNIT, UNIT);
    ctx.fillRect(5 * UNIT, 7 * UNIT, 2 * UNIT, UNIT);
    ctx.fillRect(11 * UNIT, 7 * UNIT, 4 * UNIT, UNIT);
    ctx.fillRect(UNIT, 9 * UNIT, 2 * UNIT, 5 * UNIT)
    ctx.fillRect(3 * UNIT, 11 * UNIT, UNIT, 4 * UNIT)
    ctx.fillRect(4 * UNIT, 12 * UNIT, 2 * UNIT, 3 * UNIT)
    ctx.fillRect(3 * UNIT, 8 * UNIT, UNIT, UNIT)
    ctx.fillRect(9 * UNIT, 12 * UNIT, 6 * UNIT, 2 * UNIT)
    ctx.fillRect(11 * UNIT, 11 * UNIT, 4 * UNIT, UNIT)
    ctx.fillRect(12 * UNIT, 9 * UNIT, UNIT, UNIT)

}

//      ctx.fillRect(UNIT,UNIT,UNIT,UNIT)
//      ctx.clearRect(UNIT,UNIT,UNIT,UNIT)
//Standing
function drawBorder() {
    ctx.fillStyle = "black";
    ctx.fillRect(6 * UNIT, 0, 5 * UNIT, UNIT);
    ctx.fillRect(4 * UNIT, UNIT, 2 * UNIT, UNIT);
    ctx.fillRect(11 * UNIT, UNIT, 2 * UNIT, UNIT);
    ctx.fillRect(3 * UNIT, 2 * UNIT, UNIT, UNIT);
    ctx.fillRect(13 * UNIT, 2 * UNIT, UNIT, 2 * UNIT);
    ctx.fillRect(2 * UNIT, 3 * UNIT, UNIT, 2 * UNIT);
    ctx.fillRect(14 * UNIT, 4 * UNIT, UNIT, 2 * UNIT);
    ctx.fillRect(UNIT, 5 * UNIT, UNIT, UNIT);
    ctx.fillRect(0, 6 * UNIT, UNIT, 4 * UNIT);
    ctx.fillRect(15 * UNIT, 6 * UNIT, UNIT, 5 * UNIT);
    ctx.fillRect(UNIT, 10 * UNIT, UNIT, UNIT);
    ctx.fillRect(2 * UNIT, 11 * UNIT, 2 * UNIT, UNIT);
    ctx.fillRect(4 * UNIT, 10 * UNIT, UNIT, UNIT);
    ctx.fillRect(13 * UNIT, 10 * UNIT, UNIT, UNIT);
    ctx.fillRect(13 * UNIT, 11 * UNIT, 2 * UNIT, UNIT);
    ctx.fillRect(3 * UNIT, 12 * UNIT, 2 * UNIT, UNIT);
    ctx.fillRect(12 * UNIT, 12 * UNIT, 2 * UNIT, UNIT);
    ctx.fillRect(2 * UNIT, 13 * UNIT, UNIT, UNIT);
    ctx.fillRect(5 * UNIT, 13 * UNIT, 7 * UNIT, UNIT);
    ctx.fillRect(14 * UNIT, 13 * UNIT, UNIT, UNIT);
    ctx.fillRect(UNIT, 14 * UNIT, UNIT, UNIT);
    ctx.fillRect(7 * UNIT, 14 * UNIT, 4 * UNIT, UNIT);
    ctx.fillRect(15 * UNIT, 14 * UNIT, UNIT, UNIT);
    ctx.fillRect(2 * UNIT, 15 * UNIT, 5 * UNIT, UNIT);
    ctx.fillRect(10 * UNIT, 15 * UNIT, 5 * UNIT, UNIT);
    ctx.fillRect(9 * UNIT, 5 * UNIT, UNIT, 3 * UNIT);
    ctx.fillRect(11 * UNIT, 5 * UNIT, UNIT, 3 * UNIT);
    ctx.fillRect(10 * UNIT, 10 * UNIT, UNIT, UNIT);

}
function drawLightPink() {
    ctx.fillStyle = "#F3C4E2"
    ctx.fillRect(6 * UNIT, UNIT, 5 * UNIT, UNIT);
    ctx.fillRect(4 * UNIT, 2 * UNIT, 9 * UNIT, UNIT);
    ctx.fillRect(3 * UNIT, 3 * UNIT, 10 * UNIT, UNIT);
    ctx.fillRect(3 * UNIT, 4 * UNIT, 11 * UNIT, UNIT);
    ctx.fillRect(2 * UNIT, 5 * UNIT, 12 * UNIT, UNIT);
    ctx.fillRect(UNIT, 6 * UNIT, 14 * UNIT, 5 * UNIT);
    ctx.fillRect(4 * UNIT, 11 * UNIT, 9 * UNIT, 2 * UNIT);
}
function drawDarkPink() {
    ctx.fillStyle = "#EB76C8"
    ctx.fillRect(6 * UNIT, UNIT, UNIT, UNIT);
    ctx.fillRect(10 * UNIT, UNIT, UNIT, UNIT);
    ctx.fillRect(4 * UNIT, 2 * UNIT, UNIT, UNIT);
    ctx.fillRect(12 * UNIT, 2 * UNIT, UNIT, UNIT);
    ctx.fillRect(3 * UNIT, 3 * UNIT, UNIT, UNIT);
    ctx.fillRect(13 * UNIT, 4 * UNIT, UNIT, 2 * UNIT);
    ctx.fillRect(UNIT, 6 * UNIT, UNIT, UNIT);
    ctx.fillRect(6 * UNIT, 8 * UNIT, 2 * UNIT, UNIT);
    ctx.fillRect(12 * UNIT, 8 * UNIT, 2 * UNIT, UNIT);
    ctx.fillRect(UNIT, 9 * UNIT, UNIT, UNIT);
    ctx.fillRect(4 * UNIT, 9 * UNIT, UNIT, UNIT);
    ctx.fillRect(13 * UNIT, 9 * UNIT, UNIT, UNIT);
    ctx.fillRect(2 * UNIT, 10 * UNIT, UNIT, UNIT);
    ctx.fillRect(14 * UNIT, 10 * UNIT, UNIT, UNIT);
    ctx.fillRect(4 * UNIT, 11 * UNIT, UNIT, UNIT);
    ctx.fillRect(12 * UNIT, 11 * UNIT, UNIT, UNIT);
    ctx.fillRect(5 * UNIT, 12 * UNIT, 2 * UNIT, UNIT);
    ctx.fillRect(11 * UNIT, 12 * UNIT, UNIT, UNIT);
    ctx.fillRect(3 * UNIT, 13 * UNIT, 11 * UNIT, 2 * UNIT);
    ctx.fillRect(2 * UNIT, 14 * UNIT, UNIT, UNIT);
    ctx.fillRect(14 * UNIT, 14 * UNIT, UNIT, UNIT);
}