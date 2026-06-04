/* 
   NovaShop - Dark Mode Toggle
*/

const DarkMode = {
    toggle() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('novashop_theme', newTheme);

        this.updateIcon(newTheme);
    },

    init() {
        const savedTheme = localStorage.getItem('novashop_theme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);
        this.updateIcon(savedTheme);
    },

    updateIcon(theme) {
        const icon = document.querySelector('.theme-toggle i');
        if (icon) {
            icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        }
    }
};

document.addEventListener('DOMContentLoaded', () => DarkMode.init());
