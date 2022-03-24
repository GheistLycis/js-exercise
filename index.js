let userName = prompt('Type your name:');
let userAge = prompt('Type your age:');
let i = 0;

while(i==0){
    if(isNaN(userAge) || userAge == 0){
        alert("Invalid number!");
        userAge = prompt("Type your age:");
    }
    else{
        i++;
    }
}

function isThomasAnderson(name){
    if(name.toLowerCase().replace(/ /g, "") == "thomasanderson") return true;
}

document.write(
    `Hello ${userName}, you're ${(userAge >= 18) ? "of age" : "underage"}! 
    ${(isThomasAnderson(userName)) ? "And you're a character from Matrix!" : ""}`
);

//CREATE HTML BUTTON 'ENTER' THAT TRIGGERS THE SCRIPT
//PRINT MESSAGE IN H1
//PRINT ESPECIAL MESSAGE IN H2