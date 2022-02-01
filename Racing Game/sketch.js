var database;
var canvas;
var backgroundImage;
var form;
var game;
var player;
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var car1;
var car2;
var car3;
var car4;
var cars = [];
var car1Img;
var car2Img;
var car3Img;
var car4Img;
var track;


function preload(){
    car1Img = loadImage("car1.png");
    car2Img = loadImage("car2.png");
    car3Img = loadImage("car3.png");
    car4Img = loadImage("car4.png");
    track = loadImage("track.jpg");
}

function setup(){
    database = firebase.database();
    createCanvas(displayWidth,displayHeight);
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    background("white");
    if(playerCount == 4){
         console.log(playerCount)
        game.update(1);
    }
    if(gameState == 1){
        console.log(gameState)
        game.play();
    }
    }
    



  