// Dark Mode Toggle
document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    
    // Check for saved user preference
    if (localStorage.getItem('dark-mode') === 'enabled') {
        document.body.classList.add('dark-mode');
    }
    
    darkModeToggle.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('dark-mode', 'enabled');
        } else {
            localStorage.setItem('dark-mode', 'disabled');
        }
    });
});
