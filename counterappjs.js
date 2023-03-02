/*pseudo-code = så altså hvad vi skal lave af js kode
intialize the count as 0
listen for clicks on the increment button
increment the count variable when the button is clicked
change the count-el in the HTML to reflect the new count*/


let count = 0;


function increment(){
    count = count + 1; 
    document.getElementById("count-el").innerText = count;
}


/*function plusOne(){
    laps = laps + 1; 
}

plusOne()
plusOne()
plusOne()
plusOne()

console.log(laps)*/

