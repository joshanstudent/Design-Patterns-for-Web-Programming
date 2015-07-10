/*
     Name:
     Date:
     Class & Section:  WIA-####
     Comments: "HTML5 Canvas Drawing"
 */


/*******************************************
HTML5 Shape Drawing Activity
    1.  Setup the canvas and 2d context
    2.  Draw out each shape in the sections below
     
********************************************/

/*******************************************
FILE SETUP

// Setup up 7 different Canvases in index.html one for each problem.
//Link Modernizer.js
// Link the main.js file
// Setup the call to that canvas and get it's 2d context
//Use Modernizer to verify that your browser supports canvas, include a fallback message


/******************************************
PART 1

Draw a rectangle starting at point (0 ,0)
That has a width of 50 px and a height of 100px
Set the color of the rectangle to a shade of blue.
Set the stroke color to black and the dimension of the stroke are the same as the rectangle.

Reminder - set the style first then draw.
********************************************/


//Draw Rectangle here

window.onload = function() {
    var theCanvas = document.getElementById("Part1");
    if (theCanvas) {
        var ctx = theCanvas.getContext("2d");

        if (ctx) {

            ctx.strokeStyle = "black";
            ctx.fillStyle = "blue";
            ctx.lineWidth = 5;
            ctx.fillRect(0, 0, 50, 100);
            ctx.strokeRect(0, 0, 50, 100);
        }
    }


    /*******************************************
     PART 2

     Draw a circle starting at point (50 ,50)
     That has a radius of 20 px
     Set the color of the circle to a shade of red and set the alpha to .5
     Set the stroke color to black and use a radius of 30px for this circle.

     Reminder - set the style first then draw.
     Use the arc method
     ********************************************/



//Draw Circle here

    var theCanvas = document.getElementById("Part2");
    if (theCanvas && theCanvas.getContext) {
        var ctx2 = theCanvas.getContext("2d");

        if (ctx2) {

            ctx2.beginPath();
            ctx2.arc(50, 50, 20, 0, 2 * Math.PI, false);
            ctx2.fillStyle = "red";
            ctx2.globalAlpha = .5;
            ctx2.strokeStyle = "black";
            ctx2.lineWidth = 30;
            ctx2.stroke();
            ctx2.fill();


        }
    }


    /*******************************************
     PART 3

     Practice using Path drawing.
     Create a 5-point star shaped pattern using the lineTo method.
     Begin this shape at (100, 100)

     Height and width and color are up to you.

     ********************************************/


//Draw Star here
    var theCanvas = document.getElementById("Part3");
    if (theCanvas && theCanvas.getContext) {
        var ctx3 = theCanvas.getContext("2d");

        if (ctx3) {

            ctx3.beginPath();
            ctx3.moveTo(100, 100);
            ctx3.lineTo(60, 225);
            ctx3.lineTo(149, 150);
            ctx3.lineTo(45, 150);
            ctx3.lineTo(137, 225);
            ctx3.lineTo(100, 100);
            ctx3.fillStyle = "green";
            ctx3.fill();
        }
    }


    /*******************************************
     PART 4

     Practice drawing with Bezier curves.
     Try drawing the top to an umbrella.
     This should have one large arc (a half circle) on the top and scalloped edges on the bottom.

     Position, height, width and color are your choice.
     Do not overlap any other object.

     ********************************************/


    //Draw Umbrella top here
    var theCanvas = document.getElementById("Part4");
    if (theCanvas && theCanvas.getContext) {
        var ctx4 = theCanvas.getContext("2d");
        var raduis = 75;

        if (ctx4) {

            ctx4.strokeStyle = "green";
            ctx4.lineWidth = 4;


            //Stroke a simple bezier curve
            ctx4.beginPath();
            ctx4.moveTo(20, 200);

            // //bezierCurveTo(cx1, cy1, cx2, cy2, x, y )

            ctx4.bezierCurveTo(40, 10, 325, 5, 375, 200);

            ctx4.stroke();
            ctx4.closePath();


            //Stroke a simple bezier curve scalloped edges 1
            ctx4.beginPath();
            ctx4.moveTo(21, 200);
            ctx4.lineWidth = 3;

            // //bezierCurveTo(cx1, cy1, cx2, cy2, x, y )

            ctx4.bezierCurveTo(25, 180, 100, 160, 115, 205);

            ctx4.stroke();
            ctx4.closePath();

            //Stroke a simple bezier curve scalloped edges 2
            ctx4.beginPath();
            ctx4.moveTo(114, 205);
            ctx4.lineWidth = 3;

            // //bezierCurveTo(cx1, cy1, cx2, cy2, x, y )

            ctx4.bezierCurveTo(140, 175, 175, 180, 195, 205);

            ctx4.stroke();
            ctx4.closePath();

            //Stroke a simple bezier curve scalloped edges 3
            ctx4.beginPath();
            ctx4.moveTo(193, 205);
            ctx4.lineWidth = 3;

            // //bezierCurveTo(cx1, cy1, cx2, cy2, x, y )

            ctx4.bezierCurveTo(225, 165, 270, 200, 270, 205);

            ctx4.stroke();
            ctx4.closePath();

            //Stroke a simple bezier curve scalloped edges 4
            ctx4.beginPath();
            ctx4.moveTo(268, 205);
            ctx4.lineWidth = 3;

            // //bezierCurveTo(cx1, cy1, cx2, cy2, x, y )

            ctx4.bezierCurveTo(300, 175, 360, 180, 375, 199);

            ctx4.stroke();
            ctx4.closePath();

        }
    }


    /*******************************************
     PART 5

     Practice using text.
     Draw text into your canvas.  It can said whatever you would like in any color.

     ********************************************/

//Draw text here
    var theCanvas = document.getElementById("Part5");
    if (theCanvas && theCanvas.getContext) {
        var ctx5 = theCanvas.getContext("2d");
        var x = 5;
        var y = 150;

        if (ctx5) {

            ctx5.font = "55pt Calibri";
            ctx5.textBaseline = "bottom";
            ctx5.lineWidth = 3;
            ctx5.strokeStyle = "blue";
            ctx5.strokeText("Hello World!", x, y);
        }

    }


    /*******************************************
     PART 6

     Pixel manipulation.
     Draw the image logo.png into the canvas in the following 3 ways.
     1. The image exactly as it is.
     2. Shrink the image by 50%
     3. Slice a section of the logo out and draw that onto the canvas.

     Reminder to use the drawImage method for all 3 of the ways.

     ********************************************/

//Draw images here

    var theCanvas = document.getElementById('Part6');
    if (theCanvas && theCanvas.getContext) {
        var ctx6 = theCanvas.getContext("2d");
        if (ctx6) {

            //Create a variable to hold our image
            var srcImg = document.getElementById("img1");

            //Draw an image directly onto the canvas
            ctx6.drawImage(srcImg, 0, 0);

            //Draw a scaled down image
            //drawImage(srcImg, dx, dy, dw, dh)
            ctx6.drawImage(srcImg, 150, 1050, 1650, 540);

            //Draw a slice image
            // drawImage(srcImg, sx, sy, sw, sh, dx, dy, dw, dh)
            ctx6.drawImage(srcImg, 2380, 84, 387, 309, 350, 1500, 774, 618);


        }
    }


    /*******************************************
     PART 7

     Putting it all together.

     Using a combination of all the methods.
     Create a complex scene.
     You must use at least 3 different methods.

     ********************************************/

// Draw scene here

    // Script for Umbrella

    var theCanvas = document.getElementById("Part7");
    if (theCanvas && theCanvas.getContext) {
        var ctx7 = theCanvas.getContext("2d");
        var raduis = 75;

        if (ctx7) {

            ctx7.strokeStyle = "green";
            ctx7.lineWidth = 4;


            //Stroke a simple bezier curve
            ctx7.beginPath();
            ctx7.moveTo(20, 200);

            // //bezierCurveTo(cx1, cy1, cx2, cy2, x, y )

            ctx7.bezierCurveTo(40, 10, 325, 5, 375, 200);

            ctx7.stroke();
            ctx7.closePath();


            //Stroke a simple bezier curve scalloped edges 1
            ctx7.beginPath();
            ctx7.moveTo(21, 200);
            ctx7.lineWidth = 3;

            // //bezierCurveTo(cx1, cy1, cx2, cy2, x, y )

            ctx7.bezierCurveTo(25, 180, 100, 160, 115, 205);

            ctx7.stroke();
            ctx7.closePath();

            //Stroke a simple bezier curve scalloped edges 2
            ctx7.beginPath();
            ctx7.moveTo(114, 205);
            ctx7.lineWidth = 3;

            // //bezierCurveTo(cx1, cy1, cx2, cy2, x, y )

            ctx7.bezierCurveTo(140, 175, 175, 180, 195, 205);

            ctx7.stroke();
            ctx7.closePath();

            //Stroke a simple bezier curve scalloped edges 3
            ctx7.beginPath();
            ctx7.moveTo(193, 205);
            ctx7.lineWidth = 3;

            // //bezierCurveTo(cx1, cy1, cx2, cy2, x, y )

            ctx7.bezierCurveTo(225, 165, 270, 200, 270, 205);

            ctx7.stroke();
            ctx7.closePath();

            //Stroke a simple bezier curve scalloped edges 4
            ctx7.beginPath();
            ctx7.moveTo(268, 205);
            ctx7.lineWidth = 3;

            // //bezierCurveTo(cx1, cy1, cx2, cy2, x, y )

            ctx7.bezierCurveTo(300, 175, 360, 180, 375, 199);
            ctx7.stroke();
            ctx7.closePath();

        }
    }




    // Script for Text


    var theCanvas = document.getElementById("Part7");
    if (theCanvas && theCanvas.getContext) {
        var ctx7 = theCanvas.getContext("2d");
        var x = 70;
        var y = 170;

        if (ctx7) {
            ctx7.beginPath();

            ctx7.font = "35pt Calibri";
            ctx7.textBaseline = "bottom";
            ctx7.lineWidth = 2;
            ctx7.strokeStyle = "blue";
            ctx7.strokeText("Hello World!", x, y);
            ctx7.closePath();
        }

    }






    // Script for image

    var theCanvas = document.getElementById('Part7');
    if (theCanvas && theCanvas.getContext) {
        var ctx7 = theCanvas.getContext("2d");
        if (ctx7) {

            ctx7.beginPath();

            //Create a variable to hold our image
            var srcImg = document.getElementById("img1");


            //Draw a scaled down image
            //drawImage(srcImg, dx, dy, dw, dh)
            ctx7.drawImage(srcImg, 20, 180, 825, 270);

            ctx7.closePath();

        }
    }



}



