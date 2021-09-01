//arayuzdeki elementleri secelim


const name = document.getElementById('name');
const surname = document.getElementById('surname');
const email = document.getElementById('email');

const form = document.getElementById('form-directory');


//event listenerların tanımlanması
form.addEventListener('submit', save);

function save(e){
    e.preventDefault();
   
    //eklenecekKişi
    const personAdded = {
        name: name.value,
        surname: surname.value,
        email:email.value

    }

    checkData(personAdded);
    console.log(personAdded);
}

function checkData(person){
    //objelerde in kullanımı
    for(const value in person){

    }
}
