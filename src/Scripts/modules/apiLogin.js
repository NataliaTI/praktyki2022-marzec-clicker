export function login(params) {
    if(!localStorage.getItem("Token")){
        fetch('https://praktyki-trol-clicker-api.herokuapp.com/login').then(response => response.json())
        .then(data => data.Data.Token).then(token => {
            localStorage.setItem("Token", token);
        });
    }
}