// Tipos falso: false, 0, [ ], " ", ' ', undefined, null, NaN
console.log("----- Tipos falso -----\n")

console.log(Boolean(false));        // false
console.log(Boolean(0));            // false
console.log(Boolean(''));           // false
console.log(Boolean(""));           // false
console.log(Boolean(undefined));    // false
console.log(Boolean(null));         // false
console.log(Boolean(NaN));          // false


// Tipos verdadeiros: true, 1, -1, 0.5, "0"
console.log("\n----- Tipos verdadeiros -----\n")

console.log(Boolean(true));         // true
console.log(Boolean(1));            // true
console.log(Boolean(-1));           // true
console.log(Boolean(0.5));          // true
console.log(Boolean("0"));          // true
console.log(Boolean([]));           // true