module.exports = function zeros(expression) {
  let arr = expression.split('*');
  let c0 = 0;
  let c2 = 0;
  let c5 = 0;

  arr.forEach((item) => {
    if (item.indexOf('!!') != -1) {
      item = item.replace('!!', '');
      if (item % 2 === 0) {
        for (let j = 0; j <= item; j++) {
          if (j % 10 === 0 & j != 0) {
            let tens = String(j).split('');
            for (let k = 0; k < tens.length; k++) {
              if (tens[k] === '0') {
                c0 += 1;
              } else if (tens[k] === '5') {
                c5 += 1;
              } else if (tens[k] === '2') {
                c2 += 1;
              }
            }
          } else if (j % 2 === 0 & j != 0) {
            c2 += 1;
          } else if (j % 5 === 0 & j != 0) {
            if (j % 25 === 0) {
              c5 += 2;
            } else {
              c5 += 1;
            }
          }
          j += 1;
        }
      } else {
        for (let j = 1; j <= item; j++) {
          if (j % 10 === 0 & j != 0) {
            let tens = String(j).split('');
            for (let k = 0; k < tens.length; k++) {
              if (tens[k] === '0') {
                c0 += 1;
              } else if (tens[k] === '5') {
                c5 += 1;
              } else if (tens[k] === '2') {
                c2 += 1;
              }
            }
          } else if (j % 2 === 0) {
            c2 += 1;
          } else if (j % 5 === 0 & j != 0) {
            if (j % 25 === 0) {
              c5 += 2;
            } else {
              c5 += 1;
            }
          }
          j += 1;
        }
      }
    } else if (item.indexOf('!') != -1) {
      item = item.replace('!', '');
      for (let j = 1; j <= item; j++) {
        if (j % 10 === 0 & j != 0) {
          let tens = String(j).split('');
          for (let k = 0; k < tens.length; k++) {
            if (tens[k] === '0') {
              c0 += 1;
            } else if (tens[k] === '5') {
              c5 += 1;
            } else if (tens[k] === '2') {
              c2 += 1;
            }
          }
        } else if (j % 2 === 0) {
          c2 += 1;
        } else if (j % 5 === 0 & j != 0) {
          if (j % 25 === 0) {
            c5 += 2;
          } else {
            c5 += 1;
          }
        }
      }
    }
  });

  if (c2 < c5) {
    return (c2 + c0);
  } else {
    return (c5 + c0);
  }
};
