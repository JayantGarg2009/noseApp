var noseX = 0;

var noseY = 0;




function preload()
{
    clown_img = loadImage('clown_nose.png');

}


function setup()
{
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(600,500);
    video.hide();

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose', gotPoses);


}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX : " + noseX);
        console.log("noseY : " + noseY);
    }

}

function modelLoaded()
{
    console.log("posenet is intialized");
}

function draw()
{
    image(video ,0 , 0 , 600 , 500 );
    fill(255,0,0);
    stroke(255,0,0);
    circle(noseX,noseY,200);
    /*image(clown_img,noseX-40,noseY-40,120,120);*/

    
}

function takeSnapshot()
{
    save('jayant.png');
}

