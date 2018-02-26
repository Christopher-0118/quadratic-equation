module.exports = function solveEquation(equation) {
  let stringofArgs = equation.split(' ');
  let a = +stringofArgs[0];
  let b = +(stringofArgs[3] + stringofArgs[4]);
  let c = +(stringofArgs[7] + stringofArgs[8]);
  let d = Math.pow(b, 2) - 4 * a * c;

  if (d < 0) {
    return;
  } else if ( d === 0) {
    return -b / (2 * a);
  } else if (d > 0) {
    let roots = [];
    
    roots.push(Math.round((-b + Math.sqrt(d)) / (2 * a)));
    roots.push(Math.round((-b - Math.sqrt(d)) / (2 * a)));
    return roots.sort(function(a, b) {
      return a - b;
    });
  }
}
