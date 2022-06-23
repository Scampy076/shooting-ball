function setup() {
    createCanvas(800, 800);
}
let x = 100
let y = 100
let shoot = 0
let xSpeed = 1
let ySpeed = 1

function draw()
{
    background("grey");
    fill(8, 146, 208);
    circle(x + shoot, y, 10)
    circle(x, y, 60)
    

    if(keyIsDown(90) == true) {
        y = y - 10;
    }
    if(keyIsDown(83) == true) {
        y = y + 10;
    }
    if(keyIsDown(81) == true) {
        x = x - 10;
    }
    if(keyIsDown(68) == true) {
        x = x + 10;
    }
    if(keyIsDown(32) == true) {
        shoot = shoot + 20 * 1
    }

}
