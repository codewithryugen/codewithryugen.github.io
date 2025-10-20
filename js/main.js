// This file contains JavaScript code for the website. It may include simple interactivity or functionality, such as form validation or event handling.

document.addEventListener('DOMContentLoaded', function() {
    // Example of a simple alert on button click
    const button = document.getElementById('alertButton');
    if (button) {
        button.addEventListener('click', function() {
            alert('Welcome to the 1990s-style website!');
        });
    }

    // Example of form validation
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function(event) {
            const nameInput = document.getElementById('name');
            if (nameInput.value.trim() === '') {
                alert('Please enter your name.');
                event.preventDefault();
            }
        });
    }
});