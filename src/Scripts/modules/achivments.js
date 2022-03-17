var a = achievements[i];
function onClickHandler() {
    counter++;
    changeCounterElementText(counter);
}
counterButtonElement.onclick = onClickHandler;

class achievements {
    constructor(name, text, checkFunction) {
        this.name = name;
        this.text = text;
        this.checkFunction = checkFunction;
    }
}

  function initClickHandling() {

    var numClicks = 0;

    achievements.push(new achievements(
          "Clicktastic", 
          "You clicked 10 times!", 
          function() {
              return numClicks > 10;
          })
    );


    window.onclick = function() {
         numClicks++;
    }
}
achievements.forEach(function(achievement) {
    if (achievement.checkFunction()) {
          // award the achievement
    }
});
