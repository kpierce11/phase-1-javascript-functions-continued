function saturdayFun(activity = "roller-skate") {
return `This Saturday, I want to ${activity}!`;
}

function mondayWork(plans = "go to the office") {
return `This Monday, I will ${plans}.`
};

function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
        return `You are ${flair}${adjective}${flair}!`;
    };
}