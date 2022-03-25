class ButtonCities{
    constructor(divId, buttonId){
        this.divContent = document.getElementById(divId);
        this.buttonCities = document.getElementById(buttonId);
        this.cities = {
            sp: ['Jundiaí', 'Campinas', 'Limeira', 'Atibaia'],
            rj: ['Teresópolis', 'Resende', 'Maricá', 'Macaé'],
        };
        this.init();
    }

    init(){
        this.buttonCities.addEventListener("click", ()=>{
            //CLEARING SCREEN
            this.divContent.innerHTML = "";
            
            //CREATING SELECT PANEL
            let div = document.createElement("div");
            div.setAttribute("id", "div-cities");
            div.innerHTML = `
                <label> State
                    <select id="states">
                        <option value="SP">São Paulo</option>
                        <option value="RJ">Rio de Janeiro</option>
                    </select>
                </label>
                <div id="cities">
                </div>
                <button id="confirm">Confirm</button>
            `;
            this.divContent.appendChild(div);

            //CREATING CITIES PANEL

            //DISPLAYING CITIES PANEL
            div.querySelector("#states").addEventListener("change", ()=>{
                let option = this.stateOption();
                if(option == "SP"){
                    //GET INTO DIV CITIES, SHOW SP PANEL AND HIDE RJ PANEL;
                }
                else if(option == "RJ"){
                    //GET INTO DIV CITIES, SHOW RJ PANEL AND HIDE SP PANEL;
                }
            });
        })
    }

    stateOption(){
        let select = document.querySelector("#states");
        let selected;
        for(let i = 0; i < select.options.length; i++){
            if(select.options[i].selected){
                selected = select.options[i].value;
                break;
            };
        }
        return selected;
    }
}