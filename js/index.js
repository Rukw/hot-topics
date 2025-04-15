// GET THE REFERENCES
const container = document.getElementById('content');
const links = document.querySelectorAll('.nav-link');
let url = 'partials/home.html'; // Default content to load

// CREATE THE FUNCTION THAT WILL LOAD THE REQUESTED PARTIAL
const loadContent = function(urlFeed) {
    
    // RUN THE fetch(urlFeed).then().then().catch()
    fetch(urlFeed)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            container.innerHTML = data;
            
            // Update masthead background based on content
            updateMasthead(urlFeed);
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
            container.innerHTML = '<p>Error loading content. Please try again later.</p>';
        });
};

// Function to update masthead background based on current page
const updateMasthead = function(currentUrl) {
    const masthead = document.querySelector('.masthead');
    
    if (currentUrl.includes('home.html')) {
        masthead.style.backgroundImage = 'url("img/masthead-home.jpg")';
    } else if (currentUrl.includes('portfolio.html')) {
        masthead.style.backgroundImage = 'url("img/masthead-portfolio.jpg")';
    }
};

// CREATE THE FUNCTION THAT WILL SELECT A PARTIAL:
const selectContent = function(event) {
    // PREVENT DEFAULT BEHAVIOUR OF A LINK TAG
    event.preventDefault();
    
    // GET THE VALUE OF href ATTRIBUTE OF THE CLICKED LINK
    const href = this.getAttribute('href');
    
    // Update active link
    links.forEach(link => link.classList.remove('active'));
    this.classList.add('active');
    
    // CALL THE FUNCTION loadContent PROVIDING THE href
    // VALUE OF THE CLICKED LINK AS THE VALUE FOR THE PARAMETER
    // OF loadContent FUNCTION.
    loadContent(href);
};

// REGISTER links FOR CLICK EVENT WITH selectContent AS EVENT HANDLER!
links.forEach(link => {
    link.addEventListener('click', selectContent);
});

// Load default content when page loads
document.addEventListener('DOMContentLoaded', function() {
    loadContent(url);
});