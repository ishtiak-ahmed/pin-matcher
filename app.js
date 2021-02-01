function print(result) {
    console.log(result);
}

print('app started');

const Buttons = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'C', '<']

// DOM selection
let generateBtn = document.querySelector('.generate-btn');
let calcArea = document.querySelector('.calc-body');
const userPin = document.getElementById('userPin');
const sumbitBtn = document.querySelector('.submit-btn');

// Pin
let userInput = '';
let generatedPin = '';
let tryLeft = 3;


// Event Listener
calcArea.addEventListener('click', (event) => {
    let btnValue = (event.target.innerText);
    if (Buttons.indexOf(btnValue) >= 0) {
        takeInput(btnValue);
    }
});

sumbitBtn.addEventListener('click', () => {
    print('pin is verifying..');
    if (userInput == generatedPin) {
        print('pin matched')
    } else {
        print('Pin didnt match');
        tryLeft--;
        userInput = '';
        userPin.value = '';
        if (tryLeft == 0) {
            alert('verification failed. Try again.')
        }
    }
})


generateBtn.addEventListener('click', () => {
    generatedPin = generatePin();
    print(generatedPin);
})

const generatePin = () => {
    let pin = Math.ceil(Math.random() * 10000) + '';
    if (pin.length < 4) {
        generatePin();
    } else return pin;
}

function takeInput(value) {
    switch (value) {
        case 'C':
            userInput = '';
            break;
        case '<':
            userInput = userInput.slice(0, -1);
            break;
        default:
            if (userInput.length >= 4) {
                return;
            } else {
                (userInput += value);
            };
            break;
    }
    userPin.value = userInput;
    print(userInput);
}