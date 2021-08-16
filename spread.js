const europe = ['Sofia', 'Berlin', 'Helsinki']
const asia = ['Tokyo', 'Bangkok', 'Hong Kong']

const world = [...europe, ...asia]
const worldTwo = [...world]

// console.log( ...europe )
// console.log( europe[0], europe[1], europe[2] )

function logCities( ...cities ) {
    console.log( cities.push( 'Madrid' ) )
    console.log( cities )
}

logCities( 'Sofia', 'Berlin', 'Helsinki' )