// ES2020

// BigInt

// Max safe integer :
// Number.MAX_SAFE_INTEGER
// 9007199254740991
// If we do 9007199254740991 + 10 it will malfunction
// So we do it this way :
9007199254740991n + 10n
// And this give the right OP: 9007199254741001n
typeof 9007199254741001n
// OP: "bigint"

//--------------------------------------------------------

//Optional Chaining Operator

let will_pokemon = {
    pikachu: {
        species: 'Mouse',
        height: 0.4,
        weight: 6
    }
}

let raichu = will_pokemon.raichu.weight // Error, as raichu doesn't exist
let weight = will_pokemon?.pikachu?.weight // Checks if will pokemon exists, then checks whether pikachu exists, this outputs
let raichu2= will_pokemon?.raichu?.weight // Undefined

//--------------------------------------------------------

// OR operator:

let power = will_pokemon.pikachu.power // Error, last key missing
// We cannot do Chaining here as ?. in the end doesn't make sense
let power2 = will_pokemon?.pikachu?.power || 'no power'
// OP - 'no power'

let will_pokemon = {
    pikachu: {
        species: 'Mouse',
        height: 0.4,
        weight: 6,
        power: ''
    }
}
let power3 = will_pokemon?.pikachu?.power || 'no power'
// OP - 'no power', because power has empty string. Empty string
// evaluates to 0. It would give similar output for power: false or power: 0

//--------------------------------------------------------

// Nullish Coalescing Operator:
let power4 = will_pokemon?.pikachu?.power ?? 'no power'
// OP - ''. This is the difference between OR and Nullish operator
// Even for " power: 0 ", OP - 0

