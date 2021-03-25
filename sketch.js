
let drone;
let videos = [];
let imgs = [];
let bg;
let spb = 35; //spaceBetweenVideos
let resolutionX = 5;
let resolutionY = 3;



function preload() {
  
    videos[0] = createVideo('0.mp4');
    videos[1] = createVideo('0-1.mp4');
    videos[2] = createVideo('1.mp4');
    videos[3] = createVideo('2.mp4');
    videos[4] = createVideo('0-2.mp4');  
    videos[5] = createVideo('3.mp4');
    videos[6] = createVideo('4.mp4');
    videos[7] = createVideo('5.mp4');
    videos[8] = createVideo('0-3.mp4');
    videos[9] = createVideo('6.mp4');
    videos[10] = createVideo('0-4.mp4');
    videos[11] = createVideo('7.mp4');
    videos[12] = createVideo('0-5.mp4');
    videos[13] = createVideo('8.mp4');
    videos[14] = createVideo('9.mp4');
  
    imgs[0] = loadImage('0.gif');
    imgs[1] = loadImage('0-1.gif');
    imgs[2] = loadImage('1.gif');
    imgs[3] = loadImage('2.gif');
    imgs[4] = loadImage('0-2.gif');
    imgs[5] = loadImage('3.gif');
    imgs[6] = loadImage('4.gif');
    imgs[7] = loadImage('5.gif');
    imgs[8] = loadImage('0-3.gif');
    imgs[9] = loadImage('6.gif');
    imgs[10] = loadImage('0-4.gif');
    imgs[11] = loadImage('7.gif');
    imgs[12] = loadImage('0-5.gif');
    imgs[13] = loadImage('8.gif');
    imgs[14] = loadImage('9.gif');

  drone = createAudio('drone001.mp3');
  drone.loop(true);

  
    for(let i = 0; i < videos.length; ++i) {
      videos[i].hide();
    }
  
  
}

function setup() {
   // createCanvas(900, 600);
   createCanvas(displayWidth * 0.65, displayHeight * 0.6);
   // createCanvas(1280, 800);
  
  drone = createAudio('drone001.mp3');
  drone.loop(true);
}

function draw() {
    let w = width / resolutionX;
    let h = width / resolutionX;
    background(0);
    var videoPicker = 0;
    for( let y = 0; y < resolutionY; y++){
        for( let x = 0; x < resolutionX; x++){
         
        if (mouseX < x * w + w-spb && mouseY < y * h + h-spb && mouseX > x * w +spb&& mouseY > y* h +spb) {

       videos[videoPicker].play();
       image(videos[videoPicker], spb+w*x, spb+h*y, w*0.6, h*0.6);
        } else {
       videos[videoPicker].pause();
       image(imgs[videoPicker], spb+w*x, spb+h*y, w*0.6, h*0.6);
        }
        videoPicker++;
          if(videoPicker >= videos.length) videoPicker = 0;
      }
    }
}
