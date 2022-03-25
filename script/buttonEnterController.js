class ButtonEnter{
    constructor(divId, buttonId){
        this.divContent = document.getElementById(divId);
        this.buttonEnter = document.getElementById(buttonId);
        this.init();
    }

    init(){
        this.buttonEnter.addEventListener("click", ()=>{
            //CLEARING SCREEN
            this.divContent.innerHTML = "";

            let userName = this.setUserName();
            let userAge = this.setUserAge();
    
            this.isNeo(userName);
    
            let message = document.createElement("message");
            message.innerHTML = `
                <h1>Hello ${userName}, you're ${(userAge >= 18) ? "of age" : "underage"}!</h1>
                <h2>${(this.isNeo(userName)) ? "And you're a character from Matrix!" : ""}</h2>
            `;
            this.divContent.appendChild(message);
        })
    }

    setUserName(){
        let userName = prompt('Type your name:');
        let i = 0;

        while(i==0){
            if(!userName){
                alert("Invalid name!");
                userName = prompt('Type your name:');
            }
            else{
                i++
            }
        }

        return userName;
    }

    setUserAge(){
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

    isNeo(name){
        let name2 = name.toLowerCase().replace(/ /g, "")
        if(name2 == "thomasanderson" || name2 == "neo") return true;
    }
}