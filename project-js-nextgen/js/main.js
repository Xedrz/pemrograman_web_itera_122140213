// Import dari module lain
import { formatDate, capitalizeString } from './modules/utils.js';
import { sampleData } from './modules/data.js';
import { demoVariables, demoArrowFunctions, demoTemplateLiterals, demoDestructuring, demoSpreadRest } from './app.js';

// DOM elements
const outputElement = document.getElementById('output');
const runButton = document.getElementById('runBtn');
const clearButton = document.getElementById('clearBtn');

// Fungsi untuk menambahkan output ke DOM
function addOutput(title, code, result) {
    const outputItem = document.createElement('div');
    outputItem.className = 'output-item';

    const titleEl = document.createElement('div');
    titleEl.className = 'output-title';
    titleEl.textContent = title;

    const codeEl = document.createElement('div');
    codeEl.className = 'code';
    codeEl.textContent = code;

    const resultEl = document.createElement('div');
    resultEl.className = 'result';

    if (typeof result === 'object') {
        resultEl.textContent = JSON.stringify(result, null, 2);
    } else {
        resultEl.textContent = result;
    }

    outputItem.appendChild(titleEl);
    outputItem.appendChild(codeEl);
    outputItem.appendChild(resultEl);

    outputElement.appendChild(outputItem);
}

// Event listener untuk tombol Run
runButton.addEventListener('click', () => {
    clearOutput();
    runAllDemos();
});

// Event listener untuk tombol Clear
clearButton.addEventListener('click', clearOutput);

function clearOutput() {
    outputElement.innerHTML = '';
}

// Fungsi utama untuk menjalankan semua demo
function runAllDemos() {
    // Demo Let dan Const
    const varResults = demoVariables();
    addOutput(
        "1. Let dan Const",
        "var vs let/const dan block scope",
        `var (function scope): ${varResults.oldVar}
let (block scope): ${varResults.newLet}
const (immutable): ${varResults.PI}
const object (mutable content): ${JSON.stringify(varResults.user)}`
    );

    // Demo Arrow Functions
    const arrowResults = demoArrowFunctions();
    addOutput(
        "2. Arrow Functions",
        "Perbandingan fungsi reguler dan arrow functions",
        `Regular function: ${arrowResults.regularSum}
Arrow function: ${arrowResults.arrowSum}
Short arrow: ${arrowResults.shortArrowSum}
No params: ${arrowResults.sayHello}
Single param: ${arrowResults.square}`
    );

    // Demo Template Literals
    const templateResults = demoTemplateLiterals();
    addOutput(
        "3. Template Literals",
        "String concatenation vs template literals",
        `Old way: ${templateResults.oldWay}
New way: ${templateResults.newWay}
With expression: ${templateResults.expression}
Multi-line: ${templateResults.multiLine}`
    );

    // Demo Destructuring
    const destructuringResults = demoDestructuring();
    addOutput(
        "4. Destructuring",
        "Ekstraksi nilai dari objek dan array",
        `Object basic: ${JSON.stringify(destructuringResults.objectBasic)}
Object renamed: ${JSON.stringify(destructuringResults.objectRenamed)}
Object default: ${destructuringResults.objectDefault}
Object nested: ${JSON.stringify(destructuringResults.objectNested)}
Array basic: ${JSON.stringify(destructuringResults.arrayBasic)}
Array skipped: ${destructuringResults.arraySkipped}
Array with rest: ${JSON.stringify(destructuringResults.arrayRest)}
Swapped variables: ${JSON.stringify(destructuringResults.swapped)}`
    );

    // Demo Spread dan Rest Operators
    const spreadRestResults = demoSpreadRest();
    addOutput(
        "5. Spread dan Rest Operators",
        "Penggunaan ... untuk array dan objek",
        `Spread in array: ${JSON.stringify(spreadRestResults.spreadArray)}
Copy array: ${JSON.stringify(spreadRestResults.copyArray)}
Merged arrays: ${JSON.stringify(spreadRestResults.mergedArrays)}
Spread in object: ${JSON.stringify(spreadRestResults.spreadObject)}
Rest in function (sum): ${spreadRestResults.restSum}
Rest with regular params: ${JSON.stringify(spreadRestResults.restProcess)}`
    );
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript Next Gen Demo Ready!');
});