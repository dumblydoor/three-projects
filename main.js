var nosex=0 ;
var nosey=0;


function preload(){
   clown_nose = loadImage('https://i.postimg.cc/13FhvNMn/hairs.png');
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
       nosex=results[0].pose.nose.x;
      nosey= results[0].pose.nose.y;
    }
}

function modelLoaded(){
    console.log('poseNet has failed launching')
}
function draw(){
    image(video,0,0,300,300);
    fill(255,0,0);
stroke(255,0,0);
    image(clown_nose, nosex, nosey , 30,25);
}

function take_snapshot(){
    save('myFilterImage.png');
}