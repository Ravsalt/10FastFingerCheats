# 10FastFingers Cheat Script

This repository contains a JavaScript cheat for the typing test on 10fastfingers.com.

## Features

*   **Instant Completion:** Finishes the typing test instantly.
*   **High WPM Score:** Achieves a very high words-per-minute (WPM) score.
*   **Easy to Use:** Simply copy and paste the script into your browser's developer console.

## How to Use

1.  Go to the [10fastfingers typing test](https://10fastfingers.com/typing-test/english).
2.  Open the developer console in your browser. This is usually done by pressing `F12` or `Ctrl+Shift+I` (`Cmd+Option+I` on Mac).
3.  Open the `cheat.js` file in this repository.
4.  Copy the entire content of the `cheat.js` file.
5.  Paste the script into the developer console.
6.  Press `Enter` to run the script.

The script will automatically and instantly complete the test for you.

## How It Works

The script works by directly manipulating the internal state of the 10fastfingers game. It doesn't simulate keystrokes, but rather injects the entire text of the test into the game's input stream and then forces the game to end. This results in an instant completion with a perfect score.

Here is the core logic of the cheat:

```javascript
// Provide all the words to the game's input stream.
user_input_stream = words.join(" ") + " ";

// Set the statistics to reflect a perfect performance.
error_correct = words.length;
error_wrong = 0;
error_keystrokes = words.join("").length + words.length; // Total chars + spaces
correction_counter = 0;

// End the game timer and trigger the end of the game.
countdown = 0;
start_countdown();
```

## Contributing

Contributions are welcome! If you have any ideas for how to improve the script, feel free to open an issue or submit a pull request.

## Disclaimer

This script is for educational purposes only. Using it may go against the terms of service of 10fastfingers.com. Use it at your own risk.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.