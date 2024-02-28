// Bài 1:
let isPrime = (number) => {
    if (number <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
};
console.log(isPrime(7));
console.log(isPrime(10));
let prime = (number) => {
    if (number <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
};

let numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];
let primeNumbers = numbers.filter(prime);

console.log(primeNumbers);
// Bai 2:
