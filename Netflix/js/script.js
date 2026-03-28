/**
 * Theme Manager - Gerenciador de Temas Dark/Light Mode
 * Netflix Clone
 */

class ThemeManager {
    constructor() {
        this.themeToggle = document.querySelector('.theme-toggle');
        this.themeIcon = document.querySelector('.theme-icon');
        this.currentTheme = this.getStoredTheme() || 'dark';

        this.init();
    }

    init() {
        // Aplicar tema inicial
        this.applyTheme(this.currentTheme);

        // Adicionar event listener ao botão
        this.themeToggle.addEventListener('click', () => this.toggleTheme());
    }

    getStoredTheme() {
        return localStorage.getItem('netflix-theme');
    }

    setStoredTheme(theme) {
        localStorage.setItem('netflix-theme', theme);
    }

    applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        this.updateIcon(theme);
        this.setStoredTheme(theme);
        this.currentTheme = theme;
    }

    toggleTheme() {
        const newTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
        this.applyTheme(newTheme);
    }

    updateIcon(theme) {
        this.themeIcon.textContent = theme === 'dark' ? '🌙' : '☀️';
        this.themeToggle.setAttribute('aria-label',
            theme === 'dark' ? 'Alternar para modo claro' : 'Alternar para modo escuro'
        );
    }
}

// Inicializar quando DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    new ThemeManager();
});