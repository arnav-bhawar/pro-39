var player,hurdles;
var canvas;

var game1, form;
var allPlayers;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;


function preload(){ 
  //track = loadImage("images/track.jpg");
  runner1_img = loadImage("file/hello.png");
  //car2_img = loadImage("images/car2.png");
 // car3_img = loadImage("images/car3.png");
  //car4_img = loadImage("images/car4.png");
  //ground = loadImage("images/ground.png");
  
  }


function setup() {
canvas = createCanvas(displayWidth - 20, displayHeight-30);
database = firebase.database();
game1 = new game();
game1.getState();
game1.start();
}

function draw(){
  if(playerCount === 4){
    game1.update(1);
  }
  if(gameState === 1){
    clear();
    game1.play();
  }

  if(gameState===2){
    game1.end();
  }

}
