// Написать, функцию, которая принимает в качестве аргумента объект
// И выводит в консоль все ключи и значения только собственных свойств.
//     Данная функция не должна возвращать значение.
const car = {
    porsche: "green",
    audi: "grey",
    volvo: "bej"
}

function keyInObj (obj){
    for (let key in obj){
        if (obj.hasOwnProperty(key)){
            console.log(key)
        }
    }

}

keyInObj(car)
