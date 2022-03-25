class ButtonTimesTable{
    constructor(divId, buttonId){
        this.divMessages = document.getElementById(divId);
        this.buttonCalculate = document.getElementById(buttonId);
        this.init();
    }

    init(){
        this.buttonCalculate.addEventListener("click", ()=>{
            let tableDesired = prompt("What table do you wanna get?");
            let i = 0;

            while(i==0){
                if(isNaN(tableDesired)){
                    alert("Invalid number!");
                    tableDesired = prompt("What table do you wanna get?");
                }
                else{
                    i++;
                }
            }

            let table = document.createElement("table");
            for(let i = 1; i <= 10; i++){
                table.innerHTML += `
                <h1>${tableDesired} x ${i} = ${tableDesired * i}</h1>
                `;
            }
            this.divMessages.appendChild(table);
        })
    }
}