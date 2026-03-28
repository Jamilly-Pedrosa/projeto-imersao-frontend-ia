/**
 * Profile Selection Manager
 * Armazena o perfil selecionado no localStorage
 */

class ProfileManager {
    constructor() {
        this.profileLinks = document.querySelectorAll('.profiles[data-profile-name]');
        this.init();
    }

    init() {
        this.profileLinks.forEach(link => {
            link.addEventListener('click', (e) => this.saveProfile(e));
        });
    }

    saveProfile(event) {
        const profileLink = event.currentTarget;
        const profileName = profileLink.getAttribute('data-profile-name');
        const profileImage = profileLink.getAttribute('data-profile-image');

        // Armazena o perfil no localStorage
        const profileData = {
            name: profileName,
            image: profileImage,
            timestamp: new Date().toISOString()
        };

        localStorage.setItem('activeProfile', JSON.stringify(profileData));
        console.log('Perfil armazenado:', profileData);
    }

    /**
     * Retorna o perfil ativo do localStorage
     * @returns {Object|null}
     */
    static getActiveProfile() {
        const profileData = localStorage.getItem('activeProfile');
        return profileData ? JSON.parse(profileData) : null;
    }

    /**
     * Limpa o perfil ativo do localStorage
     */
    static clearActiveProfile() {
        localStorage.removeItem('activeProfile');
    }
}

// Inicializa o gerenciador de perfis quando o DOM está pronto
document.addEventListener('DOMContentLoaded', () => {
    new ProfileManager();
});
