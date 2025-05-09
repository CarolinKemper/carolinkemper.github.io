document.addEventListener('DOMContentLoaded', function() {
    // Add click listeners to dropdown toggles
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            const parent = this.parentElement;
            const dropdownMenu = parent.querySelector('.dropdown-menu');
            
            // Close all other dropdowns
            document.querySelectorAll('.dropdown-menu').forEach(menu => {
                if (menu !== dropdownMenu) {
                    menu.classList.remove('show');
                }
            });
            
            // Toggle current dropdown
            dropdownMenu.classList.toggle('show');
        });
    });
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.dropdown')) {
            document.querySelectorAll('.dropdown-menu').forEach(menu => {
                menu.classList.remove('show');
            });
        }
    });
    
    // Mobile-friendly social icons - Truncate text on small screens
    function adjustSocialIcons() {
        const socialIcons = document.querySelectorAll('.social-icons a');
        if (window.innerWidth < 768) {
            socialIcons.forEach(icon => {
                const textSpan = icon.querySelector('span');
                if (textSpan) {
                    textSpan.style.display = 'none';
                }
            });
        } else {
            socialIcons.forEach(icon => {
                const textSpan = icon.querySelector('span');
                if (textSpan) {
                    textSpan.style.display = 'inline';
                }
            });
        }
    }
    
    // Run on load and resize
    adjustSocialIcons();
    window.addEventListener('resize', adjustSocialIcons);
});