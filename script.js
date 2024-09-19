function fadeIn() {
    // Fade in #landing-page-overlay first
    const overlay = document.getElementById('landing-page-overlay');
    overlay.style.opacity = 1; // Manually set opacity to 1

}


/*  SECTION: NAVIGATION FUNCTIONALITY   */


// OnClick events for each navigation tab.
document.getElementById("navigation-about").onclick = toAboutPage;
document.getElementById("navigation-qualifications").onclick = toQualificationsPage;
document.getElementById("navigation-clients").onclick = toClientsPage;
document.getElementById("navigation-contact").onclick = toContactPage;

// Checks which page you're on, and changes navigation bar tab to white accordingly.
switch (window.location.pathname.split('/').pop()) {
    case 'index.html':
        document.getElementById("navigation-about").style.color = 'white';
        break;
    case 'qualifications.html':
        document.getElementById("navigation-qualifications").style.color = 'white';
        break;
    case 'clients.html':
        document.getElementById("navigation-clients").style.color = 'white';
        break;
    case 'contact.html':
        document.getElementById("navigation-contact").style.color = 'white';
        break;
    default:
        // Do nothing if the page doesn't match
        break;
}

function navigateTo(page) {
    location.href = page + '.html';
}

function cleanUrl() {
    if (window.location.pathname.endsWith('.html')) {
        const newUrl = window.location.pathname.replace('.html', '');
        window.history.replaceState({}, document.title, newUrl);
    }
}

function toAboutPage() {
    navigateTo('index');
}

function toQualificationsPage() {
    navigateTo('qualifications');
}

function toClientsPage() {
    navigateTo('clients');
}

function toContactPage() {
    navigateTo('contact');
}

// Execute URL cleaning after navigation on page load
window.onload = cleanUrl;



/*  SECTION: FOOTER INJECTION   */


function injectFooter() {
    // Create the <footer> tag.
    const footer = document.createElement('footer');

    // Create the <p> tag.
    const footerText = document.createElement('p');
    footerText.innerHTML = '&copy; 2024 Abdur Rehman Nasir. All rights reserved.';

    // Append the paragraph to the footer.
    footer.appendChild(footerText);

    // Inject the footer at the end of the body.
    document.body.appendChild(footer);
}

/*  SECTION: WINDOW CONDITIONALS    */


/* SECTION: INITIAL ANIMATIONS AND OVERLAY   */


const everything = document.getElementById('everything');
const overlayBoxes = document.querySelectorAll('.overlay-centre-boxes');
const landingOverlay = document.getElementById('landing-page-overlay');
const overlayNameBackground = document.getElementById('overlay-name-background');
const button = document.getElementById('overlay-button-box');
const text = document.getElementById('overlay-name-box');
const navigationTabs = document.querySelectorAll('.navigation-tabs');
const mainDiv = document.getElementsByClassName('page-margin');

// Loop through each .overlay-centre-boxes to add the hover events
overlayBoxes.forEach(box => {
    // Add event listener for hovering (mouse over)
    box.addEventListener('mouseover', function () {
        overlayNameBackground.style.opacity = '0.8';
        landingOverlay.style.opacity = '0.5'; // Change the opacity of the parent
        text.style.opacity = 1;
    });

    // Add event listener for when the mouse leaves (mouse out)
    box.addEventListener('mouseout', function () {
        overlayNameBackground.style.opacity = '0.65';
        landingOverlay.style.opacity = '1'; // Reset the opacity of the parent
    });
});

button.addEventListener('mouseover', function () {
    button.style.opacity = 1;
});

button.addEventListener('mouseout', function () {
    button.style.opacity = 0.5;
});

button.addEventListener('click', function () {
    landingOverlay.style.transform = 'translateY(-100vh)';
    text.style.transform = 'translateY(-20vh)';
    button.style.transform = 'translateY(-100vh)';
    overlayNameBackground.style.transform = 'translateY(-100vh)';
    button.style.opacity = '0';

    setTimeout(() => {
        landingOverlay.style.display = 'none';
        button.style.display = 'none';
        overlayNameBackground.style.display = 'none';
        everything.style.display = 'block';
        setTimeout(() => {
            everything.style.opacity = '1';
        }, 1000);

    }, 4000);

});



injectFooter();