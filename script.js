document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const darkModeIcon = document.getElementById('dark-mode-icon');
    const linkedinIcon = document.getElementById('linkedin-icon');
    const githubIcon = document.getElementById('github-icon');
    const emailIcon = document.getElementById('email-icon');
    const resumeLinkIcon = document.getElementById('resume-link-icon');
    const resumeLinkIcon1 = document.getElementById('resume-link-icon1');
    const bottomMailLinkIcon = document.getElementById('bottom-mail-link-icon');
    const bottomLinkedinLinkIcon = document.getElementById('bottom-linkedin-link-icon');
    const bottomGithubLinkIcon = document.getElementById('bottom-github-link-icon');

    // Function to update the button icons based on the current mode
    function updateButtonIcons() {
        if (document.body.classList.contains('dark-mode')) {
            darkModeIcon.src = 'assets/light-mode-gradient.png';
            darkModeIcon.alt = 'assets/Toggle Light Mode';
            linkedinIcon.src = 'assets/linkedin-white.png';
            githubIcon.src = 'assets/github-white.png';
            emailIcon.src = 'assets/email-white.png';
            resumeLinkIcon.src = 'assets/link-white.png';
            resumeLinkIcon1.src = 'assets/link-white.png';
            bottomMailLinkIcon.src = 'assets/link-white.png';
            bottomLinkedinLinkIcon.src = 'assets/link-white.png';
            bottomGithubLinkIcon.src = 'assets/link-white.png';
        } else {
            darkModeIcon.src = 'assets/dark-mode-gradient.png';
            darkModeIcon.alt = 'assets/Toggle Dark Mode';
            linkedinIcon.src = 'assets/linkedin-black.png';
            githubIcon.src = 'assets/github-black.png';
            emailIcon.src = 'assets/email-black.png';
            resumeLinkIcon.src = 'assets/link-black.png';
            resumeLinkIcon1.src = 'assets/link-black.png';
            bottomMailLinkIcon.src = 'assets/link-black.png';
            bottomLinkedinLinkIcon.src = 'assets/link-black.png';
            bottomGithubLinkIcon.src = 'assets/link-black.png';
        }
    }

    // Check the user's preferred color scheme
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add('dark-mode');
        document.documentElement.classList.add('dark-mode');
    }

    // Update the button icons on initial load
    updateButtonIcons();

    // Add event listener to the toggle button
    darkModeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        document.documentElement.classList.toggle('dark-mode');
        updateButtonIcons();
    });
});

function toggleTopNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}