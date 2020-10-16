 noseX=0; 
 noseY=0;
 rightwristX=0;
leftwristX=0;

difference=0;

function setup(){
    video=createCapture(VIDEO);
video.size(550, 500);
canvas=createCanvas(550, 550);
canvas.position(560, 150);


poseNet=ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}


function modelLoaded(){
console.log("POSENET INITIALISED");
}

function draw(){
background(' #ffb6c1')
stroke('#00FFFF');
fill('#00FFFF');
square(noseX,noseY, difference);
document.getElementById("square_side").innerHTML="width and height of a square will be: "+difference+"px";
}

function gotPoses(results){
if (results.length > 0)

{
console.log(results);
noseX=results[0].pose.nose.x;
noseY=results[0].pose.nose.y;
console.log("nosex= "+noseX+" nosey= "+noseY);
rightwristX=results[0].pose.rightWrist.x;
leftwristX=results[0].pose.leftWrist.x;
difference=floor(leftwristX-rightwristX);
console.log("rightwristx= "+rightwristX+" leftwristX= "+leftwristX+"difference= "+difference);
}
}


