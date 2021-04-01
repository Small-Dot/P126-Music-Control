song = "";
song2 = "";

LeftWristX = 0;
LeftWristY = 0 ;
RightWristX = 0;
RightWristY = 0;

function preload(){
song  = loadSound("music.mp3");
song2 = loadSound("music2.mp3");
}

 function setup(){
  canvas = createCanvas(500, 300);
  canvas.position(380, 250);
  video  = createCapture(VIDEO);
  video.hide();
  posenet = ml5.poseNet(video, modelLoaded);
  posenet.on('pose', gotPoses);
 }

function gotPoses(results){
if(results.length > 0){
 console.log(results);
 LeftWristX = results[0].pose.leftWrist.x;
 LeftWristY = results[0].pose.leftWrist.y;
 console.log("left wrist X position = " + 
 LeftWristY + ", left wrist Y position = " + LeftWristY);

 RightWristX = results[0].pose.rightWrist.x;
 RightWristY = results[0].pose.rightWrist.y;
 console.log("right wrist X position = " + RightWristX + ", right wrist Y position = " + RightWristY);
}
}
 function modelLoaded() {
     console.log("Posenet has been initialized.");
 }
 function draw(){
     image(video, 0, 0, 500, 300);
 }


