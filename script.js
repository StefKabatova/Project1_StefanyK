$(document).ready(function(){
  console.log("hello")


  // html element references
  var beginButton = $("#start");
  var round = $('#round')
  var question = $("#question")
  var answers = $(".answers")
  var next = $("#next");


  var roundNumb = 0;
  var counter = 0;
  var msg;
  var option;
  var score = 0;

  // set of first questions
  var gameQuestRound1 ={
        question:[" What are the two main flavors in Nutella? ",
        " one", "two"],
        answer:[["Chocolate & Hazelnut",
         "Cocoa and Hazelnut",
         "Dark Chocolate & Vanilla"], [ "poop ", "poop", "poop"]],
       correct: function (){
         score += 100
         console.log(score)
         return console.log("right");
       },
       incorrect: function(){
         return console.log("wrong");
       },
       content: function(i){
         console.log(this)
         return this.question[i]

       },
       options:function(o){
         return this.answer[o]
       }
     }



     // sets questions and answers on screen
      function arrayValue(){
      var msg =  gameQuestRound1.content(counter);
      // console.log(msg)
      question.text(msg)
      
      for (i=0;i<=3; i++){
        var option = gameQuestRound1.options(counter)[i];
          answers.each(function(){
          $(answers[i]).text(option)
            })
          }
        };



});
