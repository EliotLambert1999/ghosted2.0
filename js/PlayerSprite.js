class PlayerSprite {
    constructor(x, y,size) {
      this.x = x;
      this.y = y;
      this.size = size;
    }
  
    move(){
      
      if(keyIsDown(RIGHT_ARROW)){
        this.x  = this.x + 5;
      }
      if(keyIsDown(UP_ARROW)){
        this.y  = this.y - 5;
      }
      
      if(keyIsDown(LEFT_ARROW)){
        this.x  = this.x - 5;
      }
      if(keyIsDown(DOWN_ARROW)){
        this.y  = this.y + 5;
      }
      
    }
    
    display() {
      
      push();
      image(playerImage, this.x, this.y, 100,100);
      pop();
    }
  }
  