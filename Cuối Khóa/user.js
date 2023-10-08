const login = () => {
    let tk = document.querySelector('.name').value;
    let pass = document.querySelector('.pass').value;
    fetch(" http://localhost:3000/user")
        .then((response) => response.json())
        .then((data) => {
            for (let user of data) {
                if ((tk == user.tk) && (pass == user.password)) {
                    localStorage.setItem('user', JSON.stringify(user))
                    if (user.role == 1) {
                        window.location.href = `admin.html`;
                      
                    }
                    return;
                }
            }
            alert("User not found");
        })
}
