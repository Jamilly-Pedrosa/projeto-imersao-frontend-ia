import { categories } from './data.js';
import { createCarousel } from './components/Carousel.js';

document.addEventListener('DOMContentLoaded', () => {
    // Busca o perfil ativo do localStorage
    let nomePerfil = localStorage.getItem('perfilAtivoNome');
    let imagemPerfil = localStorage.getItem('perfilAtivoImagem');

    // Compatibilidade com a nova estrutura de armazenamento
    const activeProfile = localStorage.getItem('activeProfile');
    if (activeProfile && !nomePerfil) {
        const profileData = JSON.parse(activeProfile);
        nomePerfil = profileData.name;
        imagemPerfil = profileData.image;
    }

    if (nomePerfil && imagemPerfil) {
        const profileNameElement = document.getElementById('profile-name');
        const profileImageElement = document.getElementById('profile-image');

        if (profileNameElement) profileNameElement.textContent = nomePerfil;
        if (profileImageElement) profileImageElement.src = imagemPerfil;
    }

    const container = document.getElementById('main-content');

    if (container) {
        categories.forEach(category => {
            const carousel = createCarousel(category);
            container.appendChild(carousel);
        });
    }
});
