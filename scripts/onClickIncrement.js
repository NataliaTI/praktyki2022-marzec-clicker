const counterElement = document.getElementById('counter');
const counterButtonElement = document.getElementById('counter-button');

let counter = 997;
let suffix = counter;


function changeCounterElementText(value) {
    suffix = format(value);
    counterElement.textContent = suffix  + ' $';
    console.log(suffix)
}

function onClickHandler() {
    counter++;
    changeCounterElementText(counter);
}

counterButtonElement.onclick = onClickHandler;


    let pow = Math.pow, floor = Math.floor, abs = Math.abs, log = Math.log;
    let abbrev = ['k','m','b','t','aa','ab','ac','ad','ae','af','ag','ah','ai','aj','ak','al','am','an','ao','ap','ar','as','at','au','aw','az','ba'];

    function round(n, precision)  {
       let prec = Math.pow(10, precision);
       console.log(n)
      return Math.floor(n*prec)/prec;
      
}
    function format(n) {
        let base = floor(log(abs(n))/log(1000));
         let suffix = abbrev[Math.min(100, base - 1)];
         base = abbrev.indexOf(suffix) + 1;
         console.log(n)
      return suffix ? round(n/pow(1000,base),2)+suffix : ''+n;
}