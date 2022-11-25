let YURI;
function setup()
{
    soundFormats('mp3', 'ogg');
    YURI = loadSound('Blank',loadMusic);
    //YURI.play();
}


function loadMusic()
{
    YURI.play(); //
}

function draw(){
    Fill(255,0,0);
    eclipse(50,50,100,100);

}