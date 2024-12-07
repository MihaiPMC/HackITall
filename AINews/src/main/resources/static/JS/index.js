document.addEventListener('DOMContentLoaded', () => {
    const latestNewsLink = document.getElementById('latest-news-link');
    const latestNewsSection = document.getElementById('latest-news');

    latestNewsLink.addEventListener('click', (event) => {
        event.preventDefault();
        latestNewsSection.classList.toggle('hidden');
    });
});