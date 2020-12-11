var ball,database,position;

function setup(){
    createCanvas(500,500);
    database = firebase.database()
    var ballPosition = database.ref('Ball/Position')
    ballPosition.on('value',readData)
    ball = createSprite(10,10,10,10);
    ball.shapeColor = "red";
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    database.ref('Ball/Position').set({
        'x': position.x + x,
        'y': position.y + y
    })
   
}
function readData(data){
 position = data.val();
 ball.x = position.x;
 ball.y =position.y;
}
