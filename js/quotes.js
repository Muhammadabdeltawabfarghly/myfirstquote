
function RandomQuote() {
    var textQoute = document.getElementById('textQoute');
    var nameQoute = document.getElementById('nameQoute');
    var RandomQuote = document.getElementById('RandomQuote');
    //var RandomQuote = [];

    textQoute = [`“Be yourself; everyone else is already taken.”` , "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”" , "“So many books, so little time.”"
    ];
    nameQoute = ["― Oscar Wilde" , "― Marilyn Monroe" , "― Frank Zappa"];
    var randomQuote = Math.floor(Math.random() * textQoute.length);
    var randomQuote = Math.floor(Math.random() * nameQoute.length);

   document.getElementById("textQoute").innerHTML = textQoute[randomQuote];
   document.getElementById("nameQuote").innerHTML = nameQoute[randomQuote];


}






