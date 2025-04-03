// Function to initialize the version control, cursor hiding, and context menu prevention
function initializeCustomBehavior() {
    // Show a version for version control
    console.log('%cVersion 1.4.0', 'color: red; font-style: italic;');

    // Log the current HTML file and its file path
    console.log(`%cFile: ${document.location.pathname}`, 'color: red; font-style: italic;');

    // Function to hide the default cursor globally
    function hideDefaultCursor() {
        const globalStyle = document.createElement('style');
        globalStyle.innerHTML = `* { cursor: none !important; }`;
        document.head.appendChild(globalStyle);
        console.log("Default cursor hidden");
    }

    // Call hideDefaultCursor function
    hideDefaultCursor();

    // Prevent context menu unless Shift is held
    document.addEventListener('contextmenu', function(e) {
        if (!e.shiftKey) {
            e.preventDefault();
        }
    });
}

// Call this function when you want to execute the behavior
initializeCustomBehavior();

