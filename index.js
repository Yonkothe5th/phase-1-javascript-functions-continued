// code your solution here
function saturdayFun ( activity ="roller-skate" ){
     return `This Saturday, I want to ${activity}!`
    }
    
    saturdayFun ("bathe my dog");

    const mondayWork = function( task = 'go to the office'){
        return `This Monday, I will ${task}.`
    }
    mondayWork ("work from home");

    function wrapAdjective( sym = "*"){
        return function(what = "special"){
            return `You are ${sym}${what}${sym}!`
        }
    }
    
    wrapAdjective("%")("a dedicated programmer")