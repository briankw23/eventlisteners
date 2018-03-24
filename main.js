const students = [
    {
        avatar: "https://robohash.org/inciduntsapientetenetur.png?size=100x100&set=set1",
        firstName: "Marinna",
        lastName: "Olliver",
        catchPhrase: "Optional global adapter"
    },
    {
        avatar: "https://robohash.org/facereinventoreexpedita.png?size=100x100&set=set1",
        firstName: "Shalne",
        lastName: "Roddell",
        catchPhrase: "Vision-oriented optimizing installation"
    },
    {
        avatar: "https://robohash.org/sintquasnam.png?size=100x100&set=set1",
        firstName: "Kamila",
        lastName: "Girardey",
        catchPhrase: "Ergonomic human-resource toolset"
    },
    {
        avatar: "https://robohash.org/autautfugiat.png?size=100x100&set=set1",
        firstName: "Conn",
        lastName: "Bemment",
        catchPhrase: "Mandatory 4th generation model"
    },
    {
        avatar: "https://robohash.org/inciduntameteum.png?size=100x100&set=set1",
        firstName: "Jeanelle",
        lastName: "Inglesent",
        catchPhrase: "Configurable value-added architecture"
    },
    {
        avatar: "https://robohash.org/vitaequiafugiat.png?size=100x100&set=set1",
        firstName: "Xymenes",
        lastName: "Nickols",
        catchPhrase: "Virtual coherent standardization"
    },
    {
        avatar: "https://robohash.org/oditexassumenda.png?size=100x100&set=set1",
        firstName: "Mandel",
        lastName: "Haycox",
        catchPhrase: "Balanced zero tolerance throughput"
    },
    {
        avatar: "https://robohash.org/ipsamnamiusto.png?size=100x100&set=set1",
        firstName: "Salim",
        lastName: "Brunker",
        catchPhrase: "Synergized impactful middleware"
    },
    {
        avatar: "https://robohash.org/quiaofficiaullam.png?size=100x100&set=set1",
        firstName: "Melanie",
        lastName: "Ivain",
        catchPhrase: "Multi-channelled solution-oriented artificial intelligence"
    }
];

const printToDom = (String, divId) => {
    const printTo = document.getElementById(divId);
    printTo.innerHTML = String;
}; 

const buildDomString = (studentArray) =>{
    let domString = "";
    studentArray.forEach((student) => {
        domString +=    `<div class="card">`;
        domString +=    `<h1>${student.firstName} ${student.firstName}</h1>`
        domString +=    `<h3>${student.catchPhrase}</h3>`
        domString +=    `<img src="${student.avatar}" alt=""><br>`
        domString +=    `<button class="card-button">Brought Pie</button>`
        domString +=    `</div>`;
    })
    printToDom(domString,"card-holder");
}


const addAllEventListeners = () => {
    const allthebuttons = document.getElementsByClassName("card-button");
    console.log(allthebuttons);
    
    for (let i = 0; i < allthebuttons.length; i++) {
        const element = allthebuttons[i].addEventListener("click",(e) => {
           allthebuttons[i].addEventListener("click", changeNameToGreen)
        })
    }  
};
const changeNameToGreen = (e) => {
    console.log("event!!!!", e );
    const nameOfstudent = e.target.parentNode.children[0];
    nameOfstudent.classList.add('green');
};

const startApplication = () => {
    buildDomString(students);
    addAllEventListeners();
};

startApplication();


