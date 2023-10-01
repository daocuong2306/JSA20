let check = JSON.parse(localStorage.getItem('user'));

if ((check?.role != 1) || (check == null)) {
    let app = document.querySelector('.app');
    app.innerHTML = 'Not Found';
};

