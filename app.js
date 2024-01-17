let btn = document.querySelector('.new');

let quote = document.querySelector('.quote');

let person = document.querySelector('.person');


const quotes = [
    {quote: "Be yourself; everyone else is already taken",
    person:'Oscar Wilde'
    },
    {quote:'“So many books, so little time.”',
    person:' Frank Zappa'
    },
    {quote:"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    person:' Albert Einstein'
    },
    {quote:'“A room without books is like a body without a soul.”',
    person:'Marcus Tullius Cicero'
    },
    {quote:"“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
    person:'Bernard M. Baruch'
    },
    {quote:"“You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.”",
    person:'William W. Purkey'
    },
    {quote:"“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
    person:' Dr. Seuss'
    },
    {quote:"“You only live once, but if you do it right, once is enough.”",
    person:' Mae West'
    },
    {quote:"“In three words I can sum up everything I've learned about life: it goes on.”",
    person:'Robert Frost'
    },
    {quote:"“Don't walk in front of me… I may not follow Don't walk behind me… I may not lead Walk beside me… just be my friend”",
    person:' Albert Camus'
    },
    {quote:"“If you tell the truth, you don't have to remember anything.”",
    person:' Mark Twain'
    },
    {quote:"“Friendship ... is born at the moment when one man says to another \"What! You too? I thought that no one but myself . . .”",
    person:'C.S. Lewis, The Four Loves'
    },
    {quote:"“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”",
    person:'Maya Angelou'
    },
    {quote:"“A friend is someone who knows all about you and still loves you.”",
    person:'Elbert Hubbard'
    },
    {quote:"“To live is the rarest thing in the world. Most people exist, that is all.”",
    person:'Oscar Wilde'
    },
    {quote:"“I am so clever that sometimes I don't understand a single word of what I am saying.”",
    person:'Oscar Wilde'
    }
];



btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;

})
