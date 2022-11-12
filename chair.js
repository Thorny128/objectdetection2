var status="";

function preload(){
    img=loadImage('Chair.webp');
}

function setup(){
    canvas=createCanvas(640, 480);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status:Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded");
    status="true";
    objectDetector.detect(video, gotResult);
}

function gotResults(){
    if(error){
        console.log(error);
    }
    console.log(results);
    objects=results;
}