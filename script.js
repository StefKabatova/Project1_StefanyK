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
  var popUp = $("#answerMsg");
  var cont_button = $("#continueE");


  var roundNumb = 1;
  var counter = 0;
  var msg;
  var option;
  var score = 0;
  var category;
  var continueButton;

  // set of content for entertainment category
  var entertainment ={
        question:["The sounds made by the Brachiosaurs in Jurassic Park were a combination of ",
         " What type of candy does Elliott use to persuade E.T to come into his room? ",
         "What is the name of Jon Snow’s Direwolf ?"],
        answer:[["Truck and a horse",
         "Giraffe and a hippo",
         "Whales and Donkies"], [ "Skittles ", "M&M'S", "Reese's Pieces"],
          ["Grey Wind", "Graham", "Ghost"]],
       correct: function (){
         score += 100
         $("#score").html("Score" + " " + score)
         $("#right").text("You Are Correct!!")
         return console.log("right");
       },
       incorrect: function(){
         score += 0
         $("#wrong").text("WRONG!!!")
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
     question:[ "What language do the locals speak in Bogota, Colombia?",
     "What is the Capital of Qatar",
     "What is the lasrgest country in the World"],
     answer:[["French","<p id='correct'>Spanish</p>","Arabic"],
     ["Stockholm", "Cairo", "Doha"],
     ["China", "India", "Russia"]],

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
       $("#right").text("You Are Correct!!")
       return console.log("right");
     },
     incorrect: function(){
       score += 0
       return console.log("wrong");
     },
    }

    var stem = {
    question:[" What does wi-fi stand for?", "The Earth is how many miles away from the sun?", "A shrimp's heart is located in which part of its body?"],
    answer:[[ "Wireless-filter ", "Wire-film", "Wireless-fidelity"],
    ["256 mil. miles away ","92.96 mil. miles", "86.54 mil miles", "82.46 mil. miles"],
    ["head", "stomach","tail"]],
    content: function(i){
      console.log(this)
      return this.question[i]
    },
    options: function(o){
      return this.answer[o]
    },
    correct: function (){
      score += 100
      $("#score").html("Score"+ score)
      return console.log("right");
    },
    incorrect: function(){
      score += 0
      return console.log("wrong");
    },
   }

     // sets questions and answers on screen

     function addmsg(category){
       category = category
       msg = category.content(counter)

      //  adds question and answers based on what id was provided
       question.text(msg);

       for (i=0;i<=3; i++){
         var option = category.options(counter)[i];
           answers.each(function(){
           $(answers[i]).html(option)
            })
          };
        }


      // checks correctness of the answers
        function validity(){
           if($(this).is("#correct")){
             if(counter>=2){
               cont_button.hide();
             }
            category.correct();
            popUp.show()

          }else{

            if(counter>=2){
              cont_button.hide();
            }
            category.incorrect();
            popUp.show()
          }
        }

        cont_button.on("click" ,function(){
          roundNumb += 1
          counter += 1;
          popUp.hide(800)
          addmsg(category);
          });

        popUp.hide()

        categories.hide()

        categories.on("click", function(){

          if($(this).is("#enews")){
           console.log($(this))
           category = entertainment;
           addmsg(category);
          }
          else if($(this).is("#geo")){
          console.log($(this))
          category= geography;
          addmsg(category);
         }
         else{
           category= stem
           addmsg(category);
         }

        });


        answers.hover(function(){
          $(this).fadeTo('fast',1)},
          function(){
          $(this).fadeTo('fast',0.4)
        });

        answers.on("click", validity);



          beginButton.on("click", function(){
            categories.show(1000)
          })

});
//
// function addmsg(){
//
//  //  checks for id of button that was clicked
//   if($(this).is("#enews")){
//    console.log($(this))
//    category = entertainment
//    continueButton = "first";
//    msg = category.content(counter);
//   }
//
//   else if($(this).is("#geo")){
//   console.log($(this))
//   category= geography
//
//   msg = category.content(counter);
//   }
//   else{
//     category= stem
//     msg = category.content(counter);
//   }
//
//  //  adds question and answers based on what id was provided
//   question.text(msg);
//
//   for (i=0;i<=3; i++){
//     var option = category.options(counter)[i];
//       answers.each(function(){
//       $(answers[i]).html(option)
//        })
//      };
//    }
