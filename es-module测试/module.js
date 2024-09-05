// module.js
import { add } from './utils.js';

export function sayHello() {
    console.log('Hello, ES Modules!');
}

console.log(add(2, 3)); // This will log "5" to the console
