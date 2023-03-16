let searchStart = document.getElementById('menu-user__search-icon-in-computer');
let searchVisible = document.getElementById('menu-user__search-form-in-computer');
let searchClose = document.getElementById('menu-user-search-close-in-computer');

searchStart.addEventListener ('click', function() {
    searchVisible.classList.toggle('searchVisible');
});
searchClose.addEventListener ('click', function() {
    searchVisible.classList.remove('searchVisible');
});