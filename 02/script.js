'use strict';

var cat = {
    name: {first: 'Fluffy',last:'LaBeouf'},
    color: 'White'
}

//defineProperty(cat, 'name', {configurable: false});
//Object.defineProperty(cat, 'name', {enumerable: false});

delete cat.name;