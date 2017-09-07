// writing initial quote
document.getElementById('quote-text').innerHTML = quote();

// writing random quote from array of quotes by press the button
document.getElementById('quote-button').addEventListener("click", function(event) {	
	// change quote when the button have clicked.
	document.getElementById('quote-text').innerHTML = quote();
});

// tweet out current quote
document.getElementById('twitter-icon-quote').addEventListener("click", function(event) {
	var quoteString = document.getElementById('quote-text').textContent;
	console.log(quoteString);
	window.open("https://twitter.com/intent/tweet?text=" + quoteString);
})

function randomNumber(min, max) {
	min = Math.ceil(min);
  	max = Math.floor(max);
	var randomNumber = Math.floor(Math.random() * (max - min)) + min;

	return randomNumber;
}

function quote() {
	var quote = [
		"Don't cry because it's over, smile because it happened.<br>Dr. Seuss",
		"There is no charm equal to tenderness of heart.<br>Jane Austen",
		"Learning never exhausts the mind.<br>Leonardo da Vinci",
		"There is no charm equal to tenderness of heart.<br>Jane Austen",
		"If you cannot do great things, do small things in a great way.<br>Napoleon Hill",
		"The journey of a thousand miles begins with one step.<br>Lao Tzu",
		"There is only one corner of the universe you can be certain of improving, and that's your own self.<br>Aldous Huxley",
		"Be yourself, everyone else is already taken.<br>Oscar Wilde",
		"A room without books is like a body without a soul.<br>Marcus Tullius Cicero",
		"In three words I can sum up everything I've learned about life: it goes on.<br>Robert Frost"
	];

	var number = randomNumber(0, quote.length);

	return quote[number];
}