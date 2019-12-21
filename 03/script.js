'use strict';

//var arr = ['red', 'blue','green'];
/* var arr = new Array('red','blue','green');

Object.defineProperty(Array.prototype,'last', {get: function(){
return this[this.length-1];
}} )


var last = arr.last;
var arr2 = ['one','two','three'];
display(arr.last);
display(Array); */

/* A function's prototype: is the object instance that will
become the prototype for all objects created using this
function as a constructor.

An object's prototype: is the object instance from which
the object is inherited.
*/


/* var myFunc = function(){}
display(myFunc.prototype);

var cat = {name: 'Fluffy'}
display(cat.__proto__); */
//---------------------------------------------------------
class Animal{
    constructor(voice){
        this.voice = voice || 'grunt';
    }
    speak(){
        display(this.voice);
    }
}
class Cat extends Animal{
    constructor(name,color){
        super('Meow');
        this.name = name;
        this.color = color;
    }
}

var fluffy = new Cat ('Fluffy','White');
//fluffy.speak();
//display(fluffy.constructor);
display(Object.keys(fluffy.__proto__.__proto__));
display(fluffy.__proto__.__proto__.hasOwnProperty('speak'));


