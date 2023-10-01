const login = () => {
    let tk = document.querySelector('.name').value;
    let pass = document.querySelector('.pass').value;
    fetch(" http://localhost:3000/user")
        .then((response) => response.json())
        .then((data) => {
            console.log(tk,pass);
            for(let user of data) {
                console.log(user.tk , user.pass);
                if((tk==user.tk) && (pass == user.password)){
                    localStorage.setItem('user' , JSON.stringify(user))
                    if(user.role==1) {
                        window.location.href =`admin.html`;
                    } 
                }
            }
        })
}
