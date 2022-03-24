const catchbonus = document.getElementById("catchbonus");
const timeToCatch = setTimeout(disapear, 5000)

let windowHeight = window.innerHeight
let windowWidth = window.innerWidth
//let randomtime
//let randomHeight
//let randomWidth
let minHeight = 1
let minWidth = 1

console.log(windowHeight);
console.log(windowWidth);

function getRandomHeight(minHeight,windowHeight) {
    minHeight = 50
    windowHeight = window.innerHeight - 50
    //randomHeight = Math.floor (Math.random()*(windowHeight - minHeight + 1)+ minHeight);
    console.log(windowHeight);
    if (minHeight > windowHeight){
        let tmp = minHeight;
        minHeight = windowHeight;
        windowHeight = tmp;
    }
    return Math.floor (Math.random()*(windowHeight - minHeight + 1)+ minHeight);
  }
  //let randomHeight = getRandomHeight();
  function getRandomWidth(minWidth,windowWidth) {
    minWidth = 130
    windowWidth = window.innerWidth - 130
    //randomWidth = Math.floor (Math.random()*(windowWidth - minWidth + 1)+ minWidth);
    console.log(windowWidth);
    if (minWidth > windowWidth){
        let tmp = minWidth;
        minWidth = windowWidth;
        windowWidth = tmp;
    }
    return Math.floor (Math.random()*(windowWidth - minWidth + 1)+ minWidth);
  }
  //let randomWidth = getRandomWidth();
  function getRandomTime(mintime,maxtime){
    mintime = 6000
    maxtime = 12000
    //randomtime = Math.floor (Math.random()*(maxtime - mintime + 1)+ mintime);
    
    return Math.floor (Math.random()*(maxtime - mintime + 1)+ mintime);
  }
  function makediv(){
    //const catchbonus = document.getElementById("catchbonus");
    
    //console.log(catchbonus)
    //if(catchbonus.id != "catchbonus" ){
      // delete catchbonus;
    const cnt = document.querySelector(".wrap");
    const catchbonus = document.createElement("div");
    catchbonus.id="catchbonus";
    catchbonus.classList.add("catchbonus")
    // catchbonus.style.backgroundColor = "blueviolet";
    // catchbonus.style.position = "absolute";
    // catchbonus.style.width = "100" + 'px';
    // catchbonus.style.height = "100" + 'px';
    // catchbonus.style.cursor = "pointer";
    console.log(catchbonus)
    //catchbonus.style.transform = "translate(-50%,-50%)";
    catchbonus.after(cnt);
    // delete catchbonus;
    console.log(cnt)
   } 
  //}
  let randomtime = getRandomTime();
  console.log(randomtime)

  let randomWidth
  let randomHeight

  setInterval(() => {
    randomWidth = getRandomWidth();
    randomHeight = getRandomHeight();
    el = positionchange();
    makedivlet = makediv();
    // setInterval(() => {
    //   //catchbonus.classList = "catchbonus niewiem";
    // catchbonus.remove();
    // delete catchbonus
    // },500)
    console.log(getRandomHeight)
      console.log(getRandomWidth)

  }, 3000)

    //  setInterval(getRandomTime, randomtime)
    //  setInterval(testt, randomtime)
    //  setInterval(getRandomHeight, randomtime)
    //  setInterval(getRandomWidth, randomtime)
    //  setInterval(test, randomtime)
    //  setInterval(test2, randomtime)

     function positionchange(){
      catchbonus.style.top = randomHeight + 'px';
      catchbonus.style.left = randomWidth + 'px';
     }
    function testt(){
        console.log(randomHeight);
        console.log(randomWidth);
        console.log(randomtime);
      }
        // function stop(){
        //   error("error")
        // }
      function onclickdisapear(){
        onclickbonus();
        onclickbonus2();

        catchbonus.remove();
        
        }
        function disapear(){
          catchbonus.remove();
        }

        function onclickbonus(){
          counter = counter + floor(counter/5);
          
        }
        function onclickbonus2(){
          autoClick = autoClick + autoClick
          autoClickFormat = format(autoClick)
          //autoClick = autoClickFormat
          document.getElementById('moneyPerSecond').innerHTML ='Na sekunde: ' + autoClickFormat +' $';
          const bonustime = setTimeout(stop(), 5000)
          console.log(autoClick)
          console.log(autoClickFormat)
        }
      

      catchbonus.onclick = onclickdisapear;

