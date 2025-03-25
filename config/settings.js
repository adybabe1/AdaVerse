document.addEventListener("DOMContentLoaded", () => {
    const settingsForm = document.getElementById("settings-form");
    const languageSelect = document.getElementById("language");
    const notificationsCheckbox = document.getElementById("notifications");
    const themeSelect = document.getElementById("theme");
    const mainContainer = document.querySelector("main");

    // Function to load header and footer from external HTML files
    function loadHeaderAndFooter() {
        fetch('../assets/html/header.html')
            .then(response => response.text())
            .then(headerHTML => {
                document.body.insertAdjacentHTML("afterbegin", headerHTML);
            })
            .catch(error => console.error('Error loading header:', error));

        fetch('../assets/html/footer.html')
            .then(response => response.text())
            .then(footerHTML => {
                document.body.insertAdjacentHTML("beforeend", footerHTML);
            })
            .catch(error => console.error('Error loading footer:', error));
    }

    // Load header and footer
    loadHeaderAndFooter();

    // Load saved settings from localStorage
    function loadSettings() {
        const savedLanguage = localStorage.getItem("language");
        const savedNotifications = localStorage.getItem("notifications") === "true";
        const savedTheme = localStorage.getItem("theme");

        if (savedLanguage) languageSelect.value = savedLanguage;
        notificationsCheckbox.checked = savedNotifications;
        if (savedTheme) {
            themeSelect.value = savedTheme;
            applyTheme(savedTheme);
        }
    }

    // Apply selected theme
    function applyTheme(theme) {
        document.body.setAttribute("data-theme", theme);
    }

    // Save settings to localStorage
    settingsForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent form refresh

        const selectedLanguage = languageSelect.value;
        const notificationsEnabled = notificationsCheckbox.checked;
        const selectedTheme = themeSelect.value;

        // Save settings
        localStorage.setItem("language", selectedLanguage);
        localStorage.setItem("notifications", notificationsEnabled);
        localStorage.setItem("theme", selectedTheme);

        applyTheme(selectedTheme);

        alert("Settings saved successfully!");
    });

    // Load settings on page load
    loadSettings();
});
