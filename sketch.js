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

function setup()
{
    createCanvas(200,200)
    button = createButton('play');
    button.mousePressed(togglePlaying);
    background(51);
}

function draw()
{
    fill(180,0,0);
    ellipse(50,50,50,50);

}