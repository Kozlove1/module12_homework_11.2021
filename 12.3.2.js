// Написать функцию, которая принимает в качестве аргументов строку и объект,
//     а затем проверяет есть ли у переданного объекта свойство с данным именем.
//     Функция должна возвращать true или false.

const car = {
    porsche: "green",
    audi: "grey",
    volvo: "bej"
}

function chekStringInObject1 (str, obj) {
    console.log(str in obj)
}

function chekStringInObject2 (str, obj) {
    for (let key in obj)
        if (str === obj[key]){
            console.log(true)
            return
        } else {
            console.log(false)
        }

}



    chekStringInObject1("porsche", car)
    chekStringInObject2("green", car)
