function add (num1 , num2){
    return num1 + num2
}

function  multi (num1 ,num2){
    return num1*num2
}

function minus (num1 , num2){
    return num1 > num2 ? num1 - num2 : num2 - num1;
}

module.exports = {
    add : add,
    multi : multi,
    minus : minus
}