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
let balls = [];
let numballs = 5;
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
let textBubbleRedArray = [];

//PRELOADING IMAGES AND FONTS/////////////////////////

function preload() {
  img1 = loadImage("assets/images/screenfaces3.png");
  img2 = loadImage("assets/images/phones.png");
  img3 = loadImage("assets/images/ghostedphone.png");
  img4 = loadImage("assets/images/ghost.gif");
  img5=loadImage("assets/images/qmark.png");
  playerImage = loadImage("assets/images/femav.png");
  font = loadFont('assets/fonts/font3.ttf')
  song1=loadSound("hingeaudiotrack.mp3")
  song2=loadSound("typing.mp3")
  song3=loadSound("aigenvoice.mp3")
  song4=loadSound("scene4audio.mp3")

  
}


function setup() {
  createCanvas(600,600);

  for (let i = 0; i < textarray2.length; i++) {
    textBubbleRedArray[i] = new TextBubbleRed(random(width), random(height), textarray2[i], i, textarray2);
  }


  for (let i = 0; i < 5; i++) {
    rects[i] = new TextBubble(random(width), random(height), textarray1[i]);
  }

  for (let i = 0; i < 5; i++) {
    rects2[i] = new TextBubbleRed(random(width), random(height), textarray2[i],i);
  }
  //   }

  sprite = new PlayerSprite(300, 530, 40);

  
  song1.play();

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

//SCENES/////////////////

function draw() {
  switch (mode) {
    case 0:
      scene0();
      restartButton.hide();
      break;
    case 1:
      scene1();
      restartButton.hide();
      break;
    case 2:
      scene2();
      restartButton.hide();
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

  if (inputCreated) {
    inputBox.hide();
    submitButton.hide();
    inputCreated = false;

  }

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
  textFont(font);
  text("enter if u dare", 260, 320)
  pop();

  textSize(12)
  textStyle(BOLD)
  fill(0)
  text("press the arrow keys to move around", 40, 580)


  sprite.move();
  sprite.display();

  


  if (sprite.y < height / 2) {
    mode = 1;
   
  }
 
}

//Scene 1////////////////////

function scene1() { //input text scene
  background(0);

  for (let i = 0; i < textarray2.length; i++) {
    rects2[i] = new TextBubbleRed(random(width), random(height), textarray2[i], i, textarray2);
  }

  song1.stop();

  if (!song3Played) {
    song3.play();
    song3Played = true;
  }



  if (!inputCreated) {
    inputBox = createInput();
    inputBox.position(280, 350);
    inputBox.size(200,100,10);
    inputBox.style('background-color', '#ff0000');
    inputBox.style('color', 'white');
    inputBox.style('border', 'none');
    inputBox.style('padding', '8px');
    inputBox.style('font-family', 'font');
    inputBox.style('font-size', '16px');
 
    
    submitButton = createButton('Send');
    submitButton.position(500, 350);
   submitButton.style('background-color',"#215E7C"); // 
    submitButton.style('color', 'white'); 
    submitButton.style('font-family','font'); 
    submitButton.style('cursor', 'pointer'); 
    submitButton.mousePressed(submitText); 
    inputCreated = true;
  }

push();
fill(255);
textSize(15);
textFont(font);
textAlign(LEFT)
let paragraph="It's Sunday afternoon you had a date on Thursday night with someone you met online. Compared to the last three trainwrecks of dates - the menenist, the pyramid scheming hippy, and the sadboy, you thought this person seemed kind of - normal?! After parting ways after a night of flirting , you decide to reach out, because what are your twenties for if not hedonism, love, and commitment issues? "
text(paragraph, 100,50,300,400)
fill("#ff0000")
textSize(16);
text("send a text to see if u will get ghosted and avoid the red text bubbles",30,300)
pop();

function submitText() {
  let inputValue = inputBox.value();

  if (inputValue.trim() !== "") {
    textarray2.push(inputValue); 
  

    let newTextBubbleRed = new TextBubbleRed(random(width), random(height), inputValue, textBubbleRedArray.length - 1, textarray2);
    textBubbleRedArray.push(newTextBubbleRed); // Create a new TextBubbleRed object and add it to textBubbleRedArray
    inputBox.value('');
  }

  mode = 2;
}



  
}

//Scene 2////////

function scene2() { //falling text scene
  background(0, 0, 0, 20);

  if (!song1.isPlaying()) {
    song1.play();
  }

  song2.stop();

  inputBox.hide();
  submitButton.hide();

  for (let i = 0; i < rects.length; i++) {

    rects[i].display("#53d769");
    rects[i].fall();

    rects2[i].display("#ff0000");
    rects2[i].updateText(textarray2);
    rects2[i].fall();
  

      if (sprite.x > rects2[i].x - 40 && sprite.x < rects2[i].x + 100 && sprite.y > rects2[i].y && sprite.y < rects2[i].y + 70) {
        mode = 3;
        break;
      }
    
  }

  sprite.move();
  sprite.display();

  if (sprite.x > 330 && sprite.y > 350) {
    mode = 3;
  }

 


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

