// Function constructor
/*
function Person(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}
Person.prototype.calculateAge = function (){
    console.log(2020-this.yearOfBirth);
};
Person.prototype.lastName = "Smith";

var john = new Person('John', 1990, "teacher");
var jane = new Person('Jane', 1980, "designer");
var mark = new Person('Mark', 1970, "retired");

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john);
console.log(jane);
console.log(mark);

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);
*/

// Object.create (alternative to function constructor)
// var personProto = {
//     calculateAge: function(){
//         console.log(2020-this.yearOfBirth);
//     }
// };
// var john = Object.create(personProto, {
//     name: {value: "John"},
//     yearOfBirth: {value: 1990},
//     job: {value: "teacher"}
// });
// // or
// var jane = Object.create(personProto);
// jane.name = "Jane";
// jane.yearOfBirth = 1992;
// jane.job = "designer";


// Inheritance

// function Person(name, yearOfBirth, job){
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// }
// Person.prototype.calculateAge = function (){
//     console.log(2020-this.yearOfBirth);
// };
// Person.prototype.lastName = "Smith";

// function Athlete(yearOfOlympics, Person){
//     this.yearOfOlympics = yearOfOlympics;
// }
// Athlete.prototype.goldMedals = "GOLD";
// Athlete.prototype.silverMedals = "SILVER";
// Athlete.prototype.bronzeMedals = "BRONZE";
// Athlete.prototype.Person = Person.prototype;

// var john = new Person("Atlee", 1990, "runner");
// var atlee = new Athlete(2020);
// console.log(atlee.Person.lastName);

// var a = 27, b = {
//     age: "27",
//     city: "Libson"
// }
// function change(a,b){
//     a = 40;
//     b.city = "san fransisco";
//     console.log(a);
// }
// change(a, b);
// console.log(a, b.city)

// Functions passing functions as args
// years = [1990, 1945, 1988, 2002, 1940, 2020];
// function arrayCalc(arr, fn){
//     res = [];
//     for (var i=0; i<arr.length; i++){
//         res.push(fn(arr[i]));
//     }
//     return res;
// }
// function calculateAge(year){
//     return 2020 - year;
// }
// function isFullAge(age){
//     return age>=18;
// }
// function maxHeartRate(age){
//     if (age>=18 && age<=81){
//         return (206.9 - (0.67 * age));
//     }
//     else{
//         return -1;
//     }
// }
// ages = arrayCalc(years, calculateAge);
// console.log(ages);
// isFullAge = arrayCalc(ages, isFullAge);
// console.log(isFullAge);
// rates = arrayCalc(ages, maxHeartRate);
// console.log(rates);

// // Function returning function
// function interviewQuestion(job){
//     if (job == 'teacher'){
//         return function(name){
//             console.log("Which subject do you teach "+name+" ?");
//         }
//     } else if (job == "designer"){
//         return function(name){
//             console.log(name + " can you explain ux design ?");
//         }
//     } else {
//         return function(name){
//             console.log("What do you do " + name + "?");
//         }
//     }
// }
// var teacherQuestion = interviewQuestion("teacher");
// teacherQuestion("john");
// var designerQuestion = interviewQuestion("designer");
// designerQuestion("Mark");
// // or simply,
// interviewQuestion("runner")("Atlee");

// IIFE
// (function game(goodLuck){
//     var score = Math.random() * 10;
//     console.log(score >= 5 - goodLuck);
// })(5);
// console.log(score);

// Closures
// function interviewQuestion(job){
//     return function(name){
//         console.log(this);
//         if (job == 'teacher') {
//             console.log("Which subject do you teach "+name+" ?");
//         } else if (job == "designer"){
//             console.log(name + " can you explain ux design ?");
//         } else {
//             console.log("What do you do " + name + "?");
//         }
//     }
// }
// interviewQuestion("teacher")("John");

// call, apply, bind
// john = {
//     name: "john",
//     age: 30,
//     job: "teacher",
//     presentation: function(style, timeOfDay){
//         if (style === "friendly"){
//             console.log("Hi ! What\'s up ! I\'m "+this.name+". And "+this.age+" years old "+this.job+".");
//         } else if (style == "formal"){
//             console.log("Good " +timeOfDay + " Ladies and Gentlemen! I\'m "+this.name+". I\'m a "+this.age+" years old "+this.job+".");
//         }
//     }
// };
// john.presentation("formal", "morning");
// john.presentation("friendly", "afternoon");
// emily = {
//     name: "Emily",
//     age: "28",
//     job: "designer"
// };
// john.presentation.call(emily, "formal", "night");
// john.presentation.apply(emily, ["formal", "evening"]);
// var friendlyEmily = john.presentation.bind(emily, "formal");
// friendlyEmily("mid-noon");
// friendlyEmily("mid-night");

// years = [1990, 1945, 1988, 2002, 1940, 2020];
// function arrayCalc(arr, fn){
//     res = [];
//     for (var i=0; i<arr.length; i++){
//         res.push(fn(arr[i]));
//     }
//     return res;
// }
// function calculateAge(input, year){
//     if (input > year) {
//         return input - year;
//     } else {
//         return -1;
//     }
// }
// function isFullAge(limit, age){
//     return age>=limit;
// }
// function maxHeartRate(age){
//     if (age>=18 && age<=81){
//         return (206.9 - (0.67 * age));
//     }
//     else{
//         return -1;
//     }
// }
// ages = arrayCalc(years, calculateAge.bind(this, 2020));
// console.log(ages);
// isFullAgesJapan = arrayCalc(ages, isFullAge.bind(this, 20));
// console.log(isFullAgesJapan);

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

// Solution-1
(function (){
    function Question(question, answers, correctAnswer){
        this.question = question;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
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
    
    (function questionPicker(questions){
        questionNumberPicked = Math.floor(Math.random() * 3);
        questionPicked = questions[questionNumberPicked];
        
        console.log(questionPicked.question);
        for (var i=0; i<questionPicked.answers.length; i++){
            console.log(i + ": " + questionPicked.answers[i]);
        }
        
        answerChose = 
        prompt("Please select the correct answer (Just choose a number !)");
        
        validateAnswer(questionPicked, answerChose);
    })(questions);
    
    function validateAnswer(questionPicked, answerChose){
        if (answerChose == questionPicked.correctAnswer){
            console.log("Correct Answer :)");
        } else {
            console.log("Wrong Answer :(");
        }
    }
}    
)();
