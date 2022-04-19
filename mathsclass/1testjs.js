function    Q1() {
    var number1 = document.getElementById( Math.floor(Math.random()*10)+1);
    var number2 = document.getElementById(Math.floor(Math.random()*10)+1);
   answer = number1 + number2 
   document.getElementById(number1).innerHTML = number1;
   document.getElementById(number2).innerHTML = number2;
   answer.innerHTML = answer;
} 

function Generate() {
    var min = 1,
        max = 5,
        NumberResult = Math.random() * (max - min) + min;

    $('#text1').val(parseFloat(NumberResult).toFixed( 2 ));
};

$( document ).ready(function() {
DecimalGenerate();
});




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