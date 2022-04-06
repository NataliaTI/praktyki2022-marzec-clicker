const pow = Math.pow,
floor = Math.floor,
abs = Math.abs,
log = Math.log;

let abbrev = ["k","m","b","t","aa","ab","ac","ad","ae","af","ag","ah","ai","aj","ak","al","am","an","ao","ap","ar","as","at","au","aw","az","ba",];

export function round(n, precision) {
  const prec = Math.pow(10, precision + 1);
  return Math.floor(n * prec) / prec;
}

export function format(n) {
  let base = floor(log(abs(n)) / log(1000));
  const suffix = abbrev[Math.min(100, base - 1)];
  base = abbrev.indexOf(suffix) + 1;
  let rep = suffix ? round(n / pow(1000, base), 2) + suffix : "" + n;
  return rep = rep.replace('.',',')
}