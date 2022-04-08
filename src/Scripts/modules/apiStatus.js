import { showContent } from "../Components/alert";

export const loadGameState = fetch('https://praktyki-trol-clicker-api.herokuapp.com/game-states', {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+localStorage.getItem("Token")
    }
})
.then(response => {
    if (response.status == 200) {
        return response.json();
    } else {
        return false;
    }    
})
.then(data => {
    if (data && data.hasOwnProperty('Data')) {
        return data.Data;
    } else {
        return false;
    }
});


export async function saveGameState(gameState) {
    fetch('https://praktyki-trol-clicker-api.herokuapp.com/game-states', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+localStorage.getItem("Token")
        },
        body: JSON.stringify(gameState),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        showContent('Zapisano stan gry', 'Kliknij X aby zamknac powiadomienie', 'Saveicon.png');
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}