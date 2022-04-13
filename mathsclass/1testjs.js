function    Q1() {
    var number1 = document.getElementById( Math.floor(Math.random()*10)+1);
    var number2 = document.getElementById(Math.floor(Math.random()*10)+1);
   answer = number1 + number2 
   document.getElementById(number1).innerHTML = number1;
   document.getElementById(number2).innerHTML = number2;
   answer.innerHTML = answer;



}

function t03() {
    let first = parseInt(document.getElementById("first").value);
    let second = parseInt(document.getElementById("second").value);
    let third = parseInt(document.getElementById("third").value);
    let average = ((first + second + third)/3)

document.getElementById("average").innerHTML = average;

}




function result() {
  var score = 0;
  if (document.getElementById('correct1').checked) {
      score++;
  }
  if (document.getElementById('correct2').checked) {
      score++;
  }
  if (document.getElementById('correct3').checked) {
      score++;
  }
  document.getElementById("yes2").innerHTML="your score is "+score;
 document.getElementById("byl").style.display="inline"
}