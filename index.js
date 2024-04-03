function saturdayFun(string = 'roller-skate') {
    return `This Saturday, I want to ${string}!`

}

function mondayWork(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`


}

function wrapAdjective(highlight = '*') {
    return function (quality = 'special') {
        return `You are ${highlight}${quality}${highlight}!`
    }
}
wrapAdjective('||')('hard')