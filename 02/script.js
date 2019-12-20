'use strict';

var cat = {
    name: {first: 'Fluffy',last:'LaBeouf'},
    color: 'White'
}

Object.defineProperty(cat, 'name', {writable: false});
cat.name.first = 'Scratchy';
display(cat.name);
//display(Object.getOwnPropertyDescriptor(cat,'name'));
