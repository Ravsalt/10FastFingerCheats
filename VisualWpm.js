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
