window.addEventListener('scroll', () => {
	if (window.pageYOffset > 0) {
		document.getElementById('nav').classList.add('floating');
	} else {
		document.getElementById('nav').classList.remove('floating');
	}

	let spies = document.querySelectorAll('[spy]');
	let currentSpied = null;

	for(let spy of spies) {
		if(spy.getBoundingClientRect().top - 100 < 0) {
			currentSpied = spy;
		} else {
			break;
		}
	}
	document.getElementById('spy').innerText = currentSpied.getAttribute('spy');

	let menuItems = document.querySelectorAll('.sub-menu > a');

	for(let item of menuItems) {
		if(item.getAttribute('href') === `#${currentSpied.id}`){
			item.classList.add('active');
		} else {
			item.classList.remove('active');
		}
	}
});

function toggleModal(modalId) {
	document.getElementById(modalId).classList.toggle('active');
}

window.addEventListener('load', event => {
	const modalWraps = document.querySelectorAll('.modal-wrap');

	for(let wrap of modalWraps) {
		wrap.addEventListener('click', event => {
			if (event.target === wrap) {
				event.target.classList.toggle('active');
			}
		});
	}

	const smoothScrollers = document.querySelectorAll('.smooth-scroll');

	for(let el of smoothScrollers) {
		el.addEventListener('click', event => {
			event.preventDefault();
			
			const scrollTo = document.querySelector(el.getAttribute('href'));
			window.scrollTo({
				behavior: 'smooth',
				top: scrollTo.offsetTop
			});
		});
	}
});