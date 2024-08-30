
   async function handleCollapse(cardId, collapseId) {
        var card = document.getElementById(cardId);
        var collapse = document.getElementById(collapseId);
        var cardImgTop = card.querySelector('.custom-card-img-top');

        function updateCardImgTopStyle() {
            if (collapse.classList.contains('show')) {
                cardImgTop.classList.remove('expanded'); // Adiciona a classe 'expanded' se estiver visível
            } else {
                cardImgTop.classList.add('expanded'); // Remove a classe 'expanded' se não estiver visível
            }
        }

        // Adiciona eventos para atualizar o estilo
        collapse.addEventListener('shown.bs.collapse', updateCardImgTopStyle);
        collapse.addEventListener('hidden.bs.collapse', updateCardImgTopStyle);
        
        // Inicializa o estado correto
        updateCardImgTopStyle();
    }
    
    window.addEventListener('DOMContentLoaded', (event) => {



    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }
    };

    // Shrink the navbar 
    navbarShrink();
    
    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    }

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });
});
