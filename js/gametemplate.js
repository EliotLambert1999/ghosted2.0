///////////////////////////////////////////////////////////////////////////////////////////////
/*
CC LAB FINAL ===== YOU WILL GET GHOSTED
BY: ELLIOT LAMBERT

*/
//////////////////////////////////////////////////////////////////////////////////////////////


//Global Variables
let mode=0;
let inputBox;
let playButton;
let submitButton;
let restartButton;
let initialText;
let userInput;
let playerImage;
let spaceBarPressed = false;

let img1; //entrance hall
let img2; //phone background 1
let img3; //you've been ghosted
let img4;//phone background 2
let img5;//?mark
let rects = []; // empty array
let rects2 = [];
let font;
let song1;
let song2;
let song3;
let song4;
let song3Played = false;
let song4Played = false;
let textarray1 = [
  "I am not still in love with my ex",
  "I cry when dogs die in movies and I grew up with sisters so I am emotionally available",
  "Let's take the risk of meeting up in real life even if we hate eachother",
  "Can I ask you a question because I am genuinely interested in your life?",
  "I'm ignoring your text because I have a particularly good excuse that is out of my control"

];

let textarray2 = [
  "Seen last month",
  "Sorry my hamster has separation anxiety so I can't text you back tonight",
  "U up?",
  "I never go on dating apps but my screen time is 10 hours per day",
  "I'm looking for a long-term long-distance low-commitment casual girlfriend atm",
  "Don't hate the player, hate the game"

];

let sprite;
let inputCreated = false;
// let textBubbleRedArray = [];

//PRELOADING IMAGES AND FONTS/////////////////////////

function preload() {
  img1 = loadImage("assets/images/screenfaces3.png");
  img2 = loadImage("assets/images/phones.png");
  img3 = loadImage("assets/images/ghostedphone.png");
  img4 = loadImage("assets/images/ghost.gif");
  img5=loadImage("assets/images/qmark.png");
  playerImage = loadImage("assets/images/avatar4.png");
  font = loadFont('assets/fonts/font3.ttf')
  song1=loadSound("sound/hingeaudiotrack.mp3")
  song2=loadSound("sound/typing.mp3")
  song3=loadSound("sound/aigenvoice.mp3")
  song4=loadSound("sound/scene4audio.mp3")
}

function setup() {
  createCanvas(600,600);

  // for (let i = 0; i < textarray2.length; i++) {
  //   textBubbleRedArray[i] = new TextBubbleRed(random(width), random(height), textarray2[i], i, textarray2);
  // }


  //greeen rectangeles
  for (let i = 0; i < textarray1.length; i++) {
    rects[i] = new TextBubble(random(width), random(height), textarray1[i]);
  }
  console.log("this is rect", rects);

  //red rectangles
  for (let i = 0; i < textarray2.length; i++) {
    rects2[i] = new TextBubbleRed(random(width), random(height), textarray2[i]);
  }
  //   }

  console.log("rect2", rects2);
  sprite = new PlayerSprite(250, 480, 60);

  
  

    //RESTART GAME

    //Buttondesign for last scene
    restartButton = createButton('RESTART');
    restartButton.style('background-color',"#ff0000"); // 
    restartButton.style('color', 'white'); 
    restartButton.style('font-family','font'); 
    restartButton.style('font-size', '16px'); 
    restartButton.style('cursor', 'pointer'); 
  
    restartButton.position(470, 570);
    restartButton.mousePressed(restartGame);
  
}

function restartGame() {
  mode = 0;
  setup();
  scene0();
  inputCreated=false;
  restartButton.hide(); // Hide the restart button explicitly for scenes 0, 1, and 2

}

function keyPressed() {
  if (keyCode === 32) { // 32 is the key code for spacebar
    spaceBarPressed = true;
  }
}

//SCENES/////////////////

function draw() {
  restartButton.hide();
  switch (mode) {
    case 0:
      scene0();
      
      break;
    case 1:
      scene1();
      
      break;
    case 2:
      scene2();
      
      break;
    case 3:
      scene3();
      restartButton.show();
      break;
  }
  
}

///Scene 0//////

function scene0() { //entrance hall
  background(255, 0, 0);

  if (spaceBarPressed) {
    song1.play();
    spaceBarPressed = false; // Reset the flag after playing the song
  }


  // if (inputCreated) {
  //   inputBox.hide();
  //   submitButton.hide();
  //   inputCreated = false;

  // }

  image(img1, 0, 0, height, height)

  image(img5,500,-15, 100,100)

  push()
  textStyle(BOLD)
  textSize(40)
  stroke(0)
  fill(255, 191, 0, 1)
  textFont(font);
  text("will u get ghosted??", 150, 45);
  pop();

  rect(180, 240, 260, 150, 10)

  push()
  textSize(15)
  textStyle(BOLD)
  fill(255)
  // textFont(font);
  text("enter if u dare", 260, 320)
  pop();

  textSize(10)
  textStyle(BOLD)
  fill(0)
  text("press the arrow keys to move around", 390, 580)
  text("press the spacebar for sound", 40, 580)

  sprite.move();
  sprite.display();

  if (sprite.y < height / 2) {
    mode = 1;
  
   
  }
 
}

//Scene 1////////////////////

function scene1() { //input text scene
  background(0);
  
  song1.stop();

  if (!song3Played) {
    song3.play();
    song3Played = true;
  }



  if (!inputCreated) {
    inputBox = createInput();
    inputBox.position(100, 380);
    inputBox.size(300,50);
    inputBox.style('background-color', 255);
    inputBox.style('color', 'black');
    inputBox.style('border', 'none');
    inputBox.style('padding', '8px');
    inputBox.style('font-style', 'bold');
    inputBox.style('border-radius', '25px');
    inputBox.style('font-size', '16px');
 
    
    submitButton = createImg('assets/images/arrow.png', 'Submit');
    submitButton.position(370, 395);
    submitButton.size(40, 40);
   submitButton.style('background-color',"#215E7C"); // 
    submitButton.style('color', 'white'); 
    submitButton.style('font-family','font'); 
    submitButton.style('border-radius', '25px');
    submitButton.style('cursor', 'pointer'); 
    submitButton.mousePressed(submitText); //txt box submit text
    inputCreated = true;
  }

push();
fill(255);
textSize(15);
//use a google font
// textFont(font);
textAlign(LEFT)
let paragraph="It's Sunday afternoon. You had a date on Thursday night with someone you met online. Compared to the last three trainwrecks of dates - the menenist, the pyramid scheming hippy, and the sadboy, you thought this person seemed kind of - normal?! After parting ways after a night of flirting , you decide to reach out, because what are your twenties for if not hedonism, love, and commitment issues? "
text(paragraph, 100,50,300,400)
fill("#ff0000")
textSize(16);
text("send a text to see if u will get ghosted",100,300)
text("avoid the red text bubbles in the next scene!",100,320)
pop();

  
}

function submitText() {
  let inputValue = inputBox.value();

  // if (inputValue.trim() !== "") {
    textarray2.push(inputValue); 
    let temp = new TextBubbleRed(random(width), random(height), textarray2[6]);
    rects2.push(temp);
    // console.log("making it bigger", rects2.length);
    // console.log("submit text function", textarray2); // this working
    // console.log("added", rects2);
  mode = 2;
}

//Scene 2////////

function scene2() { //falling text scene
  background(0, 0, 0, 20);
  // console.log(textarray2);
  if (!song1.isPlaying()) {
    song1.play();
  }

  song3.stop();

  inputBox.hide();
  submitButton.hide();

  for (let i = 0; i < rects.length; i++) {

    rects[i].display("#53d769");//green
    rects[i].fall();
  }
  for (let i = 0; i < rects2.length; i++) {

    rects2[i].display("#ff0000");//red
    rects2[i].updateText();
    rects2[i].fall();
  
        //making start over
      if (sprite.x > rects2[i].x - 40 && sprite.x < rects2[i].x + 100 && sprite.y > rects2[i].y && sprite.y < rects2[i].y + 70) {
        mode = 3;
        break;
      }
  }

    
  // }

  sprite.move();
  sprite.display();

}


//Scene 3//////////////////////////////////////////

function scene3() { //you've been ghosted
  background(0);

  if (!song4Played) {
    song4.play();
    song4Played = true;
    song1.stop();
    song3.stop();
  }

  for (let i = 0; i < 20; i++) {
    let x = random(width);
    let y = random(height);
    image(img4, x, y, 50, 50); // Adjust the width and height
  }


  push();
  textStyle(BOLD)
  textSize(30)
  textFont(font);
  stroke(255)
  fill(255, 0, 0)
  text("u have been ghosted!", 170, 300);
  pop();

{


}

}
