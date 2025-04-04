  const openIframe = document.getElementById('openIframe');
    const iframeContainer = document.getElementById('iframeContainer');
    const closeIframe = document.getElementById('closeIframe');

    openIframe.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        iframeContainer.style.display = 'block'; // Show the iframe container
    });

    closeIframe.addEventListener('click', function() {
        iframeContainer.style.display = 'none'; // Hide the iframe container
    });

    // Close the iframe with the Esc key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            iframeContainer.style.display = 'none'; // Hide the iframe container
        }
    });

    // Optional: Close the iframe with the PlayStation button (if applicable)
    // This is just a placeholder as the PlayStation button is not a standard key event
    document.addEventListener('keydown', function(event) {
        if (event.key === 'YourPlayStationButtonKey') { // Replace with actual key if needed
            iframeContainer.style.display = 'none'; // Hide the iframe container
        }
    });
