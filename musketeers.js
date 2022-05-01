let musketeers = ['Athos', 'Porthos', 'Aramis'];

for (let i = 0; i < musketeers.length; i++) {
	console.log(musketeers[i]);
}

musketeers.push("D'artagnan");

musketeers.forEach(musketeer => console.log(musketeer));

musketeers = musketeers.filter(item => item !== 'Aramis');

for (const item of musketeers) {
	console.log(item);
}
