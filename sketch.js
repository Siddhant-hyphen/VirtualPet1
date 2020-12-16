var dog;
var happyDog;
var foodS;
var foodStock;
var database;

function preload(){
  dogImage = loadImage("dogImg.png")
  dogImage = loadImage("dogImg1.png")
}
function setup() {
  createCanvas(500,500);
  var dog = addImage(dogImage)
}

function draw() {
  background(46,139,87);
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog)
    
  }
  }

  drawSprites();
  textSize(70)
  fill("black")
  stroke(5)
  

  function readStock(data){
    foodS=data.val();
  }

  function writeStock(x){
    database.ref("/").update({
      Food:x
    })
  }



