var hypnoticBall, database;
var positionn;


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);

  hypnoticBall = createSprite(250,250,10,10);
  hypnoticBall.shapeColor = "red";


  var hypnoticBallPosition = database.ref('ball/position');
  hypnoticBallPosition.on("value", readPosition, showError);
}

function draw(){
  background("white");
if(position !== undefined){
    if(keyDown(LEFT_ARROW)){
      writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
      writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
      writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
      writePosition(0,+1);
    }
    drawSprites();
}
}

function writePosition(x,y){
  database.ref('ball/positionn').set({
    'x': positionn.x + x ,
    'y': positionn.y + y
  })
}

function readPosition(data){
  positionn = data.val();
   
  hypnoticBall.x = positionn.x;
  hypnoticBall.y = positionn.y;
}

function showError(){
  console.log("Error in writing to the database");
}