function setup() { 
    createCanvas (750, 750);
     background("purple"); 
  
  }
  sketch.js
  Saved: 3 months ago
  
  function draw() {
    
    stroke("pink");
    fill ("yellow");
    
    if(mouseIsPressed){
      circle(mouseX,mouseY, 25,25);
     }
  }