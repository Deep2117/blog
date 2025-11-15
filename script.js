document.addEventListener('DOMContentLoaded', () => {
    const subscribeForm = document.getElementById('subscribe-form');

    if (subscribeForm) {
        subscribeForm.addEventListener('submit', (event) => {
            // Prevent the default form submission (which reloads the page)
            event.preventDefault();

            const emailInput = subscribeForm.querySelector('input[type="email"]');
            const email = emailInput.value;

            // Simple validation
            if (email) {
                // You can add your form submission logic here
                // For example, sending the email to a server with fetch()
                console.log(`Email submitted: ${email}`);
                alert(`Thank you for subscribing, ${email}!`);
                emailInput.value = ''; // Clear the input field
            } else {
                alert('Please enter a valid email address.');
            }
        });
    }
});