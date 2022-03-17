let pow = Math.pow,
  floor = Math.floor,
  abs = Math.abs,
  log = Math.log;
let abbrev = ["k","m","b","t","aa","ab","ac","ad","ae","af","ag","ah","ai","aj","ak","al","am","an","ao","ap","ar","as","at","au","aw","az","ba",
];
function round(n, precision) {
  let prec = Math.pow(10, precision);
  return Math.floor(n * prec) / prec;
}
function format(n) {
  let base = floor(log(abs(n)) / log(1000));
  let suffix = abbrev[Math.min(100, base - 1)];
  base = abbrev.indexOf(suffix) + 1;
  return suffix ? round(n / pow(1000, base), 2) + suffix : "" + n;
}

