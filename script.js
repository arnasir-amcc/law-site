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

injectFooter();
