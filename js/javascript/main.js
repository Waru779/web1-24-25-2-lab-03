import{userList,active} from './db.js';

//Primitive types
const isActivated = true;//boolean
const userName = 'Jeremy';//string
const userCount  =15;//number
const nothing = null;//objecz
let base;//undefined
console.log(typeof isActivated);
console.log(typeof userName);
console.log(typeof userName);
console.log(typeof nothing);
console.log(typeof base);
//Prototype
Number.prototype.mod= function(divider) {
    return this % divider;

};
console.log(userCount.mod(3) );
console.log(userList[0].age.mod(2) );
console.log(userList[0].name);
//Collections 
const numbers = (3,5,7,[true,'Marika'],99,0);
console.log(numbers[3][1]);
console.log(numbers.length);

console.log(userList[2].age);
const key='name';
console.log(userList[2][key]);