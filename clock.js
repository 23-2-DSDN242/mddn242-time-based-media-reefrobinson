/*
 * use p5.js to draw a clock on a 960x500 canvas
 */
function draw_clock(obj) {
  // draw your own clock here based on the values of obj:
  //    obj.hours goes from 0-23
  //    obj.minutes goes from 0-59
  //    obj.seconds goes from 0-59
  //    obj.millis goes from 0-999
  //    obj.seconds_until_alarm is:
  //        < 0 if no alarm is set
  //        = 0 if the alarm is currently going off
  //        > 0 --> the number of seconds until alarm should go off
  background(50); //  beige

let millis = obj.millis;
let seconds = obj.seconds;
let minutes = obj.minutes;
let hours = obj.hours;

drawDynamiteStick(100, 100);

let sMap = map(minutes,0,59,100,400);

  fill(200); // dark grey
  textSize(40);
  textAlign(CENTER, CENTER);
  text(obj.seconds, width / 2, 200);

  let sMap = map(minutes,0,59,100,59);

  fill(250, 0, 0);// red
  ellipse(width / 3, 350, 150);
  fill(139, 0, 0) // maroon
  ellipse(width / 2, 350, 150);

let sMap = map(seconds,0,59,100,400);

  fill(128, 0, 32); // purple
  ellipse(width / 3 * 2, sMap, 150);


}

fuction drawDynamiteStick(x, y) {

}