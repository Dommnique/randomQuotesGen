let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quotes = [
    "Every new day is an opportuinty to grow",
    "I'm a lot more capable than i know",
    "My negative thoughts are not me, i'm more than them",
    "I have created a sustainable level of peace",
    "I can change the world by simply spreading kindness",
    "I make a difference in this world",
    "I have a beautiful life ahead of me"
];

console.log(quotes.length);

btn.addEventListener('click', function () {
    var randomQuotes = quotes[Math.floor(Math.random() * quotes.length)]
    output.innerHTML = randomQuotes;
})