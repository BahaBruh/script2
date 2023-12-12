





var name = prompt( 'введите имя')
var age = prompt( ' введите возраст')
if ( age < 18) {
    alert( 'вы еще молоды, вам нужно учится' )

} else if ( age > 18 && age < 50) {
    
    alert( 'вам нужно работать')
} else if ( age > 50 && age < 59) {
    alert( ' вам скоро на пенсию')
} else if ( age > 59 && age < 100) {
    alert( 'вы пенсионер')
} else{

    alert( ' произошла ошибка')
}



var time = +prompt( 'Введите время')

switch (time) {
    case 1:
        alert(' сейчас час ночи')
        break;
    case 2:
        alert('сейчас 2 часа ночи')
        break;
    case 3:
        alert('сейчас 4 часа ночи')
        break;
    case 4:
        alert('сейчас 4 часа утра')
        break;
    case 5:
        alert('сейчас 5 часов утра')
        break;
    case 6:
        alert('сейчас 6 часов утра')
        break;
    case 7:
        alert('сейчас 7 часов утра')
        break;
    case 8:
        alert('сейчас 8 часов утра')
        break;
    case 9:
        alert('сейчас 9 часов утра')
        break;
    case 10:
        alert('сейчас 10 часов утра')
        break;
    case 11:
        alert('сейчас 11 часов дня')
        break;
    case 12:
        alert('сейчас 12 часов днЯ')
        break;
    case 13:
        alert('сейчас полдень')
        break;
    case 14:
        alert('сейчас 2 часа дня')
        break;
    case 15:
        alert('сейчас 3 часа дня')
        break;
    case 16:
        alert('сейчас 4 часа дня')
        break;
    case 17:
        alert('сейчас 5 часов вечера')
        break;
    case 18:
        alert('сейчас 6 часов вечера')
        break;
    case 19:
        alert('сейчас 7 часов вечера')
        break;
    case 20:
        alert('сейчас 8 часов ночи')
        break;
    case 21:
        alert('сейчас 9 часов ночи')
        break;
    case 22:
        alert('сейчас 10 часов ночи')
        break;
    case 23:
        alert('сейчас 11 часов ночи')
        break;
    case 24:
        alert('сейчас 12 часов ночи')
        break;

    default:

    alert(' Ошибка')
        break;
}









var a = prompt( ' Введите первое число')
var b = prompt( ' Введите второе число')
var c = prompt( ' Введите третье число')



a = Number(a)
b = Number(b)
c = Number(c)

if ( a > b && a < c ) {
    alert(' среднее число ' + a)
}else if ( b > a && b < c ) {
    alert(' среднее число ' + b)
}else if ( c > b && c < a ) {
    alert(' среднее число ' + c)
}else{
    if ( isNaN(a) && isNaN(b) && isNaN(c)){
        alert(' все не числа')
    }else if(a){
        alert(' первое не число')
    }else if(b){
        alert(' второе  не число')
    }else{
        alert(' третье не число')
    }
}


