        // // Theme toggle functionality
        // const themeToggle = document.querySelector('.theme-toggle');
        // const themeIcon = themeToggle.querySelector('i');
        
        // themeToggle.addEventListener('click', () => {
        //     document.body.classList.toggle('dark-theme');
            
        //     if (document.body.classList.contains('dark-theme')) {
        //         themeIcon.classList.remove('fa-sun');
        //         themeIcon.classList.add('fa-moon');
        //     } else {
        //         themeIcon.classList.remove('fa-moon');
        //         themeIcon.classList.add('fa-sun');
        //     }
        // });


        // Load saved theme OR default dark
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
    document.body.classList.add(savedTheme);
} else {
    document.body.classList.add("dark-theme"); // default
}

// Toggle button
const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = themeToggle.querySelector('i');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');

    if (document.body.classList.contains('dark-theme')) {
        localStorage.setItem("theme", "dark-theme");
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    } else {
        localStorage.setItem("theme", "");
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }
});
        
        // Mobile menu functionality
        const menuToggle = document.querySelector('.menu-toggle');
        const closeMenu = document.querySelector('.close-menu');
        const nav = document.querySelector('nav');
        
        menuToggle.addEventListener('click', () => {
            nav.classList.add('active');
        });
        
        closeMenu.addEventListener('click', () => {
            nav.classList.remove('active');
        });
        
        // Close menu when clicking on a link
        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
            });
        });
        
        // Scroll animation
        const observerOptions = { threshold: 0.1 };

        const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
            entry.target.classList.add('appear');
            }
        });
        }, observerOptions);

        // Now also observe whole sections
        document.querySelectorAll(
        'section, .section-title, .about-text, .skills-container, .project-card, .education-item, .contact-info, .contact-form'
        ).forEach(el => {
        observer.observe(el);
        });

        
        // Animate skill bars when they come into view
        const skillBars = document.querySelectorAll('.skill-progress');
        const skillObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const width = entry.target.dataset.width; // Get the stored width
                    entry.target.style.width = '0';
                    
                    setTimeout(() => {
                        entry.target.style.width = width;
                    }, 300);
                }
            });
        }, { threshold: 0.1 });
        skillBars.forEach(bar => {
            // Store the original width in a data attribute
            bar.dataset.width = bar.style.width;
            // Set initial width to 0 for the animation to work
            bar.style.width = '0';
            skillObserver.observe(bar);
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Form submission
        // const contactForm = document.querySelector('.contact-form form');
        // if (contactForm) {
        //     contactForm.addEventListener('submit', function(e) {
        //         e.preventDefault();
                
        //         // In a real application, you would send the form data to a server
        //         alert('Thank you for your message! I will get back to you soon.');
        //         this.reset();
        //     });
        // }

emailjs.init("n1sFKycpEPoQ2CvwW");

const contactForm = document.getElementById("contactForm");

if(contactForm){

    contactForm.addEventListener("submit", function(e){

        e.preventDefault();

        emailjs.send(
            "service_vahbfzq",
            "template_2spqihc",
            {
                name: document.getElementById("name").value,

                email: document.getElementById("email").value,

                message: document.getElementById("message").value,

                title: "Portfolio Contact"
            }
        )

        .then(() => {

            alert("Message sent successfully 🚀");

            contactForm.reset();
        })

        .catch((error) => {

            console.log(error);

            alert("Failed to send message ❌");
        });
    });
}



