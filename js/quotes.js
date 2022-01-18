const quotes = [
    {
      quote: "Be yourself; everyone else is already taken.",
      author: "Oscar Wilde",
    },
    {
      quote:
        "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
      author: "Albert Einstein",
    },
    {
      quote: "“So many books, so little time.”",
      author: "Frank Zappa",
    },
    {
      quote: "A room without books is like a body without a soul.",
      author: "Marcus Tullius Cicero",
    },
    {
      quote: "Be the change that you wish to see in the world.",
      author: "Mahatma Gandhi",
    },
    {
      quote:
        "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
      author: "J.K. Rowling",
    },
    {
      quote: "Everything you can imagine is real.",
      author: "Pablo Picasso",
    },
    {
      quote:
        "You can never get a cup of tea large enough or a book long enough to suit me.",
      author: "C.S. Lewis",
    },
    {
      quote: "One good thing about music, when it hits you, you feel no pain.",
      author: "Bob Marley",
    },
    {
      quote:
        "Not all of us can do great things. But we can do small things with great love.",
      author: "Mother Teresa",
    },
  ];

const quote = document.querySelector('.quote span:first-child');
const author = document.querySelector('.quote span:last-child');


const randomNum = Math.floor(Math.random() * quotes.length);
quote.innerText = quotes[randomNum].quote;
author.innerText = quotes[randomNum].author;


