var canvas = new fabric.Canvas('myCanvas');

player_x = 10;
player_y = 10;

block_img_width = 30;
block_img_height = 30;

var player_object = "";
var block_img_object = "";

function player_update() {
    fabric.Image.fromURL("player.png", function (Img) {
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_object);
    });
}

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function (Img) {
        block_img_object = Img;
        block_img_object.scaleToWidth(block_img_width);
        block_img_object.scaleToHeight(block_img_height);
        block_img_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(block_img_object);
    });
}
window.addEventListener("keydown", my_keydown)

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (e.shiftKey == true && keypressed == '80') {
        console.log("press shift and p together ");
        block_img_width = block_img_width + 10;
        block_img_height = block_img_height + 10;
        document.getElementById("current_width").innerHTML = block_img_width;
        document.getElementById("current_height").innerHTML = block_img_height;
    }
    if (e.shiftKey == true && keypressed == '79') {
        console.log("press shift and o together ");
        block_img_width = block_img_width - 10;
        block_img_height = block_img_height - 10;
        document.getElementById("current_width").innerHTML = block_img_width;
        document.getElementById("current_height").innerHTML = block_img_height;
    }
    if (keyPressed == "37") {
        left();
        console.log("left");
    }
    if (keyPressed == "40") {
        down();
        console.log("down");
    }
    if (keyPressed == "38") {
        up();
        console.log("up");
    }
    if (keyPressed == "39") {
        right();
        console.log("right");
    }
    if (keyPressed == "66") {
        new_image("brick.jpg");
        console.log("b");
    }
    if (keyPressed == "68") {
        new_image("dark_green_grass.png");
        console.log("d");
    } if (keyPressed == "89") {
        new_image("yellow_brick.png");
        console.log("y");
    }
}