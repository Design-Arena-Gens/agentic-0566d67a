// Services Data
const servicesData = [
    {
        id: 1,
        title: "Web Development",
        description: "Create stunning, responsive websites tailored to your business needs.",
        fullDescription: "Our web development services encompass everything from simple landing pages to complex web applications. We use the latest technologies and best practices to ensure your website is fast, secure, and scalable. Our team specializes in creating responsive designs that work seamlessly across all devices.",
        icon: "fas fa-code",
        price: "$2,999",
        tags: ["Frontend", "Backend", "Responsive"],
        features: [
            "Custom responsive design for all devices",
            "Modern JavaScript frameworks (React, Vue, Angular)",
            "Backend API development and integration",
            "Performance optimization and SEO",
            "Content Management System (CMS) integration",
            "Ongoing maintenance and support"
        ]
    },
    {
        id: 2,
        title: "Mobile App Development",
        description: "Build native and cross-platform mobile applications for iOS and Android.",
        fullDescription: "Transform your ideas into powerful mobile applications that engage users and drive business growth. We develop both native and cross-platform apps using cutting-edge technologies like React Native and Flutter, ensuring optimal performance and user experience across all devices.",
        icon: "fas fa-mobile-alt",
        price: "$4,999",
        tags: ["iOS", "Android", "Cross-platform"],
        features: [
            "Native iOS and Android development",
            "Cross-platform solutions with React Native/Flutter",
            "Intuitive UI/UX design",
            "Backend and API integration",
            "App Store and Google Play deployment",
            "Post-launch support and updates"
        ]
    },
    {
        id: 3,
        title: "Digital Marketing",
        description: "Boost your online presence with strategic digital marketing campaigns.",
        fullDescription: "Our comprehensive digital marketing services help businesses reach their target audience and achieve measurable results. From SEO and content marketing to social media management and PPC advertising, we create data-driven strategies that deliver real ROI.",
        icon: "fas fa-bullhorn",
        price: "$1,499",
        tags: ["SEO", "Social Media", "PPC"],
        features: [
            "Search Engine Optimization (SEO)",
            "Social media marketing and management",
            "Pay-per-click (PPC) advertising campaigns",
            "Content marketing and strategy",
            "Email marketing automation",
            "Analytics and performance tracking"
        ]
    },
    {
        id: 4,
        title: "UI/UX Design",
        description: "Design beautiful and intuitive user interfaces that delight users.",
        fullDescription: "Great design is at the heart of every successful digital product. Our UI/UX designers create visually stunning and highly functional interfaces that provide exceptional user experiences. We conduct thorough user research, create wireframes and prototypes, and iterate based on feedback.",
        icon: "fas fa-paint-brush",
        price: "$1,999",
        tags: ["Design", "Prototyping", "User Research"],
        features: [
            "User research and persona development",
            "Wireframing and prototyping",
            "High-fidelity UI design",
            "Usability testing and iteration",
            "Design system creation",
            "Responsive design for all devices"
        ]
    },
    {
        id: 5,
        title: "Cloud Solutions",
        description: "Leverage cloud infrastructure for scalable and reliable applications.",
        fullDescription: "Migrate your applications to the cloud or build cloud-native solutions from scratch. We work with leading cloud providers like AWS, Azure, and Google Cloud to design and implement scalable, secure, and cost-effective cloud architectures that grow with your business.",
        icon: "fas fa-cloud",
        price: "$3,499",
        tags: ["AWS", "Azure", "DevOps"],
        features: [
            "Cloud architecture design and planning",
            "Migration to AWS, Azure, or Google Cloud",
            "Container orchestration with Kubernetes",
            "CI/CD pipeline setup and automation",
            "Security and compliance implementation",
            "24/7 monitoring and support"
        ]
    },
    {
        id: 6,
        title: "E-commerce Solutions",
        description: "Launch your online store with powerful e-commerce platforms.",
        fullDescription: "Build a successful online business with our comprehensive e-commerce solutions. We create custom online stores using platforms like Shopify, WooCommerce, and Magento, with features including payment gateway integration, inventory management, and analytics.",
        icon: "fas fa-shopping-cart",
        price: "$3,999",
        tags: ["Shopify", "WooCommerce", "Payment"],
        features: [
            "Custom e-commerce platform development",
            "Shopping cart and checkout optimization",
            "Payment gateway integration (Stripe, PayPal, etc.)",
            "Inventory management system",
            "Order tracking and fulfillment",
            "Customer analytics and reporting"
        ]
    },
    {
        id: 7,
        title: "Data Analytics",
        description: "Transform data into actionable insights for better decision-making.",
        fullDescription: "Make informed business decisions with our data analytics services. We help you collect, process, and analyze data to uncover valuable insights. Our solutions include dashboard creation, predictive analytics, and custom reporting tools.",
        icon: "fas fa-chart-line",
        price: "$2,499",
        tags: ["Analytics", "Reporting", "Insights"],
        features: [
            "Data collection and integration",
            "Custom dashboard and visualization",
            "Predictive analytics and modeling",
            "Business intelligence reports",
            "Real-time data monitoring",
            "Data warehouse setup and management"
        ]
    },
    {
        id: 8,
        title: "Cybersecurity",
        description: "Protect your business with comprehensive security solutions.",
        fullDescription: "Safeguard your digital assets with our cybersecurity services. We conduct security audits, implement protection measures, and provide ongoing monitoring to defend against threats. Our team ensures your systems meet industry compliance standards.",
        icon: "fas fa-shield-alt",
        price: "$2,999",
        tags: ["Security", "Compliance", "Protection"],
        features: [
            "Security audit and vulnerability assessment",
            "Penetration testing and risk analysis",
            "Firewall and intrusion detection setup",
            "Compliance implementation (GDPR, HIPAA, etc.)",
            "Employee security training",
            "24/7 security monitoring"
        ]
    },
    {
        id: 9,
        title: "AI & Machine Learning",
        description: "Harness the power of AI to automate and optimize your operations.",
        fullDescription: "Leverage artificial intelligence and machine learning to solve complex business problems. We develop custom AI solutions including chatbots, recommendation systems, predictive models, and natural language processing applications.",
        icon: "fas fa-brain",
        price: "$5,999",
        tags: ["AI", "ML", "Automation"],
        features: [
            "Custom machine learning model development",
            "Natural language processing (NLP)",
            "Computer vision solutions",
            "Chatbot and virtual assistant creation",
            "Recommendation engine development",
            "AI integration with existing systems"
        ]
    },
    {
        id: 10,
        title: "Consulting Services",
        description: "Expert guidance for your digital transformation journey.",
        fullDescription: "Get strategic advice from our experienced consultants to navigate your digital transformation. We help you identify opportunities, assess technologies, and create roadmaps for successful implementation of digital solutions.",
        icon: "fas fa-users",
        price: "$999",
        tags: ["Strategy", "Advisory", "Planning"],
        features: [
            "Technology assessment and recommendations",
            "Digital transformation roadmap",
            "Process optimization consulting",
            "Vendor selection and evaluation",
            "Project management and oversight",
            "Training and knowledge transfer"
        ]
    },
    {
        id: 11,
        title: "Content Creation",
        description: "Engaging content that tells your brand story and drives conversions.",
        fullDescription: "Create compelling content that resonates with your audience. Our content creators specialize in blog posts, videos, infographics, and social media content that drives engagement and supports your marketing goals.",
        icon: "fas fa-pen-fancy",
        price: "$799",
        tags: ["Copywriting", "Video", "Social"],
        features: [
            "Blog posts and article writing",
            "Video production and editing",
            "Infographic and visual content design",
            "Social media content creation",
            "Email newsletter copywriting",
            "Content strategy and calendar planning"
        ]
    },
    {
        id: 12,
        title: "API Development",
        description: "Build robust and scalable APIs for seamless integrations.",
        fullDescription: "Develop powerful APIs that enable seamless communication between systems and applications. We create RESTful and GraphQL APIs with comprehensive documentation, security measures, and performance optimization.",
        icon: "fas fa-plug",
        price: "$2,199",
        tags: ["REST", "GraphQL", "Integration"],
        features: [
            "RESTful API design and development",
            "GraphQL API implementation",
            "API documentation with Swagger/OpenAPI",
            "Authentication and authorization",
            "Rate limiting and caching",
            "Third-party API integration"
        ]
    }
];

// State Management
let currentServices = [...servicesData];
let searchTimeout;

// DOM Elements
const searchInput = document.getElementById('searchInput');
const clearSearchBtn = document.getElementById('clearSearch');
const servicesContainer = document.getElementById('servicesContainer');
const noResults = document.getElementById('noResults');
const modal = document.getElementById('serviceModal');
const closeModalBtn = document.getElementById('closeModal');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderServices(servicesData);
    initializeEventListeners();
});

// Event Listeners
function initializeEventListeners() {
    // Search functionality
    searchInput.addEventListener('input', handleSearch);

    // Clear search
    clearSearchBtn.addEventListener('click', clearSearch);

    // Close modal
    closeModalBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // ESC key to close modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });
}

// Render Services
function renderServices(services) {
    servicesContainer.innerHTML = '';

    if (services.length === 0) {
        noResults.classList.add('show');
        return;
    }

    noResults.classList.remove('show');

    services.forEach((service, index) => {
        const serviceCard = createServiceCard(service, index);
        servicesContainer.appendChild(serviceCard);
    });
}

// Create Service Card
function createServiceCard(service, index) {
    const card = document.createElement('div');
    card.className = 'service-card';
    card.style.animationDelay = `${index * 0.1}s`;

    card.innerHTML = `
        <div class="service-icon">
            <i class="${service.icon}"></i>
        </div>
        <h3>${service.title}</h3>
        <p>${service.description}</p>
        <div class="service-price">${service.price}</div>
        <div class="service-tags">
            ${service.tags.map(tag => `<span class="service-tag">${tag}</span>`).join('')}
        </div>
    `;

    card.addEventListener('click', () => openModal(service));

    return card;
}

// Search Handler
function handleSearch(e) {
    const searchTerm = e.target.value.trim();

    // Show/hide clear button
    if (searchTerm) {
        clearSearchBtn.classList.add('show');
    } else {
        clearSearchBtn.classList.remove('show');
    }

    // Debounce search
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
        performSearch(searchTerm);
    }, 300);
}

// Perform Search
function performSearch(searchTerm) {
    if (!searchTerm) {
        currentServices = [...servicesData];
        renderServices(currentServices);
        return;
    }

    const lowerSearchTerm = searchTerm.toLowerCase();

    currentServices = servicesData.filter(service => {
        return (
            service.title.toLowerCase().includes(lowerSearchTerm) ||
            service.description.toLowerCase().includes(lowerSearchTerm) ||
            service.tags.some(tag => tag.toLowerCase().includes(lowerSearchTerm)) ||
            service.features.some(feature => feature.toLowerCase().includes(lowerSearchTerm))
        );
    });

    renderServices(currentServices);
}

// Clear Search
function clearSearch() {
    searchInput.value = '';
    clearSearchBtn.classList.remove('show');
    currentServices = [...servicesData];
    renderServices(currentServices);
    searchInput.focus();
}

// Open Modal
function openModal(service) {
    const modalTitle = document.getElementById('modalTitle');
    const modalIcon = document.getElementById('modalIcon');
    const modalDescription = document.getElementById('modalDescription');
    const modalFeatures = document.getElementById('modalFeatures');
    const modalPrice = document.getElementById('modalPrice');

    modalTitle.textContent = service.title;
    modalIcon.className = service.icon + ' modal-icon';
    modalDescription.textContent = service.fullDescription;
    modalPrice.textContent = service.price;

    modalFeatures.innerHTML = service.features
        .map(feature => `<li>${feature}</li>`)
        .join('');

    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

// Close Modal
function closeModal() {
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

// Handle contact and learn more buttons
document.querySelector('.btn-contact').addEventListener('click', (e) => {
    e.stopPropagation();
    alert('Contact form would open here. This is a demo.');
});

document.querySelector('.btn-learn-more').addEventListener('click', (e) => {
    e.stopPropagation();
    alert('More information page would open here. This is a demo.');
});

// Add smooth scroll behavior
document.documentElement.style.scrollBehavior = 'smooth';

// Add intersection observer for animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe service cards when they're rendered
const observeCards = () => {
    document.querySelectorAll('.service-card').forEach(card => {
        observer.observe(card);
    });
};

// Call observe after initial render
setTimeout(observeCards, 100);

// Performance optimization: Lazy loading for images (if we add them)
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src;
    });
}
