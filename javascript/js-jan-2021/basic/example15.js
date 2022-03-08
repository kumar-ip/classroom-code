//if stmt
    //if
    //if else
    //if elseif else - 

    let a = 10;
    let b = 20;

    if (a == b) {
        console.log('both are equal');
    }

    if (a > b) {
        console.log('a is bigger');
    } else {
        console.log('b is bigger or equal');
    }


    if (a > 100 && b > 20) {
        console.log('100+');
    } else if(a > 50 || b > 100) {
        console.log('50+');
    }  else if(a > 25) {
        console.log('25+');
    } else if(a > 250) {
        console.log('25+');
    } else {
        console.log('a is less or equal to 25');
    }



//switch statement

let month = 'January';

switch(month) {
    case 'january': console.log('January'); break;
    case 'Feb': console.log('Feb');break;
    case 'March': console.log('March');break;
    default: console.log('April');
}

let day = 10;

switch(day) {
    case 1: console.log('First'); break;
    default: console.log('Last day');
}