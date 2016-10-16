$(document).ready(function(){
  console.log("hello")


  // html element references
  var beginButton = $("#start");
  var round = $('#round')
  var question = $("#question")
  var answers = $(".answers")
  var next = $("#next");
  var container= $("#gameContainer");
  var categories = $(".quesType");


  var roundNumb = 1;
  var counter = 0;
  var msg;
  var option;
  var score = 0;
  var category;

  // set of content for entertainment category
  var entertainment ={
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

     var geography = {
     question:[" Is Donald Duck an only child? ", "perro", "gato"],
     answer:[["Chocolate","Cocoa","Dark  & Vanilla"],
     [ "Wireless-filter ", "Wire-film", "Wireless-fidelity"]],
     content: function(i){
       console.log(this)
       return this.question[i]
     },
     options: function(o){
       return this.answer[o]
     },
     correct: function (){
       score += 100
       $("#score").html("Score" + " " + score)
       return console.log("right");
     },
     incorrect: function(){
       score += 0
       return console.log("wrong");
     },
    }

    var stem = {
    question:[" Is Donald Duck an only child? ", "perro", "gato"],
    answer:[["Chocolate","Cocoa","Dark  & Vanilla"],
    [ "Wireless-filter ", "Wire-film", "Wireless-fidelity"]],
    content: function(i){
      console.log(this)
      return this.question[i]
    },
    options: function(o){
      return this.answer[o]
    },
    correct: function (){
      score += 100
      $("#score").html("Score" + " " + score)
      return console.log("right");
    },
    incorrect: function(){
      score += 0
      return console.log("wrong");
    },
   }

     // sets questions and answers on screen

     function addmsg(){

       if($(this).is("#enews")){
        console.log($(this))
        category = entertainment
        msg = category.content(counter);
       }

       else if($(this).is("#geo")){
       console.log($(this))
       category= geography
       msg = category.content(counter);
       }
       else{
         category= stem
         msg = category.content(counter);
       }
       question.text(msg);

       for (i=0;i<=3; i++){
         var option = category.options(counter)[i];
           answers.each(function(){
           $(answers[i]).html(option)
             })
           }

     }


      // checks correctness of the answers

        function validity(){
           if($(this).is("#correct")){
            category.correct();
          }else{
            category.incorrect();
          }
        }

        categories.on("click", addmsg)



        answers.on("click", validity);
        next.on("click" ,function(){
            roundNumb += 1
            counter += 1;
            arrayValue();
          });




});



// function arrayValue(){
//   round.text("Round: " + roundNumb)
//  msg =  gameQuestRound1.content(counter);
// // console.log(msg)
// question.text(msg);
//
// for (i=0;i<=3; i++){
//   var option = gameQuestRound1.options(counter)[i];
//     answers.each(function(){
//     $(answers[i]).html(option)
//       })
//     }
//   };

// beginButton.on("click", function(){
//     container.css("display", 'block')
//     arrayValue()});
