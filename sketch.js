var bullet, wall, speed, weight, damage, thickness;
function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50, 200, 30, 10);
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
  bullet.shapeColor=color(80,80,80);
  speed=random(223,321);
  weight=random(30,52);
  bullet.velocityX=speed;
  thickness=random(22,83);
  damage=weight*0.5*speed*speed/(thickness*thickness*thickness)
}

function draw() {
  background(255,255,255); 
  if(bullet.isTouching(wall)){
    if(damage>10){
      wall.shapeColor=color(255,0,0);
    }
    else {
      wall.shapeColor=color(0,255,0);
    }
  }
  bullet.collide(wall);
  drawSprites();
}