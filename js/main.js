// Get the button element for toggling dark mode
const btnDarkMode = document.querySelector(".dark-mode-btn");

// 1. Check the dark mode setting at the system level
// If the system preferences have dark mode enabled, activate the appropriate classes
if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    btnDarkMode.classList.add("dark-mode-btn--active");
    document.body.classList.add("dark");
}

// 2. Check the dark mode setting in localStorage
// If dark mode is stored in localStorage, activate it
if (localStorage.getItem('darkMode') === 'dark') {
    btnDarkMode.classList.add("dark-mode-btn--active");
    document.body.classList.add("dark");
// If light mode is stored, deactivate dark mode
} else if (localStorage.getItem("darkMode") === "light") {
    btnDarkMode.classList.remove("dark-mode-btn--active");
    document.body.classList.remove("dark");
}

// Update the theme if system preferences change
window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (event) => {
        // Determine the new color scheme
        const newColorScheme = event.matches ? "dark" : "light";

        if (newColorScheme === "dark") {
            // Activate dark mode and save it to localStorage
            btnDarkMode.classList.add("dark-mode-btn--active");
            document.body.classList.add("dark");
            localStorage.setItem("darkMode", "dark");
        } else {
            // Deactivate dark mode and save it to localStorage
            btnDarkMode.classList.remove("dark-mode-btn--active");
            document.body.classList.remove("dark");
            localStorage.setItem("darkMode", "light");
        }
    });

// Toggle dark mode when the button is clicked
btnDarkMode.onclick = function () {
    // Toggle the class on the button and the body
    btnDarkMode.classList.toggle("dark-mode-btn--active");
    const isDark = document.body.classList.toggle("dark");

    // Save the selected theme to localStorage
    if (isDark) {
        localStorage.setItem("darkMode", "dark");
    } else {
        localStorage.setItem("darkMode", "light");
    }
};
