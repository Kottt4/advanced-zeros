module.exports = function getZerosCount(number, base) {
  var p = [];
  var q = [];
  var c = [];
  var temp = base;
  for (var i = 2; i <= base; i++){
    if (temp/i === Math.floor(temp/i)){
    temp /= i;
    q.push(1);
    p.push(i);
      while (temp/i === Math.floor(temp/i)){
         temp /= i;
         q[q.length-1]++;
      };
    };
  };
  
  for (var j = 0; j <p.length; j++){
  var t = 2;
  c[j] = Math.floor(number/p[j]);
  
    while (number/Math.pow(p[j], t)>= 1){
    c[j] += Math.floor(number/Math.pow(p[j],t));
    t++;
    };
  c[j] = Math.floor(c[j]/q[j]);
  };
  
  c.sort((left, right) => left - right);
  
  var rezalt = c[0];

  return rezalt;
}