const btn = document.querySelector('.btn-toggle-color');
const body = document.body;

btn.addEventListener('click', () => {
    const isDarkMode = body.classList.toggle('dark-mode');

    if (isDarkMode) {
        btn.innerText = 'Turn on light mode';
    } else {
        btn.innerText = 'Turn on dark mode';
    }
});