// Quotes database
const quotes = {
    science: [
        "The important thing is not to stop questioning. Curiosity has its own reason for existing. - Albert Einstein",
        "Science is a way of thinking much more than it is a body of knowledge. - Carl Sagan",
        "The good thing about science is that it’s true whether or not you believe in it. - Neil deGrasse Tyson",
        "Somewhere, something incredible is waiting to be known. - Carl Sagan",
        "Equipped with his five senses, man explores the universe around him and calls the adventure Science. - Edwin Hubble",
        "Science and everyday life cannot and should not be separated. - Rosalind Franklin",
        "Imagination will often carry us to worlds that never were, but without it we go nowhere. - Carl Sagan",
        "Science is the great antidote to the poison of enthusiasm and superstition. - Adam Smith",
        "The more I study science, the more I believe in God. - Albert Einstein",
        "In science, there are no shortcuts to truth. - Louis Pasteur"
    ],
    inspiration: [
        "The best way to get started is to quit talking and begin doing. - Walt Disney",
        "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty. - Winston Churchill",
        "Don’t let yesterday take up too much of today. - Will Rogers",
        "You learn more from failure than from success. Don’t let it stop you. Failure builds character. - Unknown",
        "It’s not whether you get knocked down, it’s whether you get up. - Vince Lombardi",
        "People who are crazy enough to think they can change the world, are the ones who do. - Rob Siltanen",
        "We may encounter many defeats but we must not be defeated. - Maya Angelou",
        "Knowing is not enough; we must apply. Wishing is not enough; we must do. - Johann Wolfgang Von Goethe",
        "Imagine your life is perfect in every respect; what would it look like? - Brian Tracy",
        "Whether you think you can or think you can’t, you’re right. - Henry Ford"
    ],
    
};

let currentCategory = 'science';
let currentIndex = 0;

// Change category
function changeCategory() {
    currentCategory = document.getElementById('category').value;
    currentIndex = 0;
    showQuote();
}

// Show current quote
function showQuote() {
    document.getElementById('quote-text').textContent = quotes[currentCategory][currentIndex];
}

// Next quote
function nextQuote() {
    currentIndex = (currentIndex + 1) % quotes[currentCategory].length;
    showQuote();
}

// Previous quote
function prevQuote() {
    currentIndex = (currentIndex - 1 + quotes[currentCategory].length) % quotes[currentCategory].length;
    showQuote();
}

// Random quote
function randomQuote() {
    currentIndex = Math.floor(Math.random() * quotes[currentCategory].length);
    showQuote();
}

// Dark/Light mode toggle
function toggleTheme() {
    document.body.classList.toggle('dark');
}

// Font size adjustment
let currentFontSize = 20;

function increaseFontSize() {
    currentFontSize += 2;
    document.getElementById('quote-text').style.fontSize = currentFontSize + 'px';
}

function decreaseFontSize() {
    if (currentFontSize > 10) {
        currentFontSize -= 2;
        document.getElementById('quote-text').style.fontSize = currentFontSize + 'px';
    }
}

// Initialize with first quote
showQuote();
