document.addEventListener("DOMContentLoaded", function() {
    const projectNameSelector = '.project-name';
    const highlightEffectSelector = '.highlight-effect';
    const leftUnderlineAnimationSelector = '.left-underline-animation';
    const contactContainerHeaderSelector = '.contact-container-header';
    const contentHeaderSelector = '.content-header';

    const elementsToObserve = [
        ...document.querySelectorAll(projectNameSelector),
        ...document.querySelectorAll(highlightEffectSelector),
        ...document.querySelectorAll(leftUnderlineAnimationSelector),
        ...document.querySelectorAll(contactContainerHeaderSelector),
        ...document.querySelectorAll(contentHeaderSelector)
    ];

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 // Adjusted for testing
    };

    const handleIntersection = (entries, observer) => {
        entries.forEach(entry => {
            console.log('Intersecting:', entry.isIntersecting, entry.target);

            if (entry.isIntersecting) {
                // Exclude the '.project-name', '.contact-container-header', and '.content-header' from the delay
                if (!entry.target.classList.contains('project-name') && 
                    !entry.target.classList.contains('contact-container-header') && 
                    !entry.target.classList.contains('content-header')) {
                    // Delay the addition of the 'visible' class by 2 seconds for other elements
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, 1500); // 2000ms = 2 seconds
                } else {
                    // For '.project-name', '.contact-container-header', and '.content-header', add the class immediately (no delay)
                    entry.target.classList.add('visible');
                }

                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    elementsToObserve.forEach(element => {
        observer.observe(element);
    });
});
