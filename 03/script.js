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


var myFunc = function(){}
display(myFunc.prototype);

var cat = {name: 'Fluffy'}
display(cat.__proto__);

function Cat(name, color){
    this.name = name;
    this.color = color;
}
var fluffy = new Cat('Fluffy','White');

Cat.prototype.age = 3;

display(Cat.prototype);
display(fluffy.__proto__);

var muffin = new Cat ('Muffin','Brown');

display(muffin.__proto__);
