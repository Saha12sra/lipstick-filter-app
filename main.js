noseX = 0;
noseY = 0;
function preload() {

    lipstick = loadImage("https://i.postimg.cc/T1fZ46d5/lips4.png");
}

function setup() {

    canvas = createCanvas(380, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size = (380, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}

function modelLoaded() {
    console.log('poseNet is intialized.')
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX= results[0].pose.nose.x-150;
        noseY=results[0].pose.nose.y-75;
        console.log("nose x = "+noseX);
        console.log("nose y = "+noseY);
    }
}

function draw() {

    image(video, 0, 0, 380, 300);
    image(lipstick, noseX, noseY, 40, 30);
}

function takeSnapshot() {

    save('Lipstick_filter_pic.jpeg');

}