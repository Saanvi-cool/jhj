lip_x="";
lip_y="";
function setup(){
    canvas=createCanvas(400,300);
    canvas.center();
    webcam=createCapture(VIDEO);
    webcam.size(400,300);
    webcam.hide();
    posenet=ml5.poseNet(webcam,modelLoaded);
    posenet.on("pose",getResult);
}
function getResult(pose_array){
    if(pose_array.length>0){
        console.log(pose_array);
        lip_x=pose_array[0].pose.nose.x;
        lip_y=pose_array[0].pose.nose.y;
        console.log(lip_x,lip_y);
    }
}
function modelLoaded(){
    console.log("Model loaded succesfully :)");
}
function draw(){
    image(webcam,0,0,400,300);
    image(lip,lip_x-17,lip_y+15,30,30);
}
function click_pic(){
    save("-_-.png");
}
function preload(){
    lip=loadImage("lip.png");
 
}

