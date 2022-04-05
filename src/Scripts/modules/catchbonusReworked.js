import {format} from '../Components/format.js';

let catchbonusaddable = Boolean(true);

function getRandomcoordinates() {
    const mincoordinates = 135;
    const windowHeight = window.innerHeight - mincoordinates;
    const windowWidth = window.innerWidth - mincoordinates;

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
      export function bonus(counter, autoClick) {
        const max = 1;
        const min = 0 
        let randombonus = Math.floor (Math.random()*(max - min + 1)+ min);
        const bonus = bonusList[randombonus];
        console.log(bonus.type);
        if (bonus.type == 'counterValue')  {
          counter = counter + Math.floor(counter/5);  
          console.log(Math.floor(counter/5))
          return { counter };
      
         }else {     
          let oldAutoClick = format(autoClick);
          oldAutoClick = oldAutoClick.replace('.',',');
          autoClick = autoClick + autoClick;
          let autoClickFormat = format(autoClick);
          autoClickFormat = autoClickFormat.replace('.',',')
          const this2 = document.querySelector("body");
          let money = document.createElement('div');
          money.classList.add('click');
          money.style.fontSize = 'large'
          money.style.left = 50 + '%';
          money.style.top = 50 + '%';
          this2.appendChild(money);

          let moneyClick = document.createElement('span');
          moneyClick.classList.add('moneyClick2');
          money.appendChild(moneyClick);
  
          moneyClick.textContent = '+'+ oldAutoClick + ' $ na sekunde przez xyz sekund';
           document.getElementById('moneyPerSecond').innerHTML ='Na sekunde: ' + autoClickFormat +' $';
           setTimeout(() => {
            money.remove()
        },1500);

          document.getElementById('moneyPerSecond').innerHTML ='Na sekunde: ' + autoClickFormat +' $';

          return autoClick;
        }
      }