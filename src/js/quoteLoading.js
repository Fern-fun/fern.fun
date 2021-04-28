$(document).ready(function () {
	quotation = [
		"Any fool can write code that a computer can understand. Good programmers write code that humans can understand.”  Martin Fowler",
		"First, solve the problem. Then, write the code.”  John Johnson",
		"Experience is the name everyone gives to their mistakes.”  Oscar Wilde",
		"In order to be irreplaceable, one must always be different”  Coco Chanel",
		"Java is to JavaScript what car is to Carpet.”  Chris Heilmann",
		"Knowledge is power.”  Francis Bacon",
		"Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code.”  Dan Salomon",
		"Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away.”  Antoine de Saint-Exupery",
		"Ruby is rubbish! PHP is phpantastic!”  Nikita Popov",
		"Code is like humor. When you have to explain it, it’s bad.”  Cory House",
		"Fix the cause, not the symptom.”  Steve Maguire",
		"Optimism is an occupational hazard of programming: feedback is the treatment. “ Kent Beck",
		"When to use iterative development? You should use iterative development only on projects that you want to succeed.”  Martin Fowler",
		"Simplicity is the soul of efficiency.”  Austin Freeman",
		"Before software can be reusable it first has to be usable.”  Ralph Johnson",
		"Make it work, make it right, make it fast.”  Kent Beck",
		"The only way to learn a new programming language is by writing programs in it.”  Dennis Ritchie",
		"Sometimes it's better to leave something alone, to pause, and that's very true of programming.”  Joyce Wheeler",
		"The best error message is the one that never shows up.”  Thomas Fuchs",
		"Don't write better error messages, write code that doesn't need them.”  Jason C. McDonald"
	];

	var a = quotation[Math.floor(Math.random() * quotation.length)].split("”");
	console.log(a[0] + " elo elo " + a[1]);
	$("#quote").text(a[0]);
	$("#author").text(a[1]);
});
