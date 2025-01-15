        document.addEventListener("DOMContentLoaded", function () {
          // Select menu items
          const lightBtn = document.getElementById('theme-light');
          const darkBtn = document.getElementById('theme-dark');
          const systemBtn = document.getElementById('theme-system');
        
          // Detect system preference
          const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
          // Apply the selected theme
          function setTheme(theme) {
            if (theme === 'system') {
              theme = prefersDark ? 'dark' : 'light';
            }
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);
          }
        
          // Load saved theme or default to system
          const savedTheme = localStorage.getItem('theme') || 'system';
          setTheme(savedTheme);
        
          // Add click listeners
          lightBtn.addEventListener('click', () => setTheme('light'));
          darkBtn.addEventListener('click', () => setTheme('dark'));
          systemBtn.addEventListener('click', () => setTheme('system'));
        });
   