document.addEventListener('DOMContentLoaded', () => {
    const applyButton = document.getElementById('applyButton');
    const spinner = applyButton.querySelector('.spinner');
    const buttonText = applyButton.querySelector('.button-text');
    const targetUrl = 'https://wee.bnking.in/c/OTFmMmU0Y';

    applyButton.addEventListener('click', (event) => {
        // Prevent default form submission if it were a form
        event.preventDefault();

        // 1. Show Loading State
        applyButton.classList.add('loading');
        spinner.classList.remove('hidden');
        applyButton.disabled = true; // Disable the button

        // 2. Simulate a brief delay (e.g., for API call) before navigating
        // We use a small timeout to ensure the user sees the animation before navigation occurs.
        setTimeout(() => {
            // 3. Navigate to the desired URL
            window.location.href = targetUrl;
        }, 800); // 800ms delay to show the spinner
    });
});


