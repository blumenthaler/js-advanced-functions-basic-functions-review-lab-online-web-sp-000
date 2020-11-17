function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity="go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(fun="*") {
    return function(parameter="special") {
        return `You are ${fun}${parameter}${fun}!`
    }
}

let Calculator = {
    add: function() {
       return 1 + 3
    },
    subtract: function() {
        return 1 - 3
    },
    multiply: function() {
        return 1 * 3
    },
    divide: function() {
        return 10 / 5
    }
}

function actionApplyer(integer, functions) {
    for (let i = 0; i < functions.length; i++) {
        integer = functions[i](integer)
    }
    return integer
}

// 13, 
// multiplied by 2, 
// added to 1000 
// and then modulo 7 
// is 4. 

// Apply each function in the Array of functions on the given base (13) OR on the result of the use of the previous function to get this result: expected undefined to equal 4