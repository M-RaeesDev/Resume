// Get the button and the skills section by their IDs
const toggleButton = document.getElementById('toggleSkillsBtn');
const skillsSection = document.getElementById('skills');

// Add an event listener to the button for the click event
toggleButton?.addEventListener('click', () => {
    // Check if the skills section is currently displayed
    if (skillsSection) {
        // Toggle the display between 'block' (show) and 'none' (hide)
        if (skillsSection.style.display === 'none') {
            skillsSection.style.display = 'block'; // Show the skills section
            toggleButton.innerText = 'Hide Skills Section'; // Update button text
        } else {
            skillsSection.style.display = 'none'; // Hide the skills section
            toggleButton.innerText = 'Show Skills Section'; // Update button text
        }
    }
});
