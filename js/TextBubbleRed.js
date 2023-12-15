class TextBubbleRed {
  constructor(x, y, text, textarray2) {
    this.x = x;
    this.y = y;
    this.text = text;
    // this.index = index;
    this.textarray2 = textarray2;
      this.speed = 1;
    }

    updateText() {
      this.textarray2 = this.text;
      // console.log("class", this.textarray2);
    }

fall(){
        this.y+=this.speed;
        this.speed += 0.01;
        //to change speed of falling text
        if(this.y >= height){
            this.y = 0;
            this.x = random(width);
        
        
    }
}
    
    display(c) { 
      push();
        noStroke();
        fill(c);
        rect(this.x, this.y, 120, 90, 10);
        fill(255);
        textStyle(BOLD);
  
        textSize(10);
        text(this.text, this.x+10, this.y+10, 80,60); //change text alignment here
        pop();

  }

}