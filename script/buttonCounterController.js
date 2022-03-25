class ButtonCounter{
    constructor(divId, buttonId){
        this.divContent = document.getElementById(divId);
        this.buttonCounter = document.getElementById(buttonId);
        this.displayManual = 0;
        this.displayAuto = 0;
        this.toggleCounter;
        this.init();
    }
/*
Problems:
    -When buttonCounter is clicked more than once, the addEventListener seems to stack and the manual counters will
    add/subtract according to the number of times buttonCounter has been clicked;
    
    -Although this has no practical/notable effects, when clicking on another button from the top panel after 
    activating the auto counter the adding/subtracting event won't stop until the user clicks on the buttonCounter again.
*/

    init(){
        this.buttonCounter.addEventListener("click", ()=>{
            //CLEARING SCREEN
            this.divContent.innerHTML = "";

            //RESETING COUNTERS
            this.displayManual = 0;
            this.displayAuto = 0;
            clearInterval(this.toggleCounter);

            //CREATING MANUAL COUNTER BUTTONS
            let divManual = document.createElement("div");
            divManual.setAttribute("id", "div-counter-manual");
            divManual.innerHTML = `
                <h1>Manual Counter</h1>
                <h1 id="display-manual">0</h1>
                <button id="btn-sub-manual">-</button>
                <button id="btn-add-manual">+</button>
            `;
            this.divContent.appendChild(divManual);

            //CREATING AUTOMATIC COUNTER BUTTONS
            let divAuto = document.createElement("div");
            divAuto.setAttribute("id", "div-counter-auto");
            divAuto.innerHTML = `
                <h1>Auto Counter</h1>
                <h1 id="display-auto">0</h1>
                <button id="btn-sub-auto">-</button>
                <button id="btn-add-auto">+</button>
            `;
            this.divContent.appendChild(divAuto);

            //SETTING COUNTERS
            this.divContent.addEventListener("click", btn=>{
                switch(btn.target.id){
                    case "btn-sub-manual":
                        this.displayManual--;
                        document.getElementById("display-manual").textContent = this.displayManual;
                        break;
                    case "btn-add-manual":
                        this.displayManual++;
                        document.getElementById("display-manual").textContent = this.displayManual;
                        break;
                    case "btn-sub-auto":
                        this.autoCount("-");
                        break;
                    case "btn-add-auto":
                        this.autoCount("+");
                        break;
                    default:
                        clearInterval(this.toggleCounter);
                        break;
                };
            });
        });
    }

    autoCount(op){
        if(op == "-"){
            document.getElementById("btn-sub-auto").classList.add("active-red");
            document.getElementById("btn-add-auto").classList.remove("active-green");
            clearInterval(this.toggleCounter);
            this.toggleCounter = setInterval(()=>{
                this.displayAuto--;
                document.getElementById("display-auto").textContent = this.displayAuto;
            }, 100);
        }
        else if(op == "+"){
            document.getElementById("btn-add-auto").classList.add("active-green");
            document.getElementById("btn-sub-auto").classList.remove("active-red");
            clearInterval(this.toggleCounter);
            this.toggleCounter = setInterval(()=>{
                this.displayAuto++;
                document.getElementById("display-auto").textContent = this.displayAuto;
            }, 100);
        }
    }
}