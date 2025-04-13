// JavaScript Next Gen Demo Code

// ----------------------------
// Let dan Const
// ----------------------------
export function demoVariables() {
    // Menggunakan var (cara lama)
    var oldVar = "Old variable";
    {
        var oldVar = "Changed inside block";
    }

    // Menggunakan let (ES6)
    let newLet = "New let variable";
    {
        let newLet = "Different variable inside block";
        console.log("newLet inside block:", newLet);
    }

    // Menggunakan const (ES6)
    const PI = 3.14159;
    const user = { name: "John", age: 30 };
    // PI = 3.15; // Error! Tidak bisa mengubah nilai const
    user.age = 31; // Ini valid! Konten objek const dapat diubah

    return {
        oldVar,
        newLet,
        PI,
        user
    };
}

// ----------------------------
// Arrow Functions
// ----------------------------
export function demoArrowFunctions() {
    // Fungsi reguler
    function regularSum(a, b) {
        return a + b;
    }

    // Arrow function dasar
    const arrowSum = (a, b) => {
        return a + b;
    };

    // Arrow function dengan implicit return
    const shortArrowSum = (a, b) => a + b;

    // Arrow function tanpa parameter
    const sayHello = () => "Hello World!";

    // Arrow function dengan satu parameter (kurung opsional)
    const square = x => x * x;

    return {
        regularSum: regularSum(5, 3),
        arrowSum: arrowSum(5, 3),
        shortArrowSum: shortArrowSum(5, 3),
        sayHello: sayHello(),
        square: square(4)
    };
}

// ----------------------------
// Template Literals
// ----------------------------
export function demoTemplateLiterals() {
    const name = "John";
    const age = 30;

    // String concatenation cara lama
    const oldWay = "Nama saya " + name + " dan umur saya " + age + " tahun.";

    // Template literals (ES6)
    const newWay = `Nama saya ${name} dan umur saya ${age} tahun.`;

    // Template literals multi-baris
    const multiLine = `
Ini adalah string multi-baris.
Sangat berguna untuk HTML template.
Nama: ${name}
Umur: ${age}
`;

    // Template literals dengan ekspresi
    const expression = `Tahun lahir: ${new Date().getFullYear() - age}`;

    return {
        oldWay,
        newWay,
        multiLine,
        expression
    };
}

// ----------------------------
// Destructuring
// ----------------------------
export function demoDestructuring() {
    // Object destructuring
    const person = {
        firstName: "John",
        lastName: "Doe",
        age: 30,
        email: "john@example.com",
        address: {
            city: "Jakarta",
            postalCode: "12345"
        }
    };

    // Basic destructuring
    const { firstName, lastName } = person;

    // Destructuring dengan nama variabel baru
    const { firstName: fName, lastName: lName } = person;

    // Destructuring dengan nilai default
    const { hobby = "coding" } = person;

    // Nested destructuring
    const { address: { city, postalCode } } = person;

    // Array destructuring
    const colors = ["red", "green", "blue", "yellow", "purple"];

    // Basic array destructuring
    const [firstColor, secondColor] = colors;

    // Skip elements
    const [, , thirdColor] = colors;

    // Rest pattern dalam array destructuring
    const [primary, secondary, ...restColors] = colors;

    // Swap variables menggunakan destructuring
    let a = 1;
    let b = 2;
    [a, b] = [b, a];

    return {
        objectBasic: { firstName, lastName },
        objectRenamed: { fName, lName },
        objectDefault: hobby,
        objectNested: { city, postalCode },
        arrayBasic: { firstColor, secondColor },
        arraySkipped: thirdColor,
        arrayRest: { primary, secondary, restColors },
        swapped: { a, b }
    };
}

// ----------------------------
// Spread dan Rest Operators
// ----------------------------
export function demoSpreadRest() {
    // Spread operator dengan array
    const numbers = [1, 2, 3];
    const moreNumbers = [...numbers, 4, 5];

    // Copy array dengan spread
    const numbersCopy = [...numbers];

    // Merge arrays
    const array1 = [1, 2, 3];
    const array2 = [4, 5, 6];
    const mergedArray = [...array1, ...array2];

    // Spread operator dengan objek
    const person = {
        name: "John",
        age: 30
    };

    // Copy objek
    const personCopy = { ...person };

    // Extend objek
    const extendedPerson = {
        ...person,
        email: "john@example.com",
        age: 31 // Override properti yang ada
    };

    // Rest parameter dalam fungsi
    function sum(...numbers) {
        return numbers.reduce((total, num) => total + num, 0);
    }

    // Rest parameter dengan parameter reguler
    function process(first, second, ...rest) {
        return {
            first,
            second,
            rest
        };
    }

    return {
        spreadArray: moreNumbers,
        copyArray: numbersCopy,
        mergedArrays: mergedArray,
        spreadObject: extendedPerson,
        restSum: sum(1, 2, 3, 4, 5),
        restProcess: process("a", "b", "c", "d", "e")
    };
}