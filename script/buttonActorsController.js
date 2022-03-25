class ButtonActors{
    constructor(divId, buttonId){
        this.divBoxes = document.getElementById(divId);
        this.buttonActors = document.getElementById(buttonId);
        this.actorsList = [
            {
                name: 'Keanu Reeves',
                character: 'Neo',
                movie: 'The Matrix',
            },
            {
                name: 'David Prowse',
                character: 'Darth Vader',
                movie: 'Star Wars Episodes IV-VI',
            },
            {
                name: 'Christian Bale',
                character: 'Batman',
                movie: 'Batman Begins'
            },
        ];
        this.init();
    }

    init(){
        this.buttonActors.addEventListener("click", e=>{
            let actors = this.actorsList;

            for(let i = 0; i < actors.length; i++){
                let divActorBox = document.createElement('div');
                divActorBox.setAttribute("class", "actor");
                divActorBox.innerHTML = `
                    <h3>${actors[i].name}</h3>
                    <p>Plays the character ${actors[i].character} in the movie ${actors[i].movie}.</p>
                `;
    
                this.divBoxes.appendChild(divActorBox);
            }
        });
    }
}