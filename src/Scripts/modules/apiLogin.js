export function login(params) {
    if(!localStorage.getItem("Token")){
        fetch('http://praktyki-trol-clicker-api.herokuapp.com/login/').then(response => response.json())
        .then(data => data.Data.Token).then(token => {
            localStorage.setItem("Token", token);
            let tok = localStorage.getItem("Token");           
            console.log(tok);
        });
    }else{
        console.log("test");    
    }
}
//TEST
/*
fetch('https://api.github.com/users/NataliaTi/repos').then(
    resp => resp.json() // this returns a promise
    ).then(repos => {
        for (const repo of repos) {
            document.write(repo.name);
        }
    }).catch(ex => {
        document.write(ex);
    })
*/
