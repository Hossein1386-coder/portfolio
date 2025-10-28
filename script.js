// Loading Screen Functionality
window.addEventListener('load', function() {
    const loadingScreen = document.getElementById('loadingScreen');
    const loadingBar = document.getElementById('loadingBar');
    const loadingText = document.getElementById('loadingText');
    
    // Simulate loading progress
    let progress = 0;
    const loadingInterval = setInterval(() => {
        progress += Math.random() * 15;
        if (progress > 100) progress = 100;
        
        loadingBar.style.width = progress + '%';
        
        // Update loading text based on progress
        if (progress < 30) {
            loadingText.innerHTML = currentLang === 'fa' ? 
                '<span class="fa-text">در حال بارگذاری...</span>' : 
                '<span class="en-text">Loading...</span>';
        } else if (progress < 60) {
            loadingText.innerHTML = currentLang === 'fa' ? 
                '<span class="fa-text">در حال آماده‌سازی...</span>' : 
                '<span class="en-text">Preparing...</span>';
        } else if (progress < 90) {
            loadingText.innerHTML = currentLang === 'fa' ? 
                '<span class="fa-text">تقریباً آماده...</span>' : 
                '<span class="en-text">Almost ready...</span>';
        } else {
            loadingText.innerHTML = currentLang === 'fa' ? 
                '<span class="fa-text">آماده!</span>' : 
                '<span class="en-text">Ready!</span>';
        }
        
        if (progress >= 100) {
            clearInterval(loadingInterval);
            
            // Add fade out effect
            setTimeout(() => {
                loadingScreen.classList.add('fade-out');
                
                // Remove loading screen from DOM after animation
                setTimeout(() => {
                    loadingScreen.style.display = 'none';
                }, 500);
            }, 300);
        }
    }, 100);
});

// Language Toggle
let currentLang = 'fa';
const langToggle = document.getElementById('langToggle');
const html = document.querySelector('html');
const body = document.body;

// Function to toggle language
function toggleLanguage() {
    currentLang = currentLang === 'fa' ? 'en' : 'fa';
    
    if (currentLang === 'en') {
        html.setAttribute('lang', 'en');
        html.setAttribute('dir', 'ltr');
        body.setAttribute('dir', 'ltr');
        document.querySelector('.lang-text').textContent = 'فا';
    } else {
        html.setAttribute('lang', 'fa');
        html.setAttribute('dir', 'rtl');
        body.setAttribute('dir', 'rtl');
        document.querySelector('.lang-text').textContent = 'EN';
    }
    
    // Re-render projects with new language
    renderProjects();
}

// Add event listener
langToggle.addEventListener('click', toggleLanguage);


// Projects Data
const projectsData = {
    fa: [
        {
            title: 'سایت تعمیرات و نگهداری ماشین',
            description: 'سایت تعمیرات و نگهداری ماشین با پنل مدیریت',
            tags: ['Asp.net', 'javascript', 'SQL Server'],
            image: 'images/project1.png',
            demoLink: 'https://maximahome.ir'
        },
        {
            title: 'سایت فروشگاه چوب',
            description: 'سایت فروشگاه چوب با پنل مدیریت',
            tags: ['Asp.net', 'C#', 'SQL Server'],
            image: 'images/project2.png',
            demoLink: 'https://honataneh.ir'
        },
        {
            title: 'سایت باشگاه ورزشی',
            description: 'سایت باشگاه ورزشی با پنل مدیریت',
            tags: ['Asp.net', 'C#', 'SQL Server'],
            image: 'images/project3.png',
            demoLink: '#' // TODO: Add demo link
        }
    ],
    en: [
        {
            title: 'Repair and Maintenance Website',
            description: 'A website for repair and maintenance of cars with admin panel',
            tags: ['Asp.net', 'javascript', 'SQL Server'],
            image: 'images/project1.png',
            demoLink: 'https://maximahome.ir'
        },
        {
            title: 'Wood Shop Website',
            description: 'A website for wood shop with admin panel',
            tags: ['Asp.net', 'C#', 'SQL Server'],
            image: 'images/project2.png',
            demoLink: 'https://honataneh.ir'
        },
        {
            title: 'Sports Club Website',
            description: 'A website for sports club with admin panel',
            tags: ['Asp.net', 'C#', 'SQL Server'],
            image: 'images/project3.png',
            demoLink: '#' // TODO: Add demo link
        }
    ]
};

// Render Projects
function renderProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    const projects = projectsData[currentLang];
    
    const viewDemoText = currentLang === 'fa' ? 'مشاهده سایت' : 'View Website';
    
    projectsGrid.innerHTML = projects.map(project => `
        <div class="project-card bg-purple-950/20 border border-purple-800/30 rounded-lg overflow-hidden group hover:border-purple-600/50 transition-all hover:shadow-xl hover:shadow-purple-900/30">
            <div class="relative h-48 overflow-hidden bg-gradient-to-br from-purple-900/40 to-purple-950/60">
                <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover opacity-70">
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            </div>
            
            <div class="p-6">
                <h3 class="text-xl font-semibold text-white mb-3">${project.title}</h3>
                <p class="text-gray-400 mb-4 text-sm leading-relaxed">
                    ${project.description}
                </p>
                
                <div class="flex flex-wrap gap-2 mb-4">
                    ${project.tags.map(tag => `
                        <span class="px-3 py-1 bg-purple-900/30 border border-purple-700/50 text-purple-300 rounded-full text-xs">
                            ${tag}
                        </span>
                    `).join('')}
                </div>
                
                <div class="flex gap-4">
                    <a href="${project.demoLink}" target="_blank" class="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                        ${viewDemoText}
                    </a>
                </div>
            </div>
        </div>
    `).join('');
}


// Initial render
renderProjects();

// Set current year
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Active navigation item based on scroll position
function updateActiveNavItem() {
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.nav-item[data-section]');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        
        if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('data-section') === currentSection) {
            item.classList.add('active');
        }
    });
}

// Update active nav item on scroll
window.addEventListener('scroll', updateActiveNavItem);

// Contact Form Handling
document.getElementById('contactForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const form = e.target;
    const submitBtn = document.getElementById('submitBtn');
    const submitText = document.getElementById('submitText');
    const loadingText = document.getElementById('loadingText');
    const formMessages = document.getElementById('formMessages');
    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('errorMessage');
    
    // Show loading state
    submitBtn.disabled = true;
    submitText.classList.add('hidden');
    loadingText.classList.remove('hidden');
    formMessages.classList.add('hidden');
    
    try {
        const formData = new FormData(form);
        const response = await fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });
        
        if (response.ok) {
            // Show success message
            formMessages.classList.remove('hidden');
            successMessage.classList.remove('hidden');
            errorMessage.classList.add('hidden');
            
            // Reset form
            form.reset();
            
            // Scroll to success message
            formMessages.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
            throw new Error('Form submission failed');
        }
    } catch (error) {
        // Show error message
        formMessages.classList.remove('hidden');
        successMessage.classList.add('hidden');
        errorMessage.classList.remove('hidden');
        
        // Scroll to error message
        formMessages.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } finally {
        // Reset button state
        submitBtn.disabled = false;
        submitText.classList.remove('hidden');
        loadingText.classList.add('hidden');
    }
});
