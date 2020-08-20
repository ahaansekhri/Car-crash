var car,wall,speed,weight,deformation,bang_sound;

function preload(){
  bang_sound = loadSound("crash.mp3");
  
  
}
function setup() {
  createCanvas(1600,400);

  car = createSprite(200, 200, 40, 20);
  car.shapeColor = "grey";

  wall = createSprite(1500, 200, 60, 200);
  wall.shapeColor = "black";

  speed = random(55,99);
  weight = random(400,1500);

  car.velocityX = speed;

  deformation = Math.round((0.5*weight*speed*speed)/22500);

}

function draw() {
  background(255,255,255);  

    if(abs(car.width/2 - wall.width/2) > wall.x - car.x){
      car.velocityX = 0;
      car.x = 1450;
      bang_sound.play();

      if(deformation < 100){
        car.shapeColor = "green";
      }

      if(deformation >= 100 && deformation <=180){
        car.shapeColor = "yellow";
      }

      if(deformation > 180){
        car.shapeColor = "red";
      }
    }

  drawSprites();
}
