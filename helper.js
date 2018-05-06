window.addEventListener('scroll', () => {
	if (window.pageYOffset > 0) {
		document.getElementById('nav').classList.add('floating');
	} else {
		document.getElementById('nav').classList.remove('floating');
	}

	let spies = document.querySelectorAll('[spy]');
	// spies.sort((a,b) => {return a.getBoundingClientRect().top - b.getBoundingClientRect().top});
	let currentSpied = null;

	for(let spy of spies) {
		if(spy.getBoundingClientRect().top - 100 < 0) {
			currentSpied = spy;
		} else {
			break;
		}
	}
	document.getElementById('spy').innerText = currentSpied.getAttribute('spy');
});