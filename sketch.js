//Create variables here
var hungryDog,happydog,database,foodS,foodstock
function preload()
{
hungryDog.loadImage("images/dogImg1.png")
happydog.loadImage("images/dogImg.png")
}

function setup() {
	createCanvas(500, 500);
  hungryDog = createSprite(70,70)
  hungryDog.addImage(Dog)
  foodstock=database.ref('food')
  foodstock.on('value.readStock')
}


function draw() {  
background(46,139,87)
if(KeyWentDown(UP_ARROW)){
  writeStock(foodS)
  hungryDog.addImage(dogHappy)
}
  drawSprites();
  //add styles here
text("press UP arrow to feed milk!!")
textSize(20);
fill(red);
}
function readStock(data){
  foodS = data.val();
}
function writeStock(x){
if(x<=0){
  x=0
}else{
  x=x-1
}
  database.ref('/').update({
    food:x
  })
}

