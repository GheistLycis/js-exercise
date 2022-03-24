let buttonEnter = document.getElementById('button-enter');
let divMessages = document.getElementById('div-messages');

buttonEnter.addEventListener('click', e=>{
    let userName = prompt('Type your name:');
    let userAge = setUserAge();

    isThomasAnderson(userName);

    let message = document.createElement("message");
    message.innerHTML = `
        <h1>Hello ${userName}, you're ${(userAge >= 18) ? "of age" : "underage"}!</h1>
        <h2>${(isThomasAnderson(userName)) ? "And you're a character from Matrix!" : ""}</h2>
    `;
    divMessages.appendChild(message);
})

function setUserAge(){
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

    return userAge;
}

function isThomasAnderson(name){
    let name2 = name.toLowerCase().replace(/ /g, "")
    if(name2 == "thomasanderson" || name2 == "neo") return true;
}

//CREATE HTML BUTTON 'ENTER' THAT TRIGGERS THE SCRIPT
//PRINT MESSAGE IN H1
//PRINT ESPECIAL MESSAGE IN H2