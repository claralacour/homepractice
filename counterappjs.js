let countEl = document.getElementById("count-el");
let count = 0;
let saveEl = document.getElementById("save-el");

function increment(){
    count += 1; 
    countEl.textContent = count;
}

function save(){
    let numberDash = count + "-";
    saveEl.textContent += numberDash;
    console.log(count);
    count = 0;
    countEl.textContent = count;
}

let username = "Clara, "
let message = "you have 3 new notifications";

let messageToUser = username + message;

console.log(messageToUser);