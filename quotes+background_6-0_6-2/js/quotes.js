const quotes = [
    {quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",},
    {quote: "Only I can change me life, no one can do it for me.",
    author: "Carol Burnett",},
    {quote: "Life is unfair, get used to it.",
    author: "Bill Gates",},
    {quote: "Life is a mountain. Your goal is to find your path, not to reach the top.",
    author: "Maxime Lagacé",},
    {quote: "Great minds have purposes, others have wishes.",
    author: "Washington Irving",},
    {quote: "All we have is now.",
    author: "Anonymous",},
    {quote: "Believe in yourself.",
    author: "Anonymous",},
    {quote: "It's about time. Time to shine.",
    author: "Mark Lee",},
    {quote: "God gives every bird its food, but He does not throw it into its nest",
    author: "Josiah Gilbert Holland",},
    {quote: "Being thankful and giving thanks is one of the keys to be happy.",
    author: "Mark Lee",}
]

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");

const quoteIdx = Math.floor(Math.random() * quotes.length);
const todaysQuote = quotes[quoteIdx];

quote.innerHTML = todaysQuote.quote;
author.innerHTML = todaysQuote.author;