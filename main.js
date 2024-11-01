// Language Selector
document.addEventListener('DOMContentLoaded', function() {
    const languageSelect = document.getElementById('language-select');
    languageSelect.addEventListener('change', function() {
        const selectedLanguage = languageSelect.value;
        // Logic for changing website language can be added here
        console.log(`Selected language: ${selectedLanguage}`);
    });
});
