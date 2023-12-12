

/*
JavaScript Object
*/

let brand = 'Apple';
let model = 'iPhone 11 pro max';
let storage = '256 GB';
let color = 'Black';


document.getElementById('demo').innerHTML = brand + " " + model + " " + storage + " " + color;

let phone = {
  brand: 'Apple',
  model: 'iPhone 11 pro max',
  storage: '256 GB',
  color: 'Black',
};

document.getElementById('demo').innerHTML = phone.model;

console.log(phone);