'use strict';

var cat = {
    name: {first: 'Fluffy',last:'LaBeouf'},
    color: 'White'
}

Object.defineProperty(cat, 'name', {enumerable:true});

//for in
for(var propertyName in cat){
    display(propertyName + ': ' + cat[propertyName])
}

display(JSON.stringify(cat));
//display(Object.keys(cat));