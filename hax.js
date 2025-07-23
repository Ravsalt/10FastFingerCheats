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
    start_countdown();
    console.log(`Cheat successful!`);
