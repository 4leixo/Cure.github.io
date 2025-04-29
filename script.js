
document.addEventListener('DOMContentLoaded', function() {
    // Animação para imagens
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.style.opacity = '0';
        img.style.transition = 'opacity 1s ease-in-out';
    });

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.style.opacity = '1';
                observer.unobserve(img);
            }
        });
    }, {threshold: 0.1});

    images.forEach(img => {
        imageObserver.observe(img);
    });

    // Animação para seções de arte (zigzag)
    const artworkSections = document.querySelectorAll('.artwork');
    const priceSections = document.querySelectorAll('.price-section');
    
    function checkScroll() {
        artworkSections.forEach((section, index) => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight * 0.75) {
                section.style.opacity = '1';
                section.style.transform = 'translateX(0)';
            }
        });
        
        priceSections.forEach((section, index) => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight * 0.75) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Configuração inicial para animação
    artworkSections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transition = 'all 0.8s ease';
        
        // Alterna entre animação da esquerda e direita
        if (index % 2 === 0) {
            section.style.transform = 'translateX(-100px)';
        } else {
            section.style.transform = 'translateX(100px)';
        }
    });
    
    priceSections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transition = 'all 0.8s ease';
        section.style.transform = 'translateY(50px)';
    });
    
    // Verifica scroll ao carregar e durante o scroll
    checkScroll();
    window.addEventListener('scroll', checkScroll);
});