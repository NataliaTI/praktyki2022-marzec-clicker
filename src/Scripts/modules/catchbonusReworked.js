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
          }, 8000);
    }
  }
  export function catchbonusstart(){
  setInterval(() => {
    let coordinates = getRandomcoordinates();
    makediv(coordinates);
    catchbonusaddable = false
  }, 10000)
  // 600000
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
        let randombonus = Math.floor (Math.random()*((bonusList.length-1) + (bonusList.length-1)));
        console.log(bonusList.length)
        const bonus = bonusList[randombonus];
        if (bonus.type == 'counterValue')  {
          const testcounter = counter
          counter = counter + Math.floor(counter / 5)+10;  
          const this2 = document.querySelector("body");
          let money = document.createElement('div');
          money.classList.add('click');
          money.style.left = 50 + '%';
          money.style.top = 50 + '%';
          this2.appendChild(money);

          let moneyClick = document.createElement('span');
          moneyClick.classList.add('moneyClick2');
          money.appendChild(moneyClick);
          
          let bonuscounter = format(Math.floor(testcounter / 5)+10)
          moneyClick.textContent = '+' + bonuscounter + ' $';
          setTimeout(() => {
            money.remove()
        }, 1500);
          return { counter };
      
         }else {     
          let oldAutoClick = format(autoClick+10);
          autoClick = autoClick + autoClick +10;
          let autoClickFormat = format(autoClick);
          const this2 = document.querySelector("body");
          let money = document.createElement('div');
          money.classList.add('click');
          money.style.left = 50 + '%';
          money.style.top = 50 + '%';
          this2.appendChild(money);

          let moneyClick = document.createElement('span');
          moneyClick.classList.add('moneyClick2');
          money.appendChild(moneyClick);
  
          moneyClick.textContent = '+'+ oldAutoClick + ' $ na sekundę przez 10 sekund';
           document.getElementById('moneyPerSecond').innerHTML ='Na sekundę: ' + autoClickFormat +' $';
           setTimeout(() => {
            money.remove()
        },1500);

          document.getElementById('moneyPerSecond').innerHTML ='Na sekundę: ' + autoClickFormat +' $';

          return { autoClick };
        }
      }