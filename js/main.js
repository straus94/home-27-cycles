// 1. Создать массив «Список покупок». Каждый элемент массива является объектом, 
// который содержит название продукта, необходимое количество и куплен или нет.
//  Написать несколько функций для работы с таким массивом.

let list = [{
    product: 'bread',
    how: 4,
    isBuy: true
}, {
    product: 'juice',
    how: 2,
    isBuy: false
}, {
    product: 'potato',
    how: 11,
    isBuy: true
}, {
    product: 'tomato',
    how: 8,
    isBuy: true
}, {
    product: 'candy',
    how: 12,
    isBuy: false
}];

// Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.
sortByBuy = arr => {
    arr.sort(function(a, b) {
        return a.isBuy - b.isBuy;
    });

    return arr;
}

// console.log(sortByBuy(list));

// Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом, 
// необходимо увеличивать количество в существующей покупке, а не добавлять новую.
addList = (arr, product) => {
    for (let elem of arr) {
        if (elem.product == product) {
            elem.how += 1;
            return arr;
        }
    }
    arr.push({product: product, how: 1, isBuy: false});
    return arr;
}

// addList(list, 'coca cola');
// addList(list, 'potato');
// addList(list, 'coca cola');
// console.log(list);


// Покупка продукта. Функция принимает название продукта и отмечает его как купленный.
buyProduct = (arr, product) => {
    let is = false;
    for (let i of arr) {
        if (i.product == product) {
            is = true;
            if (is) {
                i.isBuy = true;
                return arr;
            }
        } 
        // else {
        //     arr.push({product: product, how: 1, isBuy: false});
        //     return arr;
        // }
        is = false;
    }
        arr.push({product: product, how: 1, isBuy: false});

    return arr;
}

// buyProduct(list, 'candy');
// console.log(list);



// 2. Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара, 
// количества и цены за единицу товара. Написать следующие функции:

let facture = [{
        name: 'PS4',
        how: 1,
        price: 500}, {
        name: 'XBOX',
        how: 1,
        price: 450
    }, {
        name: 'tetris',
        how: 20,
        price: 40
    }, {
        name: 'spinner',
        how: 7,
        price: 21
    }, {
        name: 'iPhone',
        how: 1,
        price: 1000
    }];

// Распечатка чека на экран;
printFacture = arr => {
    for (let i of arr) {
        document.write(`<div>${i.name} - ${i.price}\$ for the ${i.how} position</div>`);
    }
}
printFacture(facture);
// Подсчет общей суммы покупки;
fullPrice = arr => {
    let total = 0;
    for (let i of arr) {
        total += i.price;
    }
    document.write(`<br><br><div>total price - ${total}\$</div>`)
}
fullPrice(facture);
// Получение самой дорогой покупки в чеке;
mostExpensive = arr => {
    let expensive = 0;
    let res;
    for (let i of arr) {
        if ((i.price / i.how) > expensive) {
            expensive = i.price / i.how
            res = i.name;
        }
    }
    return document.write(`<br><br><div>The most expensive product is ${res}, it cost ${expensive} for the 1 position</div>`);
}
mostExpensive(facture);
// Подсчет средней стоимости одного товара в чеке.
midlPrice = arr => {
    let fullPrice = 0;
    let fullPosition = 0;
    let res = 0;
    for (let i of arr) {
        fullPrice += i.price;
        fullPosition += i.how;
    }
    res = fullPrice / fullPosition;
    return document.write(`<br><br><div>average cost of one position - ${res.toFixed(2)}\$</div>`);
}
midlPrice(facture);


// Создать массив CSS-стилей (цвет, размер шрифта, выравнивание, подчеркивание и т. д.). 
// Каждый элемент массива – это объект, состоящий из двух свойств: название стиля и значение стиля. 

let styles = [{
    name: 'color:',
    value: 'red;'
}, {
    name: 'font-size:',
    value: '20px;'
}, {
    name: 'text-align:',
    value: 'center;'
}, {
    name: 'text-decoration:',
    value: 'underline;'
}];

// Написать функцию, которая принимает массив стилей и текст, и выводит этот текст с помощью document.write() 
// в тегах <p></p>, 
// добавив в открывающий тег атрибут style со всеми стилями, перечисленными в массиве.

customTextStyle = (arr, text) => {
    let res = '';
    for (let i of arr) {
            res += i.name + i.value;
    }
    // console.log(res);
    return document.write(`<p style=${res}>${text}</p>`);
}
customTextStyle(styles, 'Hello');



// 4. Создать массив аудиторий академии. Объект-аудитория состоит из названия, 
// количества посадочных мест (от 10 до 20) и названия факультета, для которого она предназначена. 
// Написать несколько функций для работы с ним^
let rooms = [{
    name: 'math',
    seat: 18,
    faculty: 'phisics-mathematicks'
}, {
    name: 'chemical',
    seat: 14,
    faculty: 'chemical biology'
}, {
    name: 'IT',
    seat: 10,
    faculty: 'programming engineering'
}, {
    name: 'literature',
    seat: 20,
    faculty: 'literature'
}, {
    name: 'probability theory',
    seat: 15,
    faculty: 'phisics-mathematicks'
}];

// Вывод на экран всех аудиторий;
getRooms = arr => {
    for (let i of arr) {
    console.log(i.name);    
    }
    return arr;
}
// console.log(getRooms(rooms));



// Вывод на экран аудиторий для указанного факультета;
getFaculty =(arr, faculty) => {
    let res = [];
    for (let i of arr) {
        if (i.faculty == faculty) res.push(i.name); 
    }
    return res;
}
// console.log(getFaculty(rooms, 'phisics-mathematicks'));


// Вывод на экран только тех аудиторий, которые подходят для переданной группы.
//  Объект-группа состоит из названия, количества студентов и названия факультета;
let group = {
    name: 'front end',
    how: 10,
    faculty: 'programming engineering'
}
getRoomsOfFaculity = (arr, group) => {
    let groupFaculty = group.faculty;
    let res = '';
    for (let i of arr) {
        if (i.faculty == groupFaculty) {
            res += i.faculty;
        }
    }
    return res;
}
// console.log(getRoomsOfFaculity(rooms, group));


// Функция сортировки аудиторий по количеству мест;
sortBySeat = arr => {
    arr.sort((a, b) => {
        return b.seat - a.seat;
    })
}
// sortBySeat(rooms);
// console.log(rooms)



// Функция сортировки аудиторий по названию (по алфавиту).
sortByName = arr => {
    let names = [];
    let res = [];
    for (let i of arr) {
        names.push(i.name);
    }
    names.sort();
    // console.log(names);

    for (let i of names) {
        for (let j of arr) {
            if (j.name == i) {
                res.push(j);
            }
        }
    }
    return res;
}
console.log(sortByName(rooms));
// console.log(rooms)