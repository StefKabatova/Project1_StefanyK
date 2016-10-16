$(document).ready(function(){
  console.log("hello")


  // html element references
  var beginButton = $("#start");
  var round = $('#round')
  var question = $("#question")
  var answers = $(".answers")
  var next = $("#next");
  var container= $("#gameContainer")

  var roundNumb = 1;
  var counter = 0;
  var msg;
  var option;
  var score = 0;

  // set of first questions
  var gameQuestRound1 ={
        question:[" What are the two main flavors in Nutella? ",
        " What does wi-fi stand for?", "two"],
        answer:[["Chocolate & Hazelnut",
         "Cocoa and Hazelnut",
         "Dark Chocolate & Vanilla"], [ "Wireless-filter ", "Wire-film", "Wireless-fidelity"]],
       correct: function (){
         score += 100
         $("#score").html("Score" + " " + score)
         return console.log("right");
       },
       incorrect: function(){
         score += 0
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
        round.text("Round: " + roundNumb)
      var msg =  gameQuestRound1.content(counter);
      // console.log(msg)
      question.text(msg);

      for (i=0;i<=3; i++){
        var option = gameQuestRound1.options(counter)[i];
          answers.each(function(){
          $(answers[i]).html(option)
            })
          }
        };


        function validity(){
           if($(this).is("#correct")){
            gameQuestRound1.correct();
          }else{
            gameQuestRound1.incorrect();
          }
        }


        beginButton.on("click", function(){
            container.css("display", 'block')
            arrayValue()});

        answers.on("click", validity);
        next.on("click" ,function(){
            roundNumb += 1
            counter += 1;
            arrayValue();
          });

});
