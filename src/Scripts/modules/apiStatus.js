// export function status(params) {
//     if(!localStorage.getItem("points")){
        fetch('../../src/Scripts/test2.json').then(response => response.json())
        .then(data => data.Data.points).then(points => {
            localStorage.setItem("points", points);
            //let tok = localStorage.getItem("Token");           
            //console.log(tok);
        });
//     }/*else{
//         console.log("test");    
//     }*/
// }