/**
 * 10FastFingers Instant Cheat (Polished)
 *
 * How to use:
 * 1. Go to the 10fastfingers typing test page.
 * 2. Open the developer console in your browser (usually F12 or Ctrl+Shift+I).
 * 3. Copy and paste this entire script into the console.
 * 4. Press Enter to run the script.
 *
 * This script will instantly complete the typing test with a very high score.
 */
(function() {
    'use strict';

    // Check if the script is running on the correct page.
    if (typeof words === 'undefined' || !Array.isArray(words) || !document.getElementById('inputfield')) {
        console.error("This script must be run on a 10fastfingers typing test page.");
        alert("This script must be run on a 10fastfingers typing test page.");
        return;
    }

    // --- Instant Completion Logic ---
    // This manipulates the game's internal state to finish the test instantly
    // with a perfect score.

    // 1. Provide all the words to the game's input stream.
    user_input_stream = words.join(" ") + " ";

    // 2. Set the statistics to reflect a perfect performance.
    error_correct = words.length;
    error_wrong = 0;
    error_keystrokes = words.join("").length + words.length; // Total chars + spaces
    correction_counter = 0;

    // 3. End the game timer.
    countdown = 0;

    // 4. Start the countdown sequence, which will now immediately end
    //    and process the results because countdown is 0.
    if (typeof start_countdown === 'function') {
        start_countdown();
    } else {
        console.error("The 'start_countdown' function was not found. The cheat may not work.");
        return;
    }

    // --- Visual WPM Update ---
    // This is a fallback to ensure the WPM is displayed correctly, as the
    // game might not update it visually after the instant completion.
    setTimeout(() => {
        const wpmElement = document.getElementById('wpm');
        if (wpmElement) {
            // Calculate WPM. A "word" is defined as 5 keystrokes.
            const wpm = Math.round(error_keystrokes / 5);
            wpmElement.innerHTML = `<strong>${wpm} WPM</strong><small>(words per minute)</small>`;
            console.log(`Cheat successful! Final WPM: ${wpm}`);
        }
    }, 500); // A small delay to allow the game to process the result.

})();