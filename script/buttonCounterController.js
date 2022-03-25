class ButtonCounter{
    constructor(divId, buttonId){
        this.divMessages = document.getElementById(divId);
        this.buttonCounter = document.getElementById(buttonId);
        this.displayManual = 0;
        this.displayAuto = 0;
        this.toggleCounter;
        this.init();
    }

    init(){
        this.buttonCounter.addEventListener("click", ()=>{

            let divManual = document.createElement("div");
            divManual.setAttribute("id", "div-counter-manual");
            divManual.innerHTML = `
                <h1>Manual Counter</h1>
                <h1 id="display-manual">0</h1>
                <button id="btn-sub-manual">-</button>
                <button id="btn-add-manual">+</button>
            `;
            this.divMessages.appendChild(divManual);

            let divAuto = document.createElement("div");
            divAuto.setAttribute("id", "div-counter-auto");
            divAuto.innerHTML = `
                <h1>Auto Counter</h1>
                <h1 id="display-auto">0</h1>
                <button id="btn-sub-auto">-</button>
                <button id="btn-add-auto">+</button>
            `;
            this.divMessages.appendChild(divAuto);

            document.addEventListener("click", e=>{
                switch(e.target.id){
                    case "btn-sub-manual":
                        this.displayManual--;
                        break;
                    case "btn-add-manual":
                        this.displayManual++;
                        break;
                    case "btn-sub-auto":
                        this.toggleCounter = false;
                        this.autoCount();
                        break;
                    case "btn-add-auto":
                        this.toggleCounter = true;
                        this.autoCount();
                        break;
                    default:
                        break;
                };
                document.getElementById("display-manual").textContent = this.displayManual;
            });
        });
    }

    autoCount(){
        if(!this.toggleCounter){
            let counter = setInterval(()=>{
                this.displayAuto--;
                document.getElementById("display-auto").textContent = this.displayAuto;
                if(this.toggleCounter) clearInterval(counter);
            }, 100);
        }
        else if(this.toggleCounter){
            let counter = setInterval(()=>{
                this.displayAuto++;
                document.getElementById("display-auto").textContent = this.displayAuto;
                if(!this.toggleCounter) clearInterval(counter);
            }, 100);
        }
    }
}