var gameState=0;
var Playercount;
var Form, Player,Game;
var database;

function setup(){
    createCanvas(400,400);
    database=firebase.database();
   Game=new game()
   Game.getState();
   Game.start();
}

function draw(){
    
   
}



