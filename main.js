document.addEventListener('DOMContentLoaded', () => {
    const setLanguage = (lang) => {
        document.querySelectorAll('h1, h2, p').forEach(element => {
            element.hidden = element.lang !== lang;
        });
    };
    
    // Animation on scroll
    const scrollElements = document.querySelectorAll(".scroll-element");
    
    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;
        return (elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend);
    };
    
    const displayScrollElement = (element) => {
        element.classList.add('scrolled');
    };
    
    const hideScrollElement = (element) => {
        element.classList.remove('scrolled');
    };
    
    const handleScrollAnimation = () => {
        scrollElements.forEach(el => {
            if (elementInView(el, 1.25)) {
                displayScrollElement(el);
            } else {
                hideScrollElement(el);
            }
        })
    }
    
    window.addEventListener('scroll', handleScrollAnimation);
});
