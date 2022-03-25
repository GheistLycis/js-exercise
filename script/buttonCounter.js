class ButtonCounter{
    constructor(divId, buttonId){
        this.divMessages = document.getElementById(divId);
        this.buttonCounter = document.getElementById(buttonId);
        this.init();
    }

    init(){
        this.buttonCounter.addEventListener("click", e=>{
            //CREATING COUNTER
            let div = document.createElement("div");
            div.setAttribute("id", "div-counter");
            div.innerHTML = `
                <h1>0</h1>
                <button id="btn-sub">-</button>
                <button id="btn-add">+</button>
            `;
            this.divMessages.appendChild(div);
    
            //SETTING COUNTER
            let display = 0;
            document.addEventListener("click", e=>{
                switch(e.target.id){
                    case "btn-sub":
                        display--;
                        div.querySelector("h1").textContent = display;
                        break;
                    case "btn-add":
                        display++;
                        div.querySelector("h1").textContent = display;
                        break;
                };
            });
        });
    }

    //CREATE DIV-COUNTER INSIDE DIV-MESSAGES, CONTAINING: 2 BUTTONS, + / -, AND A <H1>DISPLAYNUM<H1>
    //ADD FUNCTION TO THE BUTTONS AND TO THE DISPLAY
}