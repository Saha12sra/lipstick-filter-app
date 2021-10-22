function preload(){

}

function setup(){

canvas= createCanvas(390, 310);
canvas.center();
video=createCapture(VIDEO);
video.size=(390, 310);
video.hide();
poseNet=ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);

}

function modelLoaded(){
console.log('poseNet is intialized.')
}

function gotPoses(){
    if(length.results>0){
        console.log(results);
        console.log("mouth x = "+results[0].pose.nose.x);
        console.log("mouth y = "+results[0].pose.nose.y);
    }
}

function draw(){

image(video, 0, 0, 390, 310);
}

function takeSnapshot(){

    save('Lipstick_filter_pic.jpeg');
    
}