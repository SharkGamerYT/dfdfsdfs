class Game{
constructor(){

}
getState(){
    var gameStateRef = database.ref('gameState');
    gameStateRef.on("value", function(data){
        gameState = data.val();
    })
}
update(state){
    database.ref('/').update({
        gameState:state

    })
    console.log(gameState)
}
async start(){
    if(gameState == 0){
player = new Player();
var playerCountRef = await database.ref('playerCount').once("value");
if(playerCountRef.exists()){
    playerCount = playerCountRef.val();
    player.getCount(); 
    console.log(playerCount)
    
}
form = new Form();
    form.display();
    }
    car1 = createSprite(100,200);
    car1.addImage("car1",car1Img);
    car2 = createSprite(300,200);
    car2.addImage("car2",car2Img);
    car3 = createSprite(500,200);
    car3.addImage("car3",car3Img);
    car4 = createSprite(700,200);
    car4.addImage("car4",car4Img);
     cars = ["piola","xd","patito juan","salchicha"];
}
play(){
    form.hide();
    Player.getPlayerInfo();
    if(allPlayers!= undefined){
        background("blue");
        image(track,0,-displayHeight*4, displayWidth,displayHeight*5)
        var index = 0;
        var x = 175;
        var y; 
        for(var plr in allPlayers){
            index = index + 1;
            console.log(index);
            console.log(cars);
            x = x + 200;
            y = displayHeight - allPlayers[plr].distance;
            cars[index-1].x = x;
            cars[index-1].y = y;
            if(index = player.index){
                camera.position.x = displayWidth/2;
                camera.position.y = cars[index-1].y 
            }

            

        }
    }
    if (keyIsDown("w") && player.index!== null){
       player.distance+=10;
       player.update();
    }
    if(player.distance > 3860){
        gameState = 2
    }
    drawSprites();
}
}