const quotes = [
    "Die beste Zeit für einen Neuanfang ist immer jetzt. – Unbekannt",   
    "Glaube an dich selbst und alle deine Träume werden wahr. – Unbekannt",
    "Glaube an dich selbst und alles ist möglich – Unbekannt",
    "Der einzige Weg zu großartiger Arbeit ist, Liebe dazu zu haben“ – Steve Jobs",
    "Der Weg ist das Ziel“ – Konfuzius",
    "Jeder Tag ist eine neue Chance“ – Unbekannt",
    "Tu es oder tu es nicht, es gibt kein Versuchen“ – Yoda",
    "Veränderung beginnt bei dir“ – Unbekannt",
    "Sei die Veränderung, die du sehen willst“ – Mahatma Gandhi",
    "Kleine Schritte bringen große Fortschritte“ – Unbekannt",
    "Lebe den Moment“ – Unbekannt",
    "Mach jeden Tag zu deinem Meisterwerk“ – John Wooden"
];

function newQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').textContent = quotes[randomIndex];
}

// Zeigt einen Spruch beim Laden der Seite an
newQuote();
