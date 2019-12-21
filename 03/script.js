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
function Animal(voice){
    this.voice = voice || "grunt";
}

Animal.prototype.speak = function(){
    display(this.voice);
}

function Cat(name, color){
    Animal.call(this, 'Meoow');
    this.name = name;
    this.color = color;
}
Cat.prototype = Object.create(Animal.prototype);

var fluffy = new Cat('Fluffy','White');
display(fluffy);
display(fluffy instanceof Cat);
display(fluffy instanceof Cat);
display(fluffy.__proto__);



