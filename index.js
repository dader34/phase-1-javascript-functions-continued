function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(work="go to the office"){
    return `This Monday, I will ${work}.`
}

function wrapAdjective(symb="special"){
    function wrap(word){
        return `You are ${symb}${word}${symb}!`
    }
    return wrap
}