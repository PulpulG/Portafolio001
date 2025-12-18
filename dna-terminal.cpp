#include <iostream>
#include <thread>
#include <chrono>
#include <cstdlib>
using namespace std;

// Pause for timing
void pause(int ms) {
    this_thread::sleep_for(chrono::milliseconds(ms));
}

// Typewriter effect
void typeOut(string text, int delay=40) {
    for (char c : text) {
        cout << c << flush;
        pause(delay);
    }
    cout << endl;
}

// ANSI color codes for CRT effect
string green = "\033[32m";
string bold  = "\033[1m";
string reset = "\033[0m";

int main() {
    // Clear screen (Windows = "cls")
    system("clear");

    // Simulate CRT flicker boot
    cout << green << bold;
    cout << "#############################################" << endl;
    cout << "#                                           #" << endl;
    cout << "#       DNA FILM PROJECT - TERMINAL         #" << endl;
    cout << "#                                           #" << endl;
    cout << "#############################################" << reset << endl;
    pause(700);

    typeOut(green + ">>> INITIALIZING SYSTEM BOOT..." + reset, 40);
    pause(500);
    typeOut(green + ">>> LOADING MEMORY BANKS [OK]" + reset, 40);
    pause(500);
    typeOut(green + ">>> SYNCHRONIZING VISUAL MODULE [OK]" + reset, 40);
    pause(500);
    typeOut(green + ">>> WARNING: TIMELINE CORRUPTION DETECTED" + reset, 40);
    pause(800);

    // Question 1
    string city;
    typeOut(green + "SYSTEM QUERY: Where am I?" + reset);
    cin >> city;
    typeOut("...Processing input...");
    pause(600);
    typeOut("Location confirmed: " + bold + city + reset);

    // Question 2
    string playerName;
    typeOut("\nIDENTITY REQUIRED: Who are you?");
    cin >> playerName;
    typeOut("Identity stored: " + playerName);

    // Name guessing
    string nameGuess;
    typeOut("\nYour turn to guess my name? (input text)");
    cin >> nameGuess;

    if (nameGuess == "DNA" || nameGuess == "dna") {
        typeOut("ACCESS GRANTED: Correct. I am DNA.");
    } else {
        typeOut("ACCESS DENIED: \"" + nameGuess + "\" does not match system records.");
    }

    // First time meeting
    string answer;
    typeOut("\nIs this the first time we meet? (yes/no)");
    cin >> answer;

    if (answer == "yes" || answer == "y") {
        typeOut("Response logged: New connection with " + playerName + ".");
        typeOut(">>> Nice to meet you.");

    } else {
        typeOut("Response logged: Returning user detected.");
        typeOut(">>> Welcome back, " + playerName + ".");
    }

    // Branching choice
    int choice;
    typeOut("\nSCENE LOADED: CRT chamber in " + city);
    typeOut("Neon static hums around you. Choose an action:");
    typeOut("1) Touch the glowing terminal.");
    typeOut("2) Listen to the static.");
    typeOut("3) Speak your name into the dark.");
    cin >> choice;

    switch (choice) {
        case 1:
            typeOut(">>> You touch the glass. Lines of code ripple like liquid.");
            break;
        case 2:
            typeOut(">>> The static sharpens into whispers... they chant your name.");
            break;
        case 3:
            typeOut(">>> Your voice echoes, then returns as a distorted recording...");
            typeOut("\"" + playerName + "... " + playerName + "...\"");
            break;
        default:
            typeOut(">>> Invalid input. Reality glitches for a moment.");
            break;
    }

    pause(1000);
    typeOut("\n>>> END OF SESSION <<<");
    pause(500);

    cout << reset << endl;
    return 0;
}
