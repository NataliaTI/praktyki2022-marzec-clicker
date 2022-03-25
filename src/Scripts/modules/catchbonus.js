let counter = 150;
let autoClick = 2;
let oldAutoClick
oldAutoClick = autoClick
import {format} from '../Components/format.js';
//import {autoClickFormat, returnedFormatedValue} from '../modules/upgrades.js';
//import {autoClick, counter} from '../../../Layout/main.js';
//let counter = document.getElementById("counter");
console.log(counter);

const catchbonus = document.getElementById("catchbonus");
const timeToCatch = setTimeout(disapear, 5000)
let catchbonusaddable;

catchbonusaddable = Boolean(true);

let windowHeight = window.innerHeight
let windowWidth = window.innerWidth

console.log(windowHeight);
console.log(windowWidth);

function getRandomHeight(minHeight,windowHeight) {
    minHeight = 130
    windowHeight = window.innerHeight - 130
    console.log(windowHeight);
    if (minHeight > windowHeight){
        let tmp = minHeight;
        minHeight = windowHeight;
        windowHeight = tmp;
    }
    return Math.floor (Math.random()*(windowHeight - minHeight + 1)+ minHeight);
  }

  function getRandomWidth(minWidth,windowWidth) {
    minWidth = 130
    windowWidth = window.innerWidth - 130
    console.log(windowWidth);
    if (minWidth > windowWidth){
        let tmp = minWidth;
        minWidth = windowWidth;
        windowWidth = tmp;
    }
    return Math.floor (Math.random()*(windowWidth - minWidth + 1)+ minWidth);
  }

  function getRandomTime(mintime,maxtime){
    mintime = 6000
    maxtime = 12000
    
    return Math.floor (Math.random()*(maxtime - mintime + 1)+ mintime);
  }
  function makediv(){
    
    console.log(catchbonus)
    if(catchbonusaddable == true ){
    const cnt = document.querySelector(".wrap");
    const catchbonus = document.createElement("div");
    catchbonus.id="catchbonus";
    catchbonus.classList.add("catchbonus")
    console.log(catchbonus)
    catchbonus.after(cnt);
    console.log(cnt)
    catchbonusaddable = false
    //catchbonusaddable = Boolean(false);
   } 
  }
  let randomtime = getRandomTime();
  console.log(randomtime)

  let randomWidth
  let randomHeight

  setInterval(() => {
    randomWidth = getRandomWidth();
    randomHeight = getRandomHeight();
    positionchange();
    makediv();
    console.log(counter);
    console.log(getRandomHeight)
      console.log(getRandomWidth)

  }, 3000)

     function positionchange(){
      catchbonus.style.top = randomHeight + 'px';
      catchbonus.style.left = randomWidth + 'px';
     }
    function testt(){
      setInterval(() => {
        console.log(autoClick)
        let autoClickFormat = format(autoClick)
          console.log(autoClickFormat)
      }, 4000);
        // console.log(randomHeight);
        // console.log(randomWidth);
        // console.log(randomtime);
      }
      function onclickdisapear(){
        testt();
        onclickbonus();
        onclickbonus2();
        console.log(counter);

        catchbonus.remove();
        catchbonusaddable = true
        //catchbonusaddable = Boolean(true);
        
        }
        function disapear(){
          catchbonus.remove();
          catchbonusaddable = true
          //catchbonusaddable = Boolean(true);
        }
        function stop(){
          setTimeout(() => {
            autoClick = autoClick - oldAutoClick;
          }, 5000);
        }
        function onclickbonus(){
          console.log(counter);
          //let counter = counter;
          counter = counter + Math.floor(counter/5);          
        }
        function onclickbonus2(){
          autoClick = autoClick + autoClick          
          let autoClickFormat = format(autoClick)
          //autoClick = autoClickFormat
          document.getElementById('moneyPerSecond').innerHTML ='Na sekunde: ' + autoClickFormat +' $';
          setTimeout(stop(), 5000)
          console.log(autoClick)
          console.log(autoClickFormat)
        }

      catchbonus.onclick = onclickdisapear;

    //  setInterval(getRandomTime, randomtime)
    //  setInterval(testt, randomtime)
    //  setInterval(getRandomHeight, randomtime)
    //  setInterval(getRandomWidth, randomtime)
    //  setInterval(test, randomtime)
    //  setInterval(test2, randomtime)