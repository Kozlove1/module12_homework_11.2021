class HomeElectronics {
    constructor(name, underdog) {
        this.name = name
        this.underdog = underdog
    }
    onOff(tumbler) {
        if (tumbler === 1) {
            console.log(`Прибор подключен, время стирки, ни каких игр`)
        } else {
            console.log('Пойду лучше по играю')
        }
    }
}

class GameElectronics extends HomeElectronics{
    constructor(controller, name, underdog){
        super(name, underdog)
        this.controller = controller
    }
    onOff(tumbler) {
        if (tumbler === 1){
            console.log (`Прибор подключен, начинаем играть`)
        } else {
            return super.onOff(1)
        }
    }
}


const tv = new GameElectronics("remote_controller", "Dude_TV", 'No');
tv.electricity = 50
tv.chooseVolume = function (volume) {
    console.log(`Звук поставим на ${volume}`)
}

const washingMachine = new HomeElectronics("Dude_Wm", 'Yes');
washingMachine.electricity = 110


const gameConsole = new GameElectronics("stick", "Dude_Console", "No");
gameConsole.electricity = 60
gameConsole.chooseGame = function (game) {
    console.log(`Будем играть в ${game}`)
}



console.log(washingMachine)
washingMachine.onOff(0, 120)

console.log(tv)
tv.onOff(0, 50)
tv.chooseVolume(30)


console.log(gameConsole)
gameConsole.chooseGame('Horizone')
gameConsole.onOff(0, 60)
