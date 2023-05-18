const ru = document.querySelector('.ru');
const en = document.querySelector('.en');
const btn = document.querySelector('.btn');

ru.addEventListener('click', () => {
    ru.classList.add('active');
    en.classList.remove('active');
});

en.addEventListener('click', () => {
    en.classList.add('active');
    ru.classList.remove('active');
});

btn.addEventListener('click', () => {
    alert('Check your email');
})



