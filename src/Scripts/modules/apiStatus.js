async function getGameState(){
    const response = await fetch('https://praktyki-trol-clicker-api.herokuapp.com/game-states', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+localStorage.getItem("Token")
        }
    })
    .then(response => response.json())
    .then(data => data.Data)
    .then(Data => Data);
    return response;
}
let ggs = getGameState();
console.log(ggs);

// async function getGameState(){
//     const response = await fetch('https://praktyki-trol-clicker-api.herokuapp.com/game-states', {
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': 'Bearer '+localStorage.getItem("Token")
//         }
//     })
//     const data = await response.json();
//     return data;
// }
// console.log(getGameState().then(data => data.Data));

let JSONdata = {"Status":"Success","Data":{"startDataTime":"2022-04-13 13:34:55","timeSpentPlaying":"92459750246436537","clickCount":424642,"clickPerSec":1200,"points":3259247,"catchedBonuses":15,"upgradeCount":1500,"achievementsObtained":[1,2,6,12,15],"upgrades":[{"id":1,"quantity":500},{"id":2,"quantity":400},{"id":3,"quantity":300},{"id":4,"quantity":200},{"id":5,"quantity":100}]},"Message":"Success"};
    

fetch('https://praktyki-trol-clicker-api.herokuapp.com/game-states', {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+localStorage.getItem("Token")
    },
    body: JSON.stringify(JSONdata),
})
.then(response2 => response2.json())
.then(data2 => {
    console.log('Success:', data2);
})
.catch((error) => {
    console.error('Error:', error);
});
        