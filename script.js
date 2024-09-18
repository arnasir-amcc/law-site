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




document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('overlay-button').addEventListener('click', function() {
        document.getElementById('landing-page-overlay').classList.add('overlay-remove');
        console.log("Overlay removed.");
    });
});

const overlayBoxes = document.querySelectorAll('.overlay-centre-boxes');
const landingOverlay = document.getElementById('landing-page-overlay');
const overlayNameBackground = document.getElementById('overlay-name-background');

// Loop through each .overlay-centre-boxes to add the hover events
overlayBoxes.forEach(box => {
  // Add event listener for hovering (mouse over)
  box.addEventListener('mouseover', function() {
    overlayNameBackground.style.opacity = '0.8';
    landingOverlay.style.opacity = '0.5'; // Change the opacity of the parent
  });

  // Add event listener for when the mouse leaves (mouse out)
  box.addEventListener('mouseout', function() {
    overlayNameBackground.style.opacity = '0.65';
    landingOverlay.style.opacity = '1'; // Reset the opacity of the parent
  });
});



injectFooter();