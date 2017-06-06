# ie-array-filter-polyfill
Polyfill to provide array.filter on IE &lt; 9

# Installation
To install the stable version:

```zsh
npm install ie-array-filter-polyfill --save
```

# Use
```javascript
import "ie-array-filter-polyfill";
```

# Example
```javascript
'use strict';
require('ie-array-filter-polyfill');

const people = [
    {
        name: 'Joe Due',
        age: 35
    },
    {
        name: 'Parker Manson',
        age: 75
    },
    {
        name: 'Junior Manson',
        age: 20
    },
    {
        name: 'Baby Due',
        age: 3
    },
];

const folks = people.filter(x => x.age > 1 && x.age <= 20 );

console.log('FOLKS: ', folks);
```

```zsh
>node example.js

//RESULT
FOLKS:  [
	{ name: 'Junior Manson', age: 20 },
  { name: 'Baby Due', age: 3 }
]
```