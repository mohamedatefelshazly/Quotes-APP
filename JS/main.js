var quotes = [
  {
    quote: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
  },
  {
    quote:
      "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
    author: "Marilyn Monroe",
  },
  {
    quote: "So many books, so little time.",
    author: "Frank Zappa",
  },
  {
    quote:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: "Albert Einstein",
  },
  {
    quote: "A room without books is like a body without a soul.",
    author: "Marcus Tullius Cicero",
  },
];
function genRandom() {
  return Math.floor(Math.random() * quotes.length);
}
var randomi, storedi;
function getQuote() {
  while (randomi == storedi) {
    randomi = genRandom();
  }

  storedi = randomi;
  document.getElementById("quoteid").innerHTML =
    `<p>"` +
    quotes[randomi].quote +
    `”</p>
        <p>--` +
    quotes[randomi].author +
    `</p>`;
}
