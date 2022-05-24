img = "";
Status = "";

function preload()
{
    img = loadImage("tv image.jpg");
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
    text("Paintings", 505, 75);
    noFill();
    stroke("#FF0000");
    rect(500, 60, 130, 200)

    fill("#FF0000");
    text("Tv", 125, 75);
    noFill();
    stroke("#FF0000");
    rect(120, 60, 360, 200)

}