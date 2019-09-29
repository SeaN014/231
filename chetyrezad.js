let f = 9;
let d = 3;
function odin(a,b)
{
alert('Сумма чисел равна '+ ( a+b));
}
function dva(a,b)
{
alert('Разность чисел равна '+ (a-b));
}
function tre(a,b)
{
alert('Произведение чисел равно ' + (a*b));
}
function chetyre(a,b)
{
alert('Частное чисел равно '+ (a/b));
}
let c = prompt('Какое действие вы хотите выполнить(Символ)');
switch (c)
{
case '+':
odin(f,d);
break;
case '-':
dva(f,d);
break;
case '*':
tre(f,d);
break;
case '/':
chetyre(f,d);
break;
default:
alert('Вы ввели что-то не то');
}
