let YURI;
let button;

function setup()
{
   createCanvas(640,480)
   soundFormats('mp3', 'ogg');
   YURI = loadSound('Blank',loadMusic);
   // YURI.play();
   button = createButton("play");
   button.mousePressed(togglePlaying);
}


function togglePlaying(){
    if(!YURI.isPlaying()){
        YURI.play();
        button.html('pause');
    } else {
        YURI.stop();
        button.html('play');
    }
}

 funtion loaded()
{
     console.log("It's Working");
     }
    
function draw()
{
   fill(180, 0, 0);
   ellipse(50, 50, 50, 50);

}
