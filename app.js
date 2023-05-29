const options = {
    root: document.querySelector('#scrollArea'),
    rootMargin: '0px',
    threshold: 0.3
}
const animation = (entries, observer) => {
    entries.forEach(entry => {
        if(entry.intersectionRatio > 0){
            if(entry.target.classList[0] === 'wrapper'){
                entry.target.classList.add('slide-up');
                entry.target.style.opacity = 1;
            } else{
                entry.target.parentNode.children[0].classList.add('slide-up-projects');
                entry.target.classList.add('slide-up');
                entry.target.parentNode.children[0].style.opacity = 1;
                entry.target.style.opacity = 1;
            }
        }
    })  
};

const observer = new IntersectionObserver(animation, options);

const sections = document.querySelectorAll('section .wrapper');
sections.forEach(section => {
    if(section.parentNode.className !== 'projects'){
        observer.observe(section);
    } else{
        observer.observe(section.children[1]);
        observer.observe(section.children[2]);
        observer.observe(section.children[3]);
        observer.observe(section.children[4]);
        observer.observe(section.children[5]);
    }
})

const mediaQuery = window.matchMedia('(max-width: 768px)')
if (mediaQuery.matches) {
    options.threshold = 0.2;
}

