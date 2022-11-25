//let YURI;
//function setup()
{
   // soundFormats('mp3', 'ogg');
   // YURI = loadSound('Blank',loadMusic);
   // YURI.play();
}


//function loadMusic()
{
   // YURI.play(); //
}

var song;
var button;

function setup()
{
    createCanvas(200,200)
    button = createButton('play');
    song = loadSound('Blank',loaded);
    button.mousePressed(togglePlaying);
    background(51);
}

function togglePlaying(){
    if(!song.isPlaying()){
        song.play();
        song.setVolume(0.3);
        button.html('pause');
    } else {
        song.stop();
        button.html('play');
    }
}

 funtion loaded(){
     console.log(loaded');
     }
    
//function draw()
{
    //fill(180,0,0);
    //ellipse(50,50,50,50);

}
