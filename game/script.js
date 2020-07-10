
/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/

// Solution-1 - Without prototyping
// (function (){
//     function Question(question, answers, correctAnswer){
//         this.question = question;
//         this.answers = answers;
//         this.correctAnswer = correctAnswer;
//     }
//     var questionOne = new Question(
//         "Which of the following action is legal ?",
//         ["Killing Birds", "Killing Animals", "Killing Humans"],
//         2
//     );
//     var questionTwo = new Question(
//         "Which of the following is not a color ?",
//         ["Burgandy", "Indigo", "Periwinkle"],
//         2
//     );
//     var questionThree = new Question(
//         "Who is cute from the following ?",
//         ["Boo", "Bandoo", "Gee"],
//         1
//     );
//     questions = [questionOne, questionTwo, questionThree];
    
//     (function questionPicker(questions){
//         questionNumberPicked = Math.floor(Math.random() * 3);
//         questionPicked = questions[questionNumberPicked];
        
//         console.log(questionPicked.question);
//         for (var i=0; i<questionPicked.answers.length; i++){
//             console.log(i + ": " + questionPicked.answers[i]);
//         }
        
//         answerChose = 
//         prompt("Please select the correct answer (Just choose a number !)");
        
//         validateAnswer(questionPicked, answerChose);
//     })(questions);
    
//     function validateAnswer(questionPicked, answerChose){
//         if (answerChose == questionPicked.correctAnswer){
//             console.log("Correct Answer :)");
//         } else {
//             console.log("Wrong Answer :(");
//         }
//     }
// }    
// )();

// Solution-2 - With prototying
(function (){
    function Question(question, answers, correctAnswer){
        this.question = question;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    }
    Question.prototype.displayQuestion = function(){
        console.log(questionPicked.question);
        for (var i=0; i<questionPicked.answers.length; i++){
            console.log(i + ": " + questionPicked.answers[i]);
        }
    }
    Question.prototype.validateAnswer = function(answerChose){
        if (answerChose == this.correctAnswer){
            console.log("Correct Answer :)");
        } else {
            console.log("Wrong Answer :(");
        }
    }
    
    var questionOne = new Question(
        "Which of the following action is legal ?",
        ["Killing Birds", "Killing Animals", "Killing Humans"],
        2
    );
    var questionTwo = new Question(
        "Which of the following is not a color ?",
        ["Burgandy", "Indigo", "Periwinkle"],
        2
    );
    var questionThree = new Question(
        "Who is cute from the following ?",
        ["Boo", "Bandoo", "Gee"],
        1
    );
    questions = [questionOne, questionTwo, questionThree];
    
    questionNumberPicked = Math.floor(Math.random() * 3);
    questionPicked = questions[questionNumberPicked];
    
    questionPicked.displayQuestion();
    
    answerChose = 
        prompt("Please select the correct answer (Just choose a number !)");
    questionPicked.validateAnswer(answerChose);
}
)();
