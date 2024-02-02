let homeButton = document.querySelector('#home');
let aboutButton = document.querySelector('#info');

homeButton.addEventListener('click', () => {
    window.location.href = 'index.html';
});

aboutButton.addEventListener('click', () => {
    window.location.href = 'about-me.html';
});