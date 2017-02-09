$(document).ready(function(){
  console.log("hello")

  // I love that you organized your variable declarations by type! Fantastic style and organiztion

  // html element references
  var beginButton = $("#start");
  var round = $('#round')
  var question = $("#question")
  var answers = $(".answers")
  var next = $("#next");
  // not sure you need this variable below since you don't use it later :)
  var container= $("#gameContainer");
  var categories = $(".quesType");
  var popUp = $("#answerMsg");
  var cont_button = $("#continueE");


  //James's Note: make stem, geography, entertainment
  // var gameObjects = [stem, geography, entertainment] ???
  var round = 0;
  var counter = 0;
  var msg;
  var option;
  var score = 0;
  var category;
  var continueButton;

  // one option for a constructor function for your game objects might be as follows:
  // This is a slight shift from your category-based approach, and simplifies its data structure a little bit since you wouldn't have as big of an object--instead of an array of question each with a corresponding array of answers. Additionally, having a correct answer property saves you from writing the same kind of conditional over and over. Questions could be grouped by their category property
  function TriviaCard (question, choices, correctAnswer, category){
    this.question = question;
    //choices would be an array
    this.choices = choices;
    this.correctAnswer = correctAnswer;
    this.category = category;
    // you could also incorporate some of the functions that you have below as well, or moves those out into a Game constructor function that sets the initial game state (score to zero, selects DOM elements, etc) and handles events like increasing score, getting the next question, getting new questions, and resetting the game.
  }
  // set of content for entertainment category

  // I like that your approach is getting close to an object oriented pattern here, all you need is a constructor function instead of an object literal
  var entertainment ={
    question:["The sounds made by the Brachiosaurs in Jurassic Park were a combination of ",
    " What type of candy does Elliott use to persuade E.T to come into his room? ",
    "What is the name of Jon Snow’s Direwolf ?"],
    answer:[
      // A stylistic note: I might avoid using <p> tags here both for seperating concerns but also consistency's sake
      ["Truck and a horse", "Giraffe and a hippo", "<p id='correct'>Whales and Donkies</p>"],
      [ "Skittles ", "M&M'S", "<p id='correct'>Reese's Pieces</p>"],
      ["Grey Wind", "Graham", "<p id='correct'>Ghost</p>"]
    ],
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

      return this.question[i]

    },
    options:function(o){
      return this.answer[o]
    }
  }

  var geography = {
    question:[ "What language do the locals speak in Bogota, Colombia?",
    "What is the Capital of Qatar",
    "What is the largest country in the World"],

    answer:[["French","<p id='correct'>Spanish</p>","Arabic"],
    ["Stockholm", "Cairo","<p id='correct'>Doha</p>"],
    ["China", "India", "<p id='correct'>Russia</p>"]],

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
    question:[" What does wi-fi stand for?", "The Earth is how many miles away from the sun?", "A shrimp's heart is located in which part of its body?"],
    answer:[[ "Wireless-filter ", "Wire-film", "<p id='correct'>Wireless-fidelity</p>"],
    ["<p id='correct'>92.96 miles</p>", "86.54 mil miles", "82.46 mil. miles"],
    ["<p id='correct'>head</p>", "stomach","tail"]],
    content: function(i){
      console.log(this)
      return this.question[i]
    },
    options: function(o){
      return this.answer[o]
    },
    correct: function (){
      score += 100
      $("#score").html("Score:" + " " + score)

      return console.log("right");
    },
    incorrect: function(){
      score += 0

      return console.log("wrong");
    },
  }

  // Initiates game and shows categories
  beginButton.on("click", function(){
    categories.show(1000)

  })

  // sets questions and answers on screen based on category

  function addmsg(category){
    round += 1
    category = category
    msg = category.content(counter)

    question.text(msg);

    // 3 here is sort of a magic number--it's a fixed number that would not display all the questions, if you added questions. I'd go with putting all your categories in an array, and then using the length of that array here for the upper bound of the for-loop
    for (i=0;i<3; i++){
      var option = category.options(counter)[i];
      answers.each(function(){
        $(answers[i]).html(option)
      })



    };
  }


  // checks response for correctness
  function validity(){
    cont_button.text("continue");

    if($(this).children().first().is("#correct")){

      if(counter>=2){

        cont_button.text("Try another category");
        cont_button.css("font-weight", "bold")

      }
      category.correct();
      $("#right").text("You Are Correct!!")
      popUp.show()

    }else{

      if(counter>=2){
        cont_button.text("Try another category");
        // You might use toggleClass here
        cont_button.css("font-weight", "bold");

      }
      category.incorrect();
      $("#right").text("WRONG!!!")
      popUp.show()
    }

  }




  // identifies which category was selected
  categories.on("click", function(){

    if (round >3){
      round = 0;
      counter = 0  ;
      console.log(round)
    }


    if($(this).is("#enews")){
      console.log($(this))
      category = entertainment;
      addmsg(category);
    }
    else if($(this).is("#geo")){
      console.log($(this))
      category = geography;
      addmsg(category);
    }
    else{
      category = stem
      addmsg(category);
    }
  });

  // continue button to display following button.
  cont_button.on("click" ,function(){
    if(round<3){
      counter += 1;
    }
    popUp.hide(800)
    console.log(category);
    addmsg(category);

  });



  // begins with a hidden continue button
  popUp.hide()

  // hides categories to be displayed after start button
  categories.hide()

  // changes opacity based on users engagement with the element
  // this is a nice touch
  answers.hover(function(){
    $(this).fadeTo('fast',1)},
    function(){
      $(this).fadeTo('fast',0.4)
    });

    answers.on("click", validity);





  });
