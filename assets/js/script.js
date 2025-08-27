// Active link on scroll
    const sections = [...document.querySelectorAll('main section')];
    const sideMenu = document.getElementById('sideMenu');
    const links = [...sideMenu.querySelectorAll('a')];

    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          links.forEach(a => a.classList.remove('active'));
          const active = sideMenu.querySelector(`a[href="#${entry.target.id}"]`);
          if (active) active.classList.add('active');
        }
      });
    }, { threshold: 0.4 });

    sections.forEach(s => obs.observe(s));

// Smooth scroll fallback
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', e => {
        const id = a.getAttribute('href').slice(1);
        const el = document.getElementById(id);
        if (el) {
          e.preventDefault(); el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });

