window.addEventListener('scroll', () => {
    if(window.pageYOffset > 0){
        document.getElementById('nav').classList.add('floating');
    } else {
        document.getElementById('nav').classList.remove('floating');
    }
});