// Fun alert when the page loads
window.onload = function() {
    alert("Welcome!);
};

// Example function to simulate loading news and stats
function loadContent() {
    const newsContainer = document.getElementById('news-container');
    const statsContainer = document.getElementById('stats-container');

    // Fake loading news (replace with actual API later)
    newsContainer.innerHTML = '<p>Latest Sports News: NBA, MLB, and NFL updates here!</p>';

    // Fake loading stats (replace with actual API later)
    statsContainer.innerHTML = '<p>Live Stats: NBA, MLB, NFL player stats here!</p>';
}

// Simulate loading content after page load
setTimeout(loadContent, 2000);  // Fake load after 2 seconds
