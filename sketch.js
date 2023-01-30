let col = ['#ffffff', '#FF47f6'];

let num = 15;
let margin = 0;
let sz;

let sclVal, angle;

function setup(){
  createCanvas(800, 800);
  sz = (width - margin*2) / num;
  angle = 0;
}

function draw(){
  background(col[1]);

  let gap = 10;
  translate(-sz *gap, 0);
  
  for(let i=0; i<num+gap; i++){
    let x = margin + i * sz;
    for(let j=0; j<=num; j++){
      let y = margin + j * sz;

      sclVal = (mouseX /5) / 1.5 ; //+ noise(j)*20
      
      x += (sin(angle) * sclVal) ;    

      if(j % 2 === 0){
        if(i % 2 === 0){
          fill(col[0]);
        } else if(i % 2 === 1){
          fill(col[1]);
        }
      } else {
        if(i % 2 === 0){
          fill(col[1]);
        } else if(i % 2 === 1){
          fill(col[0]);
        }
      }

      // noStroke();
      stroke(col[1]);
      rect(x, y, sz);
      //circle(x,y,sz);

      angle += PI/8; //5
      
    } 
  }
}