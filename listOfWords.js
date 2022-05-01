function displayWords() {
	let word;
	let words = [];
	while (word !== 'stop') {
		word = prompt('enter a word');
		words.push(word);
	}
	for (let i = 0; i < words.length - 1; i++) {
		console.log(words[i]);
	}
}

displayWords();
