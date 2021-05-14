              //Include readLineSync and chalk library
              var readLineSync = require("readline-sync");
              const chalk = require('chalk');

              //welcome user
              console.log(chalk.white.bgRed.bold("Hi Welcome to IPL Quiz"));

              //Get User name
              var userName = readLineSync.question("Please enter your name!! ", {
  hideEchoBack: true,
  mask: chalk.magenta('\u2665')
              });

              //Explain game rules
              console.log("\nHi " + chalk.green(userName) + " Let the IPl fun begin\n")
              console.log(chalk.magenta("Rules of Game:\nFor every right answer you will be created with 3 points,and 2 points will be deducted for wrong answer \n"));
              console.log("----------------")
              var score=0;

              //Quiz Questions

              //Question 1;
              var questionOne ={
                question: "Which player holds the record for the fastest fifty in IPL?  \n a) KL Rahul \n b) Virat Kohli \n c) Rohit Sharma \n d) ABD \n",
                answer: "a",
              }

          //Question 2;
              var questionTwo ={
                question: "Who was the captain of the Mumbai Indians in IPL 2012?  \n a) Rohit Sharma \n b) Sachin Tendulkar \n c) Harbhajan Singh \n d) Pollard \n",
                answer: "c",
              }

              //Question 3;
              var questionThree ={
                question: "Who was the first cricketer to be sold at the IPL 2021 auction? \n a) Aaron Finch \n b) Chris Morris \n c) Steve Smith \n d) Maxwell \n",
                answer: "c",
              }

              //Question 4
              var questionFour ={
                question: "Which Indian player has scored the fastest hundred in the IPL?  \n a) KL Rahul \n b) Yousuf Pathan \n c) Rishab Pant \n d) Virat Kohli \n",
                answer: "b",
              }

              //Question 5
              var questionFive ={
                question: "Who has the highest all-time batting average (having featured in a minimum of 10 matches)?  \n a) KL Rahul \n b) Pollard \n c) David Warner \n d) Russell \n",
                answer: "a",
              }

              //Question 6
              var questionSix ={
                question: "Which player has won the most number of IPL orange caps, which are awarded to the season’s highest run-scorer?  \n a) David Warner \n b) Rohit Sharma \n c) ABD \n d) KL Rahul \n",
                answer: "a",
              }

              //question 7
              var questionSeven ={
                question: "Which batsman has scored the most number of hundreds in the IPL?  \n a) ABD \n b) Aaron Finch \n c) David Warner \n d) Chris Gayle \n",
                answer: "d",
              }

              //Storing objects in an ARRAY
              var IPL = [questionOne,questionTwo,questionThree,questionFour,questionFive,questionSix,questionSeven];


        //Function Call
        for(var i=0;i<IPL.length;i++){
            iplKnowledge(i+1,IPL[i].question,IPL[i].answer);
          }

          //MAIN FUNCTION
          function iplKnowledge(queNo,question,answer){
            //keyIn is used to get input from user with certain limit
            var userAnswer = readLineSync.keyIn(queNo + " " + question,{limit: '$<a-d>'});
            if(userAnswer === answer){
              console.log(chalk.green("Hey you are right"));
              score=score+3;
              console.log(chalk.cyan.bold("Your current score is: "+ score + '\n'));
            }else{
              score=score-2;
              console.log(chalk.redBright("Oops you selected wrong option!!"));
              console.log(chalk.yellowBright("Correct Option is " + answer));
              console.log(chalk.yellowBright("Your Current Score is: " + score + '\n'));
            }
          }

            //Data of users
          var highScore1 = {
            name: "Rahul",
            score: 21,
          }
          var highScore2 = {
            name: "Tanay",
            score: 16,
          }

        //Array created for users
      var highestScore = [highScore1,highScore2]

      //splice is used to insert key-value at certain location
      var spliceNumber=0;
        if(score>=highestScore[0].score){
          spliceNumber=0;
        }
        else if(score>=highestScore[1].score)
          {
          spliceNumber=1;
        }
        else{
          spliceNumber=2;
        }

        //splice(index,index of any element to remove,value)
        highestScore.splice(spliceNumber,0,{name: userName,
                                            score: score,
                                            });


        console.log(chalk.magenta("------Leader Board---------"));

      for(var i=0;i<highestScore.length;i++){
        console.log(highestScore[i].name,highestScore[i].score);
      }

  if(score>=highScore1.score && score>=highScore2.score){
    console.log(chalk.green.bold("\nCongratulations you have created new Record :)"));
  }else{
    console.log(chalk.bgRed("\nOops you didn't beat higgest score :("));
  }

  console.log("Your Final Score is: " + score);