let YURI;
function setup()
{
    soundFormats('mp3', 'ogg');
    YURI = loadSound('Blank',loadMusic);
    //YURI.play();
}


function loadMusic()
{
    YURI.play();
}