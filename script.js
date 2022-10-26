//DOM ELEMENTER
let currentBtn 
const addNewBtn = document.querySelector("#add-new-btn")
const addNewForm = document.querySelector("#add-new-form")
let ul
const title = document.querySelector("#new-title")
const text = document.querySelector("#appt")
const weekDays = document.querySelector(".weekdays")

window.addEventListener("load", loadStorage)//callback funktion skal ikke have paranteser

function loadStorage() {
    if (localStorage.getItem("theWholeShit")) {
        //let savedHTML = localStorage.getItem("theWholeShit")
        //ul.innerHTML = savedHTML  
    }

}

weekDays.addEventListener("click", function (event) {
    if (event.target.id == "add-new-btn-ma") {
        ul = document.querySelector("#tasks-ma")
        currentBtn = document.querySelector("#add-new-btn-ma")


        title.value = "" //så er teksten slettet når man opretter en ny opgave
        text.value = "" //så er teksten slettet når man opretter en ny opgave. 
        if (addNewForm.classList.contains("editing-active")) {
            //luk formen
            addNewForm.classList.remove("editing-active")
            this.innerHTML = "Opret event" //ændre teksten på knappen
        }
        else {
            //åbner formen
            addNewForm.classList.add("editing-active")
            event.target.innerHTML = "Annuller"
        }

    }

    else if (event.target.id == "add-new-btn-ti") {
        ul = document.querySelector("#tasks-ti")
        currentBtn = document.querySelector("#add-new-btn-ti")


        title.value = "" //så er teksten slettet når man opretter en ny opgave
        text.value = "" //så er teksten slettet når man opretter en ny opgave. 
        if (addNewForm.classList.contains("editing-active")) {
            //luk formen
            addNewForm.classList.remove("editing-active")
            this.innerHTML = "Opret event" //ændre teksten på knappen
        }
        else {
            //åbner formen
            addNewForm.classList.add("editing-active")
            event.target.innerHTML = "Annuller"
        }

    }

    else if (event.target.id == "add-new-btn-on") {
        ul = document.querySelector("#tasks-on")
        currentBtn = document.querySelector("#add-new-btn-on")


        title.value = "" //så er teksten slettet når man opretter en ny opgave
        text.value = "" //så er teksten slettet når man opretter en ny opgave. 
        if (addNewForm.classList.contains("editing-active")) {
            //luk formen
            addNewForm.classList.remove("editing-active")
            this.innerHTML = "Opret event" //ændre teksten på knappen
        }
        else {
            //åbner formen
            addNewForm.classList.add("editing-active")
            event.target.innerHTML = "Annuller"
        }

    }

    else if (event.target.id == "add-new-btn-to") {
        ul = document.querySelector("#tasks-to")
        currentBtn = document.querySelector("#add-new-btn-to")


        title.value = "" //så er teksten slettet når man opretter en ny opgave
        text.value = "" //så er teksten slettet når man opretter en ny opgave. 
        if (addNewForm.classList.contains("editing-active")) {
            //luk formen
            addNewForm.classList.remove("editing-active")
            this.innerHTML = "Opret event" //ændre teksten på knappen
        }
        else {
            //åbner formen
            addNewForm.classList.add("editing-active")
            event.target.innerHTML = "Annuller"
        }

    }

    else if (event.target.id == "add-new-btn-fr") {
        ul = document.querySelector("#tasks-fr")
        currentBtn = document.querySelector("#add-new-btn-fr")


        title.value = "" //så er teksten slettet når man opretter en ny opgave
        text.value = "" //så er teksten slettet når man opretter en ny opgave. 
        if (addNewForm.classList.contains("editing-active")) {
            //luk formen
            addNewForm.classList.remove("editing-active")
            this.innerHTML = "Opret event" //ændre teksten på knappen
        }
        else {
            //åbner formen
            addNewForm.classList.add("editing-active")
            event.target.innerHTML = "Annuller"
        }

    }

    else if (event.target.id == "add-new-btn-lo") {
        ul = document.querySelector("#tasks-lo")
        currentBtn = document.querySelector("#add-new-btn-lo")


        title.value = "" //så er teksten slettet når man opretter en ny opgave
        text.value = "" //så er teksten slettet når man opretter en ny opgave. 
        if (addNewForm.classList.contains("editing-active")) {
            //luk formen
            addNewForm.classList.remove("editing-active")
            this.innerHTML = "Opret event" //ændre teksten på knappen
        }
        else {
            //åbner formen
            addNewForm.classList.add("editing-active")
            event.target.innerHTML = "Annuller"
        }

    }

    else if (event.target.id == "add-new-btn-so") {
        ul = document.querySelector("#tasks-so")
        currentBtn = document.querySelector("#add-new-btn-so")


        title.value = "" //så er teksten slettet når man opretter en ny opgave
        text.value = "" //så er teksten slettet når man opretter en ny opgave. 
        if (addNewForm.classList.contains("editing-active")) {
            //luk formen
            addNewForm.classList.remove("editing-active")
            this.innerHTML = "Opret event" //ændre teksten på knappen
        }
        else {
            //åbner formen
            addNewForm.classList.add("editing-active")
            event.target.innerHTML = "Annuller"
        }

    }




})

//man kan bruge et toogle værktøj hvis man vil have en knap til at tænde og slukke, men i og med vi ville ændre teksten blev vi nødt til at gøre det på denne måde

// add entry
addNewForm.addEventListener("submit", function (event) {
    event.preventDefault()//preventer at formen sendes afsted, for så refrehes siden, og alt vil gå i nul.
    let entry = '<li>'
    entry += '<h2>' + title.value + '</h2>'
    entry += '<p>' + text.value + '</p>'
    entry += '<button id="delete-btn" onclick="deleteEntry(this.parentNode)">Slet</button>' //vi bliver nødt til at parse this til parent elementet da vi ikke ved hvor mange entrys folk vil lave
    entry += '<label class="check">'
    entry += '<input type="checkbox" name="" onchange="markTask(this.parentNode, this)">' //this referere til parent elementet. kan bruges på variabler som har en addEventListner.
    entry += '<span class="checkmark"></span>'
    entry += '</label>'
    entry += '</li>' //en variablen med en lang string

    ul.innerHTML += entry
    //saveToStorage()
    addNewForm.classList.remove("editing-active") //gør at formen fjernes når man opretter en ny opgave
    currentBtn.innerHTML = "Opret event"
})


//delete entry
function deleteEntry(entry) { //også event listener funktioner, men bliver ikke trigget fra onclick og onchange
    entry.remove()
    //saveToStorage()
}

//mark entry
function markTask(entry, checkbox) {
    /* entry.classList.toggle("done") */
    if (checkbox.checked) {
        checkbox.setAttribute("checked", "true")
        entry.classList.add("done")
    }
    else {
        checkbox.removeAttribute("checked")
        entry.classList.remove("done")
    }
    //saveToStorage()
}

//ekstern funktion save, fordi den skal virke på flere elementer

function saveToStorage() {
    localStorage.setItem("theWholeShit", ul.innerHTML)
}