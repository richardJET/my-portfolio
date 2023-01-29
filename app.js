const options = {
    root: document.querySelector('#scrollArea'),
    rootMargin: '0px',
    threshold: 0.3
}
const animation = (entries, observer) => {
    entries.forEach(entry=>{
        if(entry.intersectionRatio > 0){
            if(entry.target.className !== 'projects'){
                entry.target.style.opacity = 100;
                entry.target.classList.add('slide-up');

            }else{
                entry.target.children[0].classList.add('slide-up');
                entry.target.children[0].style.opacity = 100;
            }
        }
    })
    
};

const observer = new IntersectionObserver(animation, options);

const sections = document.querySelectorAll('section')
sections.forEach(section => {
    observer.observe(section);
})