// code your solution here
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}
saturdayFun();
saturdayFun("ice-skate");

function mondayWork(activity = "go to the office"){
    return `This Monday, I will ${activity}.`;
}

/*
function wrapAdjective(bold = "*"){
     const innerFunction = function(bold){
        return `You are ${bold} ${string} ${bold}!`;
    }
    return wrapAdjectived();
}
*/



function wrapAdjective (x = "*") {
    const output = input => `You are ${x}${input}${x}!`;
    return output;
}
