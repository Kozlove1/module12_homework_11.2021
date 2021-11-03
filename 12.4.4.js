function HomeElectronics (name, underdog) {
    this.name = name
    this.underdog = underdog
}

HomeElectronics.prototype.onOff = function (tumbler) {
    if (tumbler === 1){
       console.log (`Прибор подключен, время стирки, ни каких игр`)
    }else {
        console.log('Пойду лучше по играю')
    }
}

function GameElectronics (name, controller, underdog) {
    this.controller = controller
    this.name = name
    this.underdog = underdog
}


GameElectronics.prototype = new HomeElectronics()
GameElectronics.prototype.onOff = function (tumbler) {
    if (tumbler === 1){
        console.log (`Прибор подключен, начинаем играть`)
    }
}

const tv = new GameElectronics("Dude_TV", "remote_controller", 'No');
tv.electricity = 50
tv.chooseVolume = function (volume) {
    console.log(`Звук поставим на ${volume}`)
}

const washingMachine = new HomeElectronics("Dude_Wm", 'Yes');
washingMachine.electricity = 110


const gameConsole = new GameElectronics("Dude_Console", "stick", "No");
gameConsole.electricity = 60
gameConsole.chooseGame = function (game) {
    console.log(`Будем играть в ${game}`)
}



console.log(washingMachine)
washingMachine.onOff(0, 120)

console.log(tv)
tv.onOff(1, 50)
tv.chooseVolume(30)


console.log(gameConsole)
gameConsole.chooseGame('Horizone')
gameConsole.onOff(1, 60)
