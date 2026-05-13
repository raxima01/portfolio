document.querySelectorAll('nav ul li, .btn-explore').forEach(element => {
    element.addEventListener('click', (e) => {
        // Əgər düyməyə basılıbsa, birbaşa layihələrə getsin
        if (e.target.classList.contains('btn-explore')) {
            document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
            return;
        }

        // Menyu linkləri üçün
        const text = e.target.innerText.trim();
        
        const sections = {
            'Home': 0, // Səhifənin ən başı
            'Certificates': '#certificates',
            'About Me': '#about',
            'Contact': '#contact',
            'Projects': '#projects'
        };

        if (text === 'Home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else if (sections[text]) {
            document.querySelector(sections[text]).scrollIntoView({ behavior: 'smooth' });
        }
    });
});