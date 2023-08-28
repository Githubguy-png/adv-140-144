song = "";
leftWristX = 0;
leftWristY = 0;


rightWristX = 0;
rightWristY = 0;

scoreLeftWrist = 0;
scoreRightWrist = 0;

function preload() 
{
  song = loadSound("music.mp3", "music2.mp3");
}

function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() 
{
    image(video, 0, 0, 600, 500);

    fill("#FF0000");
    stroke("#FF0000");

    if(scoreRightWrist > 0.2){

        circle(rightWristX, rightWristY,20);
    
        if(rightWristY >0 && rightWristY <= 500)
        {
            document.getElementById("music.mp3").innerHTML = "musica = Harry potter";
            song.rate(music.mp3);
        }
    }
    if(scoreLeftWrist > 0.2){
    circle(rightWristX, rightWristY,20);

    if(rightWristY >0 && rightWristY <= 500)
        {
            document.getElementById("music2.mp3").innerHTML = "musica = Petter Pan";
            song.rate(music2.mp3);
        }
    }
}

function play()
{
    song.play();
    song.setMusic("music.mp3");
    song.setMusic("music2.mp3");
    song.rate(1);
}

function modelLoaded()
{
    console.log('PoseNet is Initialized!');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        scoreRightWrist = results[0].pose.keypoints[10].score
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log("scoreLeftWrist = " + scoreLeftWrist + "scoreRightWrist");
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = "+ leftWristX +"leftWristY = "+ leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = "+ rightWristX +"rightWristY = "+ rightWristY);
    }
}