function fadeIn() {
    // Fade in #landing-page-overlay first
    const overlay = document.getElementById('landing-page-overlay');
    overlay.style.opacity = 1; // Manually set opacity to 1

}




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

const overlayBoxes = document.querySelectorAll('.overlay-centre-boxes');
const landingOverlay = document.getElementById('landing-page-overlay');
const overlayNameBackground = document.getElementById('overlay-name-background');
const button = document.getElementById('overlay-button-box');
const text = document.getElementById('overlay-name-box');

// Loop through each .overlay-centre-boxes to add the hover events
overlayBoxes.forEach(box => {
  // Add event listener for hovering (mouse over)
  box.addEventListener('mouseover', function() {
    overlayNameBackground.style.opacity = '0.8';
    landingOverlay.style.opacity = '0.5'; // Change the opacity of the parent
    text.style.opacity = 1;
  });

  // Add event listener for when the mouse leaves (mouse out)
  box.addEventListener('mouseout', function() {
    overlayNameBackground.style.opacity = '0.65';
    landingOverlay.style.opacity = '1'; // Reset the opacity of the parent
  });
});

button.addEventListener('mouseover', function() {
    button.style.opacity = 1;
});

button.addEventListener('mouseout', function() {
    button.style.opacity = 0.5;
});

button.addEventListener('click', function() {
    landingOverlay.style.transform = 'translateY(-100vh)';
    text.style.transform = 'translateY(-20vh)';
    button.style.transform = 'translateY(-100vh)';
    overlayNameBackground.style.transform = 'translateY(-100vh)';
    button.style.opacity = '0';

    setTimeout(() => {
        landingOverlay.style.display = 'none';
        button.style.display = 'none';
        overlayNameBackground.style.display = 'none';
    }, 4000);
});



injectFooter();