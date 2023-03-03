/*pseudo-code = så altså hvad vi skal lave af js kode
intialize the count as 0
listen for clicks on the increment button
increment the count variable when the button is clicked
change the count-el in the HTML to reflect the new count*/


let countEl = document.getElementById("count-el");
let count = 0;


function increment(){
    count = count + 1; 
    countEl.innerText = count;
}

function save(){
    console.log(count);
}

let username = "Clara, "
let message = "you have 3 new notifications";

let messageToUser = username + message;

console.log(messageToUser);

let welcomeEl = document.getElementById("welcome-el");
let names = "Clara";
let greeting = "Welcome back";

welcomeEl.innerText = greeting + ", " + names;

welcomeEl.innerText += "👋";

/*function plusOne(){
    laps = laps + 1; 
}

plusOne()
plusOne()
plusOne()
plusOne()

console.log(laps)*/

