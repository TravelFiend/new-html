const dog = {
    name: 'Brutus',
    color: 'brown',
    weight: 374
}

console.log(dog.name);

dog.name = 'Rover';

console.log(dog.name);

if(dog.name === 'Rover') {
    console.log('Red Rover come over');
} else if(dog.name === 'Spot') {
    console.log('Spot is a basic bitch');
} else {
    console.log('You\'re just a normal dog');
}

for(let i = 0; i < 101; i++){
    if(i % 15 === 0){
        console.log('FizzBuzz');
    }else if(i % 3 === 0){
        console.log('Fizz');
    }else if(i % 5 === 0){
        console.log('Buzz');
    }
    console.log(i);
}

for(let i in dog){
    console.log(dog[i]);
}
function showAlert(){
    alert('You clicked a button');
}

const butt = document.getElementsByTagName('button');

function logHello(){
    console.log('Hello');
}