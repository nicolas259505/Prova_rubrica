//1. Creare l'oggetto Rubrica
//2. Catturare la colonna dove andremo a creare tante card quanti sono i nostri contatti
//3. Creare un metodo che mi mostri tutti i contatti
//4. Il metodo funziona ma crea delle duplicazioni, devo far si che non si duplichi
//5. Risolto ma il bottone deve nascondere la rubrica al secondo click


// Aggiunta contatto
// 1. dobbiamo creare un metodo per l'aggiunta dei contatti. Questo metodo avrà bisogno di un nuovo nome e un nuovo numero
//2. Agendo sulla lista dei contatti pusheremo il nuovo contatto


// Rimozione contatto
//.1 Creare un metodo che cancelli un contatto, useremo lo splice()
//Rimozione contatto con le icone
// 1. Utilizzare l'indice delle icone per effettuare lo splice
// 2. Cattura tutte le icone







//Questo è il wrapper dei contatti
let contactsWrapper = document.querySelector('#contactsWrapper');


//Bottoni

let showContactsBtn = document.querySelector('#showContactsBtn');
let addContactsBtn = document.querySelector('#addContactsBtn');
let removeContactsBtn = document.querySelector('#removeContactsBtn');


//Inputs

let nameInput = document.querySelector('#nameInput');
let numberInput = document.querySelector('#numberInput');





//Variabile d'appoggio

let check = false;

const rubrica = {

    lista_contatti : [
        {contact_name : 'Yoda', phone_number : 3333333333},
        {contact_name : 'Anakin', phone_number : 3444444444},
        {contact_name : 'Obi-Wan', phone_number : 3555555555},
    ],



    showContacts : function(){
        contactsWrapper.innerHTML = '';

        this.lista_contatti.forEach( (contatto) => {
            let div = document.createElement('div');
            div.classList.add('card-custom');
            div.innerHTML = `
                <p class="lead">${contatto.contact_name}</p>
                <p>${contatto.phone_number}</p>
                <i class="fa-solid fa-trash-can icon"></i>`
            ;

            contactsWrapper.appendChild(div);

    }
);
        //icons
        let icons = document.querySelectorAll('.icon');


        icons.forEach( (icona, i) => {
            icona.addEventListener('click', ()=>{

                 this.lista_contatti.splice(i, 1);
                this.showContacts();
            });
        });


},

    addContact : function(newName, newNumber){

        if(newName && newNumber){

            this.lista_contatti.push({contact_name : newName, phone_number : newNumber});
            this.showContacts();
            if( check == false){
            check = true;
            showContactsBtn.innerHTML = 'Nascondi Contatti'

}

        }else{
            alert('Devi inserire SIA nome SIA numero')
        }

    },

    removeContact : function(removedName){

        let names = this.lista_contatti.map((contatto)=> contatto.contact_name);
        let index = names.indexOf(removedName);

        if(index >= 0){

            this.lista_contatti.splice(index, 1);
    
            this.showContacts();
            if( check == false)
            {
                check = true;
                showContactsBtn.innerHTML = 'Nascondi Contatti'
    
            }   

            
        }else{
            alert('Devi inserire il nome del contatto che vuoi rimuovere!');
        }
        

    }

};


showContactsBtn.addEventListener('click', () =>{


if( check == false){
        rubrica.showContacts();
        check = true;
        showContactsBtn.innerHTML = 'Nascondi Contatti'

}else{
    contactsWrapper.innerHTML = '';
    check = false;
    showContactsBtn.innerHTML = 'Mostra Contatti'
}

});


addContactsBtn.addEventListener('click', () =>{

    rubrica.addContact(nameInput.value, numberInput.value);
    nameInput.value = '';
    numberInput.value = '';
   


});

removeContactsBtn.addEventListener('click',()=>{

    rubrica.removeContact(nameInput.value);
})