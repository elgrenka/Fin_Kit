const ru = document.querySelector('.ru');
const en = document.querySelector('.en');
const btn = document.querySelectorAll('.btn');

ru.addEventListener('click', () => {
    ru.classList.add('active');
    en.classList.remove('active');
});

en.addEventListener('click', () => {
    en.classList.add('active');
    ru.classList.remove('active');
});

for (let b of btn) {
    b.addEventListener('click', () => {
        alert('Check your email');
    })
}



