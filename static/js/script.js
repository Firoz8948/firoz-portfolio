// Portfolio JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the application
    initApp();
});

// Main initialization function
async function initApp() {
    try {
        // Load portfolio data (static data for Firebase hosting)
        const portfolioData = getStaticPortfolioData();
        
        // Update all sections with data
        updatePersonalInfo(portfolioData.personal_info);
        updateSkills(portfolioData.skills);
        updateExperience(portfolioData.experience);
        updateProjects(portfolioData.projects);
        updateEducation(portfolioData.education);
        updateCertifications(portfolioData.certifications);
        updateContactInfo(portfolioData.personal_info);
        
        // Initialize UI components
        initMobileNavigation();
        initSmoothScrolling();
        initContactForm();
        initScrollAnimations();
        initEnhancedNavbar();
        initAboutMeNotifications();
        
    } catch (error) {
        console.error('Error loading portfolio data:', error);
        showErrorMessage('Failed to load portfolio data. Please refresh the page.');
    }
}

// Static portfolio data for Firebase hosting
function getStaticPortfolioData() {
    return {
        "personal_info": {
            "name": "FIROZ KHAN",
            "title": "Software Developer",
            "email": "firoz8948@gmail.com",
            "phone": "Please contact me for my phone number",
            "location": "Mumbai, India",
            "github": "https://github.com/firoz8948",
            "linkedin": "https://linkedin.com/in/firoz8948",
            "summary": "Passionate software developer with expertise in full-stack development, specializing in modern web technologies and creating innovative solutions."
        },
        "skills": {
            "programming_languages": ["JavaScript", "Python", "TypeScript", "C++"],
            "frontend": ["HTML5", "CSS3", "Angular", "Vue.js", "Bootstrap"],
            "backend": ["Flask", "Node.js", "FastAPI"],
            "databases": ["PostgreSQL", "MySQL", "SQLite"],
            "tools": ["Git", "AWS", "VS Code", "Postman"]
        },
        "experience": [
            {
                "company": "Sandhya Technology Solutions and Operations LLP",
                "position": "Senior Software Developer",
                "duration": "2025 - Present",
                "description": "Development of web applications using Angular and Flask. Implemented CI/CD pipelines",
                "technologies": ["HTML5", "CSS3", "Vue.js", "Angular", "Flask", "PostgreSQL", "AWS"]
            }
        ],
        "projects": [
            {
                "title": "Gym Management System",
                "description": "A secure Flask-based Gym Management System with admin-controlled member registration, auto-generated unique codes, and real-time subscription tracking.",
                "technologies": ["Angular", "Flask", "PostgreSQL", "HTML5", "CSS3"],
                "github": "https://github.com/yourusername/ecommerce-platform",
                "live": "https://ecommerce-demo.com"
            },
            {
                "title": "My Portfolio",
                "description": "A collaborative task management application with real-time updates and team collaboration features.",
                "technologies": ["React", "Node.js", "Socket.io", "MongoDB"],
                "github": "https://github.com/yourusername/task-manager",
                "live": "https://task-manager-demo.com"
            },
            {
                "title": "Weather Dashboard",
                "description": "A weather application that displays current weather and forecasts using external APIs.",
                "technologies": ["JavaScript", "HTML", "CSS", "Weather API"],
                "github": "https://github.com/yourusername/weather-app",
                "live": "https://weather-demo.com"
            }
        ],
        "education": [
            {
                "degree": "Bachelor of Engineering in Computer Science",
                "institution": "DY Patil College Of Engineering",
                "duration": "2021 - 2024",
                "description": "7.9 CGPA"
            },
            {
                "degree": "Diploma in Computer Science",
                "institution": "Sou. Venutai Chavan Polytechnic",
                "duration": "2019 - 2021",
                "description": "Percentage = 83%"
            }
        ],
        "certifications": [
            {
                "name": "Quasar Hackathon",
                "issuer": "Vasantdada Patil Pratishthan's College of Engineering",
                "year": "2023"
            }
        ]
    };
}

// Enhanced Navbar Initialization
function initEnhancedNavbar() {
    // Add scroll progress indicator
    addScrollProgressIndicator();
    
    // Enhanced scroll effects
    initEnhancedScrollEffects();
    
    // Active navigation highlighting
    initActiveNavigation();
    
    // Add floating particles effect
    addFloatingParticles();
    
    // Add hover sound effects (optional)
    addHoverSoundEffects();
}

// Add scroll progress indicator
function addScrollProgressIndicator() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.offsetHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
}

// Enhanced scroll effects
function initEnhancedScrollEffects() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        
        if (scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Parallax effect for navbar
        if (scrollY > 100) {
            navbar.style.transform = `translateY(${Math.min(scrollY * 0.1, 20)}px)`;
        } else {
            navbar.style.transform = 'translateY(0)';
        }
    });
}

// Active navigation highlighting with smooth transitions
function initActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '-20% 0px -20% 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const currentId = entry.target.getAttribute('id');
                
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${currentId}`) {
                        link.classList.add('active');
                        
                        // Add ripple effect
                        addRippleEffect(link);
                    }
                });
            }
        });
    }, observerOptions);
    
    sections.forEach(section => observer.observe(section));
}

// Add ripple effect to navigation links
function addRippleEffect(element) {
    const ripple = document.createElement('span');
    ripple.className = 'nav-ripple';
    ripple.style.cssText = `
        position: absolute;
        border-radius: 50%;
        background: rgba(59, 130, 246, 0.3);
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
        z-index: -1;
    `;
    
    element.appendChild(ripple);
    
    setTimeout(() => {
        if (ripple.parentNode) {
            ripple.parentNode.removeChild(ripple);
        }
    }, 600);
}

// Add floating particles effect
function addFloatingParticles() {
    const navbar = document.querySelector('.navbar');
    const particleContainer = document.createElement('div');
    particleContainer.className = 'particle-container';
    particleContainer.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        pointer-events: none;
        z-index: -1;
    `;
    
    navbar.appendChild(particleContainer);
    
    // Create particles
    for (let i = 0; i < 5; i++) {
        createParticle(particleContainer);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'floating-particle';
    particle.style.cssText = `
        position: absolute;
        width: 4px;
        height: 4px;
        background: linear-gradient(45deg, #3b82f6, #8b5cf6);
        border-radius: 50%;
        opacity: 0.3;
        animation: float 6s ease-in-out infinite;
        animation-delay: ${Math.random() * 6}s;
    `;
    
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    
    container.appendChild(particle);
}

// Add hover sound effects (visual feedback)
function addHoverSoundEffects() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            // Add visual feedback
            link.style.transform = 'translateY(-2px) scale(1.05)';
            
            // Add glow effect
            link.style.boxShadow = '0 0 20px rgba(59, 130, 246, 0.4)';
        });
        
        link.addEventListener('mouseleave', () => {
            link.style.transform = 'translateY(0) scale(1)';
            link.style.boxShadow = 'none';
        });
    });
}

// API Functions - Removed for static hosting

// Update Functions
function updatePersonalInfo(personalInfo) {
    // Update hero section
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.innerHTML = `Hi, I'm <span class="highlight">${personalInfo.name}</span>`;
    }
    
    // Update about section
    const aboutSummary = document.getElementById('about-summary');
    const aboutEmail = document.getElementById('about-email');
    const aboutLocation = document.getElementById('about-location');
    const aboutPhone = document.getElementById('about-phone');
    
    if (aboutSummary) aboutSummary.textContent = personalInfo.summary;
    if (aboutEmail) aboutEmail.textContent = personalInfo.email;
    if (aboutLocation) aboutLocation.textContent = personalInfo.location;
    if (aboutPhone) aboutPhone.textContent = personalInfo.phone;
}

function updateSkills(skills) {
    const skillCategories = {
        'programming-languages': skills.programming_languages,
        'frontend-skills': skills.frontend,
        'backend-skills': skills.backend,
        'database-skills': skills.databases,
        'tools-skills': skills.tools
    };
    
    Object.keys(skillCategories).forEach(categoryId => {
        const container = document.getElementById(categoryId);
        if (container) {
            container.innerHTML = '';
            skillCategories[categoryId].forEach(skill => {
                const skillTag = document.createElement('span');
                skillTag.className = 'skill-tag';
                skillTag.textContent = skill;
                container.appendChild(skillTag);
            });
        }
    });
}

function updateExperience(experience) {
    const timeline = document.getElementById('experience-timeline');
    if (!timeline) return;
    
    timeline.innerHTML = '';
    
    experience.forEach((exp, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item fade-in-up';
        timelineItem.style.animationDelay = `${index * 0.2}s`;
        
        timelineItem.innerHTML = `
            <div class="timeline-content">
                <div class="timeline-company">${exp.company}</div>
                <div class="timeline-position">${exp.position}</div>
                <div class="timeline-duration">${exp.duration}</div>
                <div class="timeline-description">${exp.description}</div>
                <div class="timeline-technologies">
                    ${exp.technologies.map(tech => `<span class="timeline-tech">${tech}</span>`).join('')}
                </div>
            </div>
        `;
        
        timeline.appendChild(timelineItem);
    });
}

function updateProjects(projects) {
    const projectsGrid = document.getElementById('projects-grid');
    if (!projectsGrid) return;
    
    console.log('Projects data:', projects); // Debug log
    
    projectsGrid.innerHTML = '';
    
    projects.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card fade-in-up';
        projectCard.style.animationDelay = `${index * 0.2}s`;
        
        console.log(`Project ${index}:`, project.title, 'Image:', project.image); // Debug log
        
        projectCard.innerHTML = `
            <div class="project-image ${project.image ? 'has-image' : ''}">
                ${project.image ? `<img src="${project.image}" alt="${project.title}" class="project-img" onload="console.log('Image loaded:', '${project.image}')" onerror="console.log('Image failed to load:', '${project.image}')">` : ''}
                ${!project.image ? '<i class="fas fa-code"></i>' : ''}
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-technologies">
                    ${project.technologies.map(tech => `<span class="project-tech">${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.github}" target="_blank" class="project-link github">
                        <i class="fab fa-github"></i> GitHub
                    </a>
                    <a href="${project.live}" target="_blank" class="project-link live">
                        <i class="fas fa-external-link-alt"></i> Live Demo
                    </a>
                </div>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
}

function updateEducation(education) {
    const educationItems = document.getElementById('education-items');
    if (!educationItems) return;
    
    educationItems.innerHTML = '';
    
    education.forEach((edu, index) => {
        const educationItem = document.createElement('div');
        educationItem.className = 'education-item fade-in-up';
        educationItem.style.animationDelay = `${index * 0.2}s`;
        
        educationItem.innerHTML = `
            <div class="education-degree">${edu.degree}</div>
            <div class="education-institution">${edu.institution}</div>
            <div class="education-duration">${edu.duration}</div>
            <div class="education-description">${edu.description}</div>
        `;
        
        educationItems.appendChild(educationItem);
    });
}

function updateCertifications(certifications) {
    const certificationItems = document.getElementById('certification-items');
    if (!certificationItems) return;
    
    certificationItems.innerHTML = '';
    
    certifications.forEach((cert, index) => {
        const certificationItem = document.createElement('div');
        certificationItem.className = 'certification-item fade-in-up';
        certificationItem.style.animationDelay = `${index * 0.2}s`;
        
        certificationItem.innerHTML = `
            <div class="certification-name">${cert.name}</div>
            <div class="certification-issuer">${cert.issuer}</div>
            <div class="certification-year">${cert.year}</div>
        `;
        
        certificationItems.appendChild(certificationItem);
    });
}

function updateContactInfo(personalInfo) {
    const contactEmail = document.getElementById('contact-email');
    const contactGithub = document.getElementById('contact-github');
    const contactLinkedin = document.getElementById('contact-linkedin');
    
    if (contactEmail) {
        contactEmail.textContent = personalInfo.email;
        contactEmail.href = `mailto:${personalInfo.email}`;
    }
    
    if (contactGithub) {
        contactGithub.href = personalInfo.github;
    }
    
    if (contactLinkedin) {
        contactLinkedin.href = personalInfo.linkedin;
    }
}

// UI Components
function initMobileNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Add ripple effect to hamburger
            addRippleEffect(hamburger);
        });
        
        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
}

function initSmoothScrolling() {
    // Smooth scrolling for anchor links with navbar offset
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = target.offsetTop - navbarHeight - 5; // Further reduced to 5px for even tighter spacing
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const submitButton = this.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        
        try {
            // Show loading state
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;
            
            // Get form data
            const formData = {
                name: this.querySelector('#name').value,
                email: this.querySelector('#email').value,
                subject: this.querySelector('#subject').value,
                message: this.querySelector('#message').value
            };
            
            // Send to backend
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });
            
            const result = await response.json();
            
            if (result.success) {
                showSuccessMessage(result.message);
                this.reset();
            } else {
                showErrorMessage(result.message);
            }
            
        } catch (error) {
            console.error('Error sending message:', error);
            showErrorMessage('Failed to send message. Please try again.');
        } finally {
            // Reset button state
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }
    });
}

function initScrollAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.skill-category, .timeline-item, .project-card, .education-item, .certification-item');
    animateElements.forEach(el => observer.observe(el));
}

// Utility Functions
function showSuccessMessage(message) {
    showNotification(message, 'success');
}

function showErrorMessage(message) {
    showNotification(message, 'error');
}

function showNotification(message, type) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style the notification with portfolio theme colors
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 12px;
        color: white;
        font-weight: 600;
        font-size: 14px;
        z-index: 10000;
        transform: translateX(100%) scale(0.8);
        opacity: 0;
        transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        max-width: 300px;
        word-wrap: break-word;
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.1);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    `;
    
    // Set background color based on type
    if (type === 'success') {
        notification.style.backgroundColor = '#3b82f6';
    } else if (type === 'info') {
        notification.style.backgroundColor = '#3b82f6';
    } else {
        notification.style.backgroundColor = '#dc2626';
    }
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in with smooth entrance
    setTimeout(() => {
        notification.style.transform = 'translateX(0) scale(1)';
        notification.style.opacity = '1';
    }, 100);
    
    // Remove after 4 seconds with smooth exit
    setTimeout(() => {
        notification.style.transform = 'translateX(100%) scale(0.8)';
        notification.style.opacity = '0';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 400);
    }, 4000);
}

// Initialize About Me contact notifications
function initAboutMeNotifications() {
    // Email notification
    const aboutEmail = document.getElementById('about-email');
    if (aboutEmail) {
        aboutEmail.addEventListener('click', function() {
            showNotification('Email copied! Go to your mailbox to send a message.', 'success');
            // Copy email to clipboard
            navigator.clipboard.writeText(this.textContent).catch(err => {
                console.log('Could not copy text: ', err);
            });
        });
        aboutEmail.style.cursor = 'pointer';
        aboutEmail.title = 'Click to copy email';
    }
    
    // Location notification
    const aboutLocation = document.getElementById('about-location');
    if (aboutLocation) {
        aboutLocation.addEventListener('click', function() {
            showNotification('Mumbai based developer! Open to remote opportunities in India and internationally.', 'info');
        });
        aboutLocation.style.cursor = 'pointer';
        aboutLocation.title = 'Click to see location info';
    }
    
    // Phone notification
    const aboutPhone = document.getElementById('about-phone');
    if (aboutPhone) {
        aboutPhone.addEventListener('click', function() {
            showNotification('Please email me for my contact number. I\'ll get back to you soon!', 'info');
        });
        aboutPhone.style.cursor = 'pointer';
        aboutPhone.title = 'Click for contact info';
    }
}

// Add enhanced CSS animations
const enhancedStyles = document.createElement('style');
enhancedStyles.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    @keyframes float {
        0%, 100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.3;
        }
        50% {
            transform: translateY(-20px) rotate(180deg);
            opacity: 0.6;
        }
    }
    
    .nav-link.active {
        color: #3b82f6 !important;
        background: rgba(59, 130, 246, 0.1) !important;
        border-radius: 8px !important;
    }
    
    .nav-link.active::after {
        width: 80% !important;
    }
    
    .notification {
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    }
    
    .floating-particle {
        pointer-events: none;
    }
    
    .particle-container {
        overflow: hidden;
    }
`;
document.head.appendChild(enhancedStyles);

