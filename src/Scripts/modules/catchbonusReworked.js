import {format} from '../Components/format.js';
import {autoClickFormat} from '../modules/upgrades.js';
let catchbonusaddable = Boolean(true);

function getRandomcoordinates() {
    const mincoordinates = 135
    const windowHeight = window.innerHeight - mincoordinates
    const windowWidth = window.innerWidth - mincoordinates

    return{
        'Height' : Math.floor (Math.random()*(windowHeight - mincoordinates + 1)+ mincoordinates),
        'Width' : Math.floor (Math.random()*(windowWidth - mincoordinates + 1)+ mincoordinates),
    } 
  }
  function makediv(coordinates){ 
    if(catchbonusaddable == true ){
        const cnt = document.querySelector(".wrap");
        const catchbonus = document.createElement("div");
        catchbonus.id="catchbonus";
        catchbonus.classList.add("catchbonus")
        cnt.appendChild(catchbonus);
        catchbonus.style.top = coordinates.Height + 'px';
        catchbonus.style.left = coordinates.Width + 'px';
        catchbonusaddable = false
        catchbonus.addEventListener('click', () => {
            removebonus(catchbonus);
            catchbonusaddable = true
        })
        setTimeout(() => {
                removebonus(catchbonus);
                catchbonusaddable = true
             }, 5000);
    }
  }
  export function catchbonusstart(){
    console.log(counter)
  setInterval(() => {
    let coordinates = getRandomcoordinates();
    makediv(coordinates);
    catchbonusaddable = false

  }, 10000)
}
  function removebonus(catchbonus){
    catchbonus.remove();
    catchbonusaddable = true
    
    }
    const bonusList = [{
        type: "counterValue"
      }, {
        type: "autoClick",
        time: 5000
      }]
      export function bonus(counter, autoClick, e) {
        const max = 1;
        const min = 0 
        let randombonus = Math.floor (Math.random()*(max - min + 1)+ min);
        const bonus = bonusList[randombonus];
      console.log(bonus.type);
        if (bonus.type == 'counterValue')  {
            console.log(counter)
          counter = counter + Math.floor(counter/5); 
          console.log(counter)
          return { counter };
      
         }else {     
          autoClick = autoClick + autoClick  
          let autoClickFormat = format(autoClick)
           document.getElementById('moneyPerSecond').innerHTML ='Na sekunde: ' + autoClickFormat +' $';

            return { autoClick };
        }
      }