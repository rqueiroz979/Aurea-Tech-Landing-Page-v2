/*=============== REMOVER CLASSE NO-JS ===============*/
document.documentElement.classList.remove("no-js");

/*=============== MOSTRAR / ESCONDER MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navLinks = document.querySelectorAll('.nav__link');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show-menu');
        navToggle.querySelector('i').classList.toggle('fa-bars');
        navToggle.querySelector('i').classList.toggle('fa-times');
    });
}

/*=============== FECHAR MENU AO CLICAR EM LINK (MOBILE) ===============*/
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
        navToggle.querySelector('i').classList.add('fa-bars');
        navToggle.querySelector('i').classList.remove('fa-times');
    });
});

/*=============== MUDAR FUNDO DO HEADER AO ROLAR ===============*/
function scrollHeader() {
    const header = document.getElementById('header');
    if (this.scrollY >= 50) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

/*=============== ROLAGEM SUAVE PARA LINKS DE ÂNCORA ===============*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 60, // compensar altura do header fixo
                behavior: 'smooth'
            });
        }
    });
});

/*=============== ANIMAÇÃO DE FADE-IN QUANDO OS BLOCOS ENTRAM NA TELA ===============*/
const sections = document.querySelectorAll("section, .service-card");

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(sec => observer.observe(sec));
} else {
    // Fallback: se o navegador não suporta IntersectionObserver
    sections.forEach(sec => sec.classList.add("fade-in"));
}
