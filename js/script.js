        document.addEventListener("DOMContentLoaded", function () {
          // Select menu items
          const lightBtn = document.getElementById('theme-light');
          const darkBtn = document.getElementById('theme-dark');
          const systemBtn = document.getElementById('theme-system');
        
          // Detect system preference
          const prefersDarkMedia = window.matchMedia('(prefers-color-scheme: dark)');
        
          // Apply the selected theme
          function setTheme(theme) {
            const root = document.documentElement;
            
            // Remove existing theme classes
            root.classList.remove('wa-light', 'wa-dark');
            
            if (theme === 'system') {
              // For system theme, add class based on system preference
              root.classList.add(prefersDarkMedia.matches ? 'wa-dark' : 'wa-light');
            } else {
              // For explicit light/dark choice, add the corresponding class
              root.classList.add(`wa-${theme}`);
            }
            
            // Store the theme preference
            localStorage.setItem('theme', theme);
          }
        
          // Listen for system theme changes
          prefersDarkMedia.addEventListener('change', (e) => {
            if (localStorage.getItem('theme') === 'system') {
              setTheme('system');
            }
          });
        
          // Load saved theme or default to system
          const savedTheme = localStorage.getItem('theme') || 'system';
          setTheme(savedTheme);
        
          // Add click listeners
          lightBtn.addEventListener('click', () => setTheme('light'));
          darkBtn.addEventListener('click', () => setTheme('dark'));
          systemBtn.addEventListener('click', () => setTheme('system'));
        });
    