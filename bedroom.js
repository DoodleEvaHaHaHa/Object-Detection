img = "";
Status = "";

function preload()
{
    img = loadImage("bedroom image.jpg");
}
function setup()
{
    canvas = createCanvas(640, 360);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}
function modelLoaded()
{
    console.log("Model Loaded!");
    Status = true;
    objectDetector.detect(img, gotResult);
}
function gotResult(error, result)
{
    if (error)
    {
        console.log(error);
    }
    console.log(result);
}
function draw()
{
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("Bed", 150, 75);
    noFill();
    stroke("#FF0000");
    rect(135, 60, 420, 310)
}