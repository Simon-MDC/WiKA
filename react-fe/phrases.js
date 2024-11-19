document.addEventListener('DOMContentLoaded', function() {
    const phrases = [
        "Hola", // Spanish: Hello
        "Bonjour", // French: Hello
        "Guten Tag", // German: Good day
        "Ciao", // Italian: Hello
        "Konnichiwa", // Japanese: Hello
        "안녕하세요", // Korean: Hello
        "你好", // Chinese: Hello
        "Kamusta", // Tagalog: Hello
        "Hej", // Danish: Hello
        "Olá", // Portuguese: Hello
        "Привет", // Russian: Hello
        "Xin chào", // Vietnamese: Hello
        "Bok", // Croatian: Hello
        "Moi", // Finnish: Hello
        "مرحبا", // Arabic: Hello
        "Jambo", // Swahili: Hello
        "Te Amo", // Spanish: I love you
        "Je t'aime", // French: I love you
        "Ti amo", // Italian: I love you
        "Wo ai ni", // Chinese: I love you
        "Aishiteru", // Japanese: I love you
        "사랑해", // Korean: I love you
        "Mahal kita", // Tagalog: I love you
        "Jeg elsker dig", // Danish: I love you
        "Eu te amo", // Portuguese: I love you
        "Я тебя люблю", // Russian: I love you
        "Anh yêu em", // Vietnamese: I love you
        "Volim te", // Croatian: I love you
        "Rakastan sinua", // Finnish: I love you
        "أحبك", // Arabic: I love you
        "Nakupenda", // Swahili: I love you
        "¿Cómo estás?", // Spanish: How are you?
        "Comment ça va?", // French: How are you?
        "Wie geht's?", // German: How are you?
        "Come stai?", // Italian: How are you?
        "Ogenki desu ka?", // Japanese: How are you?
        "잘 지냈어요?", // Korean: How have you been?
        "Kamusta ka?", // Tagalog: How are you?
        "Hvordan har du det?", // Danish: How are you?
        "Como você está?", // Portuguese: How are you?
        "Как дела?", // Russian: How are you?
        "Bạn khỏe không?", // Vietnamese: How are you?
        "Kako si?", // Croatian: How are you?
        "Miten menee?", // Finnish: How's it going?
        "كيف حالك؟", // Arabic: How are you?
        "Habari yako?", // Swahili: How are you?
        "¿Quieres salir conmigo?", // Spanish: Do you want to go out with me?
        "Veux-tu sortir avec moi?", // French: Do you want to go out with me?
        "Willst du mit mir ausgehen?", // German: Do you want to go out with me?
        "Vuoi uscire con me?", // Italian: Do you want to go out with me?
        "Watashi to deto shimasen ka?", // Japanese: Would you like to go on a date with me?
        "나랑 데이트할래?", // Korean: Do you want to go out with me?
        "Gusto mo bang lumabas tayo?", // Tagalog: Do you want to go out with me?
        "Vil du gå ud med mig?", // Danish: Do you want to go out with me?
        "Quer sair comigo?", // Portuguese: Do you want to go out with me?
        "Ты хочешь пойти со мной на свидание?", // Russian: Do you want to go out with me?
        "Em muốn đi chơi với anh không?", // Vietnamese: Do you want to go out with me?
        "Hoćeš li izaći sa mnom?", // Croatian: Do you want to go out with me?
        "Haluaisitko lähteä kanssani ulos?", // Finnish: Would you like to go out with me?
        "هل تريد الخروج معي؟", // Arabic: Do you want to go out with me?
        "Ungependa kutoka na mimi?" // Swahili: Would you like to go out with me?
    ];

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function createPhraseElement(text) {
        const phraseElement = document.createElement('div');
        phraseElement.textContent = text;
        phraseElement.style.position = 'absolute';
        phraseElement.style.top = `${getRandomInt(10, 80)}%`;
        phraseElement.style.left = `${getRandomInt(10, 80)}%`;
        phraseElement.style.fontSize = `${getRandomInt(1, 2)}em`;
        phraseElement.style.color = `hsl(40, 100%, 50%)`; // Use an orange hue to complement teal background
        phraseElement.style.opacity = '0';
        phraseElement.style.transition = 'opacity 1s ease-in-out';
        phraseElement.style.textShadow = '2px 2px 5px rgba(0, 0, 0, 0.5)'; // Add shadow to the text
        return phraseElement;
    }

    function displayRandomPhrase() {
        const phrasesContainer = document.getElementById('phrases-container');
        const phrase = phrases[getRandomInt(0, phrases.length - 1)];
        const phraseElement = createPhraseElement(phrase);
        phrasesContainer.appendChild(phraseElement);
        setTimeout(() => {
            phraseElement.style.opacity = '1';
            setTimeout(() => {
                phraseElement.style.opacity = '0';
                setTimeout(() => {
                    phrasesContainer.removeChild(phraseElement);
                }, 1000);
            }, 3000);
        }, 100);
    }

    function managePhrases() {
        const currentPhrases = [];
        setInterval(() => {
            if (currentPhrases.length < 5) {
                displayRandomPhrase();
                currentPhrases.push(true);
                setTimeout(() => {
                    currentPhrases.shift();
                }, 5000);
            }
        }, 1000);
    }

    managePhrases();
});
