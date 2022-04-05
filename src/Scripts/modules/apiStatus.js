fetch('https://praktyki-trol-clicker-api.herokuapp.com/game-states', {
    headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+localStorage.getItem("Token")
    }
}).then(response => response.json())
.then(data => console.log(data));