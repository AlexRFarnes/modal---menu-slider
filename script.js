const toggleBtn = document.getElementById('toggle');
const modalOpenBtn = document.getElementById('open');
const modalEl = document.getElementById('modal');
const modalCloseBtn = document.getElementById('close');


// Toggle nav
toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('show-nav');
});

// Show modal
modalOpenBtn.addEventListener('click', () => {
    modalEl.classList.add('show-modal');
})

// Hide modal
modalCloseBtn.addEventListener('click', () => {
    modalEl.classList.remove('show-modal');
})

// Hide modal on outside click

window.addEventListener('click', e => {
    e.target === modalEl ? modal.classList.remove('show-modal') : false;
})