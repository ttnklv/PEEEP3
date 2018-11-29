function setup() {
    let myCanvas = createCanvas(300, 400);

    myCanvas.parent('sketch-holder');

    background(200);

    let c = color(70, 69, 68);//#464544
    fill(c);

    rect(50, 200, 100, 50);
    arc(150, 200, 100, 100, 2 * PI, TWO_PI + 2 * QUARTER_PI);
    triangle(150, 200, 100, 200, 150, 150);


    fill(0);
    line(50, 200, 250, 200);
    line(150, 100, 150, 300);

    line(150, 100, 160, 110);
    line(150, 100, 140, 110);

    line(250, 200, 240, 210);
    line(250, 200, 240, 190);

//oX
    line(200, 198, 200, 202);
    line(175, 198, 175, 202);
    line(125, 198, 125, 202);
    line(100, 198, 100, 202);


    //oY
    line(148, 250, 152, 250);
    line(148, 225, 152, 225);
    line(148, 175, 152, 175);
    line(148, 150, 152, 150);


    text("X", 250, 200);
    text("Y", 150, 100);

    text("R/2", 200, 200);
    text("-R/2", 100, 195);
    text("-R", 50, 200);
    text("R", 200, 200);

    text("-R/2", 150, 260);
    text("R/2", 150, 150);
}

getPoint(1);


function draw() {
    //75 - коэффициент смещения из-за отсчета
    if (mouseIsPressed) {
        ellipse(winMouseX - 6, winMouseY - 185, 4, 4);
        // document.getElementById("Yvalue").innerHTML = winMouseY;
    }
    print(mouseIsPressed);


    // //изменить условие для y
    // if ((winMouseX > 8 && winMouseX < 308 && winMouseY > 187 && winMouseY < 585) && mouseIsPressed) {
    //     let r = ($('input[name=R]:checked').val());
    //     let x = (winMouseX - 156) / 50 * r;
    //     let y = (385 - winMouseY) / 50 * r;
    //     y = y * 100;
    //     y = Math.round(y);
    //     y = y / 100;
    //
    //     x = x * 100;
    //     x = Math.round(x);
    //     x = x / 100;
    //
    //     if ((y >= 3 || y <= -3) && mouseIsPressed) {
    //         document.getElementsByName("mistake")[0].innerHTML = "Unable to read point coordinates";
    //         return;
    //     } else {
    //         let oldX = $('input[name=X]:checked').val();
    //         $('input[name=X]').val(x);
    //
    //         let oldY = $('input[name=Y]:checked').val();
    //         $('input[name=Y]').val(y);
    //
    //         document.getElementsByName('xyForm')[0].submit();
    //
    //         $('input[name=X]').val(oldX);
    //         $('input[name=Y]').val(oldY);
    //
    //         document.getElementsByName("mistake")[0].innerHTML = "";
    //     }

    mouseIsPressed = false;


    // }
}

setup();


//отрисовка имеющихся точек

function one(arrayX, arrayY) {
    getPoint(arrayX, arrayY, 1);
}

function two(arrayX, arrayY) {
    getPoint(arrayX, arrayY, 2);
}

function three(arrayX, arrayY) {
    getPoint(arrayX, arrayY, 3);
}

function four(arrayX, arrayY) {
    getPoint(arrayX, arrayY, 4);
}

function five(arrayX, arrayY) {
    getPoint(arrayX, arrayY, 5);
}

function getPoint(arrayX, arrayY, r) {
    setup();
    let con = 50 / r;
    let X = JSON.parse(arrayX);
    let Y = JSON.parse(arrayY);

    for (let i = 0; i < X.length; i++) {
        // let c = color(70, 69, 68);//#464544
        // fill(c);
        ellipse(X[i] * con + 150, 200 - Y[i] * con, 4, 4);
    }
}

//странно себя ведет Text input

function tapR1() {
    let r1 = $(".r1");
    let r2 = $(".r2");
    let r3 = $(".r3");
    let r4 = $(".r4");
    let r5 = $(".r5");
    r1.css({background: "#464544"});
    r2.css({background: "white"});
    r3.css({background: "white"});
    r4.css({background: "white"});
    r5.css({background: "white"});
}

function tapR2() {
    let r1 = $(".r1");
    let r2 = $(".r2");
    let r3 = $(".r3");
    let r4 = $(".r4");
    let r5 = $(".r5");
    r1.css({background: "white"});
    r2.css({background: "#464544"});
    r3.css({background: "white"});
    r4.css({background: "white"});
    r5.css({background: "white"});
}

function tapR3() {
    let r1 = $(".r1");
    let r2 = $(".r2");
    let r3 = $(".r3");
    let r4 = $(".r4");
    let r5 = $(".r5");
    r1.css({background: "white"});
    r2.css({background: "white"});
    r3.css({background: "#464544"});
    r4.css({background: "white"});
    r5.css({background: "white"});
}

function tapR4() {
    let r1 = $(".r1");
    let r2 = $(".r2");
    let r3 = $(".r3");
    let r4 = $(".r4");
    let r5 = $(".r5");
    r1.css({background: "white"});
    r2.css({background: "white"});
    r3.css({background: "white"});
    r4.css({background: "#464544"});
    r5.css({background: "white"});
}

function tapR5() {
    let r1 = $(".r1");
    let r2 = $(".r2");
    let r3 = $(".r3");
    let r4 = $(".r4");
    let r5 = $(".r5");
    r1.css({background: "white"});
    r2.css({background: "white"});
    r3.css({background: "white"});
    r4.css({background: "white"});
    r5.css({background: "#464544"});
}



function tapY1() {
    let y1 = $(".y1");
    let y2 = $(".y2");
    let y3 = $(".y3");
    let y4 = $(".y4");
    let y5 = $(".y5");
    let y6 = $(".y6");
    let y7 = $(".y7");
    let y8 = $(".y8");
    let y9 = $(".y9");
    y1.css({background: "#464544"});
    y2.css({background: "white"});
    y3.css({background: "white"});
    y4.css({background: "white"});
    y5.css({background: "white"});
    y6.css({background: "white"});
    y7.css({background: "white"});
    y8.css({background: "white"});
    y9.css({background: "white"});
}

function tapY2() {
    let y1 = $(".y1");
    let y2 = $(".y2");
    let y3 = $(".y3");
    let y4 = $(".y4");
    let y5 = $(".y5");
    let y6 = $(".y6");
    let y7 = $(".y7");
    let y8 = $(".y8");
    let y9 = $(".y9");
    y1.css({background: "white"});
    y2.css({background: "#464544"});
    y3.css({background: "white"});
    y4.css({background: "white"});
    y5.css({background: "white"});
    y6.css({background: "white"});
    y7.css({background: "white"});
    y8.css({background: "white"});
    y9.css({background: "white"});
}

function tapY3() {
    let y1 = $(".y1");
    let y2 = $(".y2");
    let y3 = $(".y3");
    let y4 = $(".y4");
    let y5 = $(".y5");
    let y6 = $(".y6");
    let y7 = $(".y7");
    let y8 = $(".y8");
    let y9 = $(".y9");
    y1.css({background: "white"});
    y2.css({background: "white"});
    y3.css({background: "#464544"});
    y4.css({background: "white"});
    y5.css({background: "white"});
    y6.css({background: "white"});
    y7.css({background: "white"});
    y8.css({background: "white"});
    y9.css({background: "white"});
}

function tapY4() {
    let y1 = $(".y1");
    let y2 = $(".y2");
    let y3 = $(".y3");
    let y4 = $(".y4");
    let y5 = $(".y5");
    let y6 = $(".y6");
    let y7 = $(".y7");
    let y8 = $(".y8");
    let y9 = $(".y9");
    y1.css({background: "white"});
    y2.css({background: "white"});
    y3.css({background: "white"});
    y4.css({background: "#464544"});
    y5.css({background: "white"});
    y6.css({background: "white"});
    y7.css({background: "white"});
    y8.css({background: "white"});
    y9.css({background: "white"});
}

function tapY5() {
    let y1 = $(".y1");
    let y2 = $(".y2");
    let y3 = $(".y3");
    let y4 = $(".y4");
    let y5 = $(".y5");
    let y6 = $(".y6");
    let y7 = $(".y7");
    let y8 = $(".y8");
    let y9 = $(".y9");
    y1.css({background: "white"});
    y2.css({background: "white"});
    y3.css({background: "white"});
    y4.css({background: "white"});
    y5.css({background: "#464544"});
    y6.css({background: "white"});
    y7.css({background: "white"});
    y8.css({background: "white"});
    y9.css({background: "white"});
}

function tapY6() {
    let y1 = $(".y1");
    let y2 = $(".y2");
    let y3 = $(".y3");
    let y4 = $(".y4");
    let y5 = $(".y5");
    let y6 = $(".y6");
    let y7 = $(".y7");
    let y8 = $(".y8");
    let y9 = $(".y9");
    y1.css({background: "white"});
    y2.css({background: "white"});
    y3.css({background: "white"});
    y4.css({background: "white"});
    y5.css({background: "white"});
    y6.css({background: "#464544"});
    y7.css({background: "white"});
    y8.css({background: "white"});
    y9.css({background: "white"});
}

function tapY7() {
    let y1 = $(".y1");
    let y2 = $(".y2");
    let y3 = $(".y3");
    let y4 = $(".y4");
    let y5 = $(".y5");
    let y6 = $(".y6");
    let y7 = $(".y7");
    let y8 = $(".y8");
    let y9 = $(".y9");
    y1.css({background: "white"});
    y2.css({background: "white"});
    y3.css({background: "white"});
    y4.css({background: "white"});
    y5.css({background: "white"});
    y6.css({background: "white"});
    y7.css({background: "#464544"});
    y8.css({background: "white"});
    y9.css({background: "white"});
}

function tapY8() {
    let y1 = $(".y1");
    let y2 = $(".y2");
    let y3 = $(".y3");
    let y4 = $(".y4");
    let y5 = $(".y5");
    let y6 = $(".y6");
    let y7 = $(".y7");
    let y8 = $(".y8");
    let y9 = $(".y9");
    y1.css({background: "white"});
    y2.css({background: "white"});
    y3.css({background: "white"});
    y4.css({background: "white"});
    y5.css({background: "white"});
    y6.css({background: "white"});
    y7.css({background: "white"});
    y8.css({background: "#464544"});
    y9.css({background: "white"});
}

function tapY9() {
    let y1 = $(".y1");
    let y2 = $(".y2");
    let y3 = $(".y3");
    let y4 = $(".y4");
    let y5 = $(".y5");
    let y6 = $(".y6");
    let y7 = $(".y7");
    let y8 = $(".y8");
    let y9 = $(".y9");
    y1.css({background: "white"});
    y2.css({background: "white"});
    y3.css({background: "white"});
    y4.css({background: "white"});
    y5.css({background: "white"});
    y6.css({background: "white"});
    y7.css({background: "white"});
    y8.css({background: "white"});
    y9.css({background: "#464544"});
}

