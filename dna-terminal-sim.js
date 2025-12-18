// DNA Film Project - Terminal Simulation
// Interactive JavaScript recreation of the C++ terminal experience

const terminalOutput = document.getElementById('terminal-output');
const terminalInput = document.getElementById('terminal-input');
const inputContainer = document.getElementById('terminal-input-container');

let userCity = '';
let userName = '';
let currentStep = 0;

// Utility: Pause execution
function pause(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Utility: Type out text with delay
async function typeOut(text, delay = 40) {
    for (let char of text) {
        terminalOutput.textContent += char;
        await pause(delay);
        scrollToBottom();
    }
    terminalOutput.textContent += '\n';
    scrollToBottom();
}

// Utility: Scroll to bottom of terminal
function scrollToBottom() {
    const preview = document.getElementById('terminal-preview');
    if (preview) {
        preview.scrollTop = preview.scrollHeight;
    }
}

// Show input field and wait for user input
function waitForInput() {
    return new Promise(resolve => {
        inputContainer.style.display = 'flex';
        terminalInput.value = '';
        terminalInput.focus();

        const handleSubmit = (e) => {
            if (e.key === 'Enter') {
                const value = terminalInput.value.trim();
                if (value) {
                    // Echo user input in terminal
                    terminalOutput.textContent += `> ${value}\n`;
                    inputContainer.style.display = 'none';
                    terminalInput.removeEventListener('keydown', handleSubmit);
                    scrollToBottom();
                    resolve(value);
                }
            }
        };

        terminalInput.addEventListener('keydown', handleSubmit);
    });
}

// Main terminal sequence
async function runTerminal() {
    await pause(500);

    // Boot sequence
    terminalOutput.textContent = '#############################################\n';
    terminalOutput.textContent += '#                                           #\n';
    terminalOutput.textContent += '#       DNA FILM PROJECT - TERMINAL         #\n';
    terminalOutput.textContent += '#                                           #\n';
    terminalOutput.textContent += '#############################################\n\n';
    scrollToBottom();
    await pause(700);

    await typeOut('>>> INITIALIZING SYSTEM BOOT...', 40);
    await pause(500);
    await typeOut('>>> LOADING MEMORY BANKS [OK]', 40);
    await pause(500);
    await typeOut('>>> SYNCHRONIZING VISUAL MODULE [OK]', 40);
    await pause(500);
    await typeOut('>>> WARNING: TIMELINE CORRUPTION DETECTED', 40);
    await pause(800);

    // Question 1: Location
    terminalOutput.textContent += '\n';
    await typeOut('SYSTEM QUERY: Where am I?');
    userCity = await waitForInput();
    await typeOut('...Processing input...');
    await pause(600);
    await typeOut(`Location confirmed: ${userCity}`);

    // Question 2: Identity
    terminalOutput.textContent += '\n';
    await typeOut('IDENTITY REQUIRED: Who are you?');
    userName = await waitForInput();
    await typeOut(`Identity stored: ${userName}`);

    // Name guessing
    terminalOutput.textContent += '\n';
    await typeOut('Your turn to guess my name? (input text)');
    const nameGuess = await waitForInput();

    if (nameGuess.toLowerCase() === 'dna') {
        await typeOut('ACCESS GRANTED: Correct. I am DNA.');
    } else {
        await typeOut(`ACCESS DENIED: "${nameGuess}" does not match system records.`);
    }

    // First time meeting
    terminalOutput.textContent += '\n';
    await typeOut('Is this the first time we meet? (yes/no)');
    const answer = await waitForInput();

    if (answer.toLowerCase() === 'yes' || answer.toLowerCase() === 'y') {
        await typeOut(`Response logged: New connection with ${userName}.`);
        await typeOut('>>> Nice to meet you.');
    } else {
        await typeOut('Response logged: Returning user detected.');
        await typeOut(`>>> Welcome back, ${userName}.`);
    }

    // Branching choice
    terminalOutput.textContent += '\n';
    await typeOut(`SCENE LOADED: CRT chamber in ${userCity}`);
    await typeOut('Neon static hums around you. Choose an action:');
    await typeOut('1) Touch the glowing terminal.');
    await typeOut('2) Listen to the static.');
    await typeOut('3) Speak your name into the dark.');

    const choice = await waitForInput();
    terminalOutput.textContent += '\n';

    switch (choice) {
        case '1':
            await typeOut('>>> You touch the glass. Lines of code ripple like liquid.');
            break;
        case '2':
            await typeOut('>>> The static sharpens into whispers... they chant your name.');
            break;
        case '3':
            await typeOut('>>> Your voice echoes, then returns as a distorted recording...');
            await typeOut(`"${userName}... ${userName}..."`);
            break;
        default:
            await typeOut('>>> Invalid input. Reality glitches for a moment.');
            break;
    }

    await pause(1000);
    terminalOutput.textContent += '\n';
    await typeOut('>>> END OF SESSION <<<');
    await pause(500);

    // Offer restart
    terminalOutput.textContent += '\n\n';
    await typeOut('[Press ENTER to restart]');
    await waitForInput();

    // Reset and restart
    terminalOutput.textContent = '';
    runTerminal();
}

// Auto-start terminal on page load
if (terminalOutput) {
    runTerminal();
}
