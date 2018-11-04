var person = new Object();

person['firstName'] = 'Jay';
person['lastName'] = 'Eff';

console.log(person);

person['adress'] = new Object();
person.adress.city = 'Cannes';
person.adress.number = '1123';

let person2 = {
    name: '',
    last: '',
    adress: {
        city: '',
        number: ''
    }
}

console.log(person2);