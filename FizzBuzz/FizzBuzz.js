// Compte de 0 à 100.

for (let i = 0; i < 101; i++) {

    // Test des multiples communs de 3 et de 5.
    if ((i % 3 == 0) && (i % 5 == 0)) {
        console.log('FizzBuzz');
    } else if (i % 3 == 0) {
        console.log('Fizz');
    } else if (i % 5 == 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
}