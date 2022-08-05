alert('Привет! Рада познакомиться!');
const themeToggler = document.getElementById('toggle');

themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark');

});