var face_x =[]
var face_y =[]
var facce_size =[]
var face_num = 2 
var song
var songIsplay=false

function preload(){
  song = loadSound("No Mercy - TrackTribe.mp3");
}


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("#bde0fe");
  textSize(40)
  text("X:"+mouseX+" Y:"+mouseY,50,50)
  push()
  translate(width/2,height/2)
  fill("#ffc8dd")
  ellipse(0,0,400,350)
  ellipse(100,-280,100,250) //左耳朵
  ellipse(-100,-280,100,250) //右耳朵

  fill("#ffafcc")
  ellipse(100,-250,40,130) //左耳窩
  ellipse(-100,-250,40,130)//右耳窩

  ellipse(0,0,50,30) //鼻子橢圓

  fill("#ff99c8")
 ellipse(120,0,60,60) //腮紅
  ellipse(-120,0,60,60) 

 fill(0)
ellipse(-75+map(mouseX,0,width,-20,20),-90+map(mouseY,0,height,-20,20),40)//眼睛
  ellipse(+75+map(mouseX,0,width,-20,20),-90+map(mouseY,0,height,-20,20),40)
  if(mouseIsPressed)
{
  fill(255)
  arc(0,75,200,150,0,PI)
}
else
{
  fill(255,0,0)
  arc(0,75,200,75,0,PI)
}
fill(255)
arc(0,74,200,50,0,PI)
pop()
}
function mousePressed()
{
  if(!songIsplay){
    song.play()
    songIsplay = true
    amp=new p5.Amplitude()

  }
  else{
    song.pause()
    songIsplay = false

  }
  
}
