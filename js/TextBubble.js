class TextBubble {
    constructor(x, y, text) {
 
      this.x = x;
      this.y = y;
      this.text = text
    }
  
    
    display(c) { 
        noStroke();
        fill(c);
        rect(this.x, this.y, 120, 90, 10);
        fill(255);
        textStyle(BOLD);
        textSize(10);
       text(this.text, this.x+10, this.y+10, 80,60); //change text alignment here
    
    }

    fall(){
        this.y+=3;

        if(this.y >= height){
            this.y = 0;
            this.x = random(width);
        
        }

    }

}


