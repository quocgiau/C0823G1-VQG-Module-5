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
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    gender: 'male',
    occupation: 'developer',
    nationality: 'American',
    city: 'New York',
    hobbies: ['reading', 'traveling', 'photography'],
    languages: ['English', 'Spanish'],
    education: {
        degree: 'Bachelor',
        major: 'Computer Science',
        university: 'Harvard University'
    }
};
let {firstName, gender, education: {degree}, languages} = person;
let englishOnly = languages.filter(language => language === 'English');

let student = {firstName, gender, degree, languages: englishOnly};

console.log(student);

// Bài 3:
function displayInfo({firstName = "Quân", degree = "NA"}) {
    console.log(`First Name: ${firstName}`);
    console.log(`Degree: ${degree}`);
}

let person1 = {
    firstName: "John",
    degree: "Bachelor",
};

let person2 = {
    degree: "Master",
};

displayInfo(person1);
displayInfo(person2);