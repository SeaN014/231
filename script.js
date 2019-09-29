let X=15;
let Y=6;
if (X>Y) {
  alert('x больше, чем y');
} else {
  alert('x меньше, чем y');
}

let A=prompt('Введите число');
if (A==='0') {
  alert('Error');
}
else {

if (A%2===0 ) {
  alert('число четное');
} else {
  alert('число нечетное');
}
}

let C=prompt('Введите число 1');
let D=prompt('Введите число 2');
let F=prompt('Введите число 3');
if (C>D && C>F) {
  alert (C);
} else {
  if (D>C && D>F) {
    alert(D);
  }
  alert(F)
}
let P=prompt('Введите число 1');
let R=prompt('Введите число 2');
let S=confirm('Выполнить сложение?');
if (S) {
  alert(P+R);
} else {
  alert('Error');
}
