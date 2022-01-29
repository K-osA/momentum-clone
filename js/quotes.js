const quotes = [
  {
    quote: "Be yourself and people will like you.",
    author: "Jeff Kinney",
  },
  {
    quote: "Time you enjoy wasting is not wasted time.",
    author: "Marthe Troly-Curtin",
  },
  {
    quote:
      "It is only with the heart that one can see rightly; what is essential is invisible to the eye.",
    author: "Antoine de Saint-Exupéry",
  },
  {
    quote: "The worst enemy to creativity is self-doubt.",
    author: "Sylvia Plath",
  },
  {
    quote:
      "Hoping for the best, prepared for the worst, and unsurprised by anything in between.",
    author: "Maya Angelou",
  },
  {
    quote: "And, now that you don’t have to be perfect you can be good.",
    author: "John Steinbeck",
  },
  {
    quote: "A friend may be waiting behind a stranger’s face.",
    author: "Maya Angelou",
  },
  {
    quote: "Even the darkest night will end and the sun will rise.",
    author: "Victor Hugo",
  },
  {
    quote: "Each of us is more than the worst thing we’ve ever done.",
    author: "Bryan Stevenson",
  },
  {
    quote:
      "It was all very well to be ambitious, but ambition should not kill the nice qualities in you.",
    author: "Noel Streatfeild",
  },
];
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
