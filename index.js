document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav');

    if (!burger) {
        console.error("'.burger' element not found in DOM");
        return;
    }
    if (!nav) {
        console.error("'.nav' element not found in DOM");
        return;
    }

    burger.addEventListener('click', function() {
        this.classList.toggle('active');
        nav.classList.toggle('open');
    });
});