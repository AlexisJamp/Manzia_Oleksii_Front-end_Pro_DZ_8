
let user = Object();
user.age;
user.city;
user.sport;

age = prompt('Enter your birthday: ');
city = prompt('Enter city witch you are living: ');
sport = prompt('Enter your lovely sport: ');

// Рaсчет возраста
switch (age){
    case null:
        user.age = `Шкода, що Ви не захотіли ввести свій(ю) вік`;
        break
    default:
        user.age = `Вам ${2024 - Number(age.slice(6))} років`;
        break
}

//Город в которм живем
switch (city) {
    case null:
        user.city = `Шкода, що Ви не захотіли ввести свій(ю) город`;
        break;
    case 'Киев':
        user.city = 'Ви живете у столиці України'
        break;
    case 'Вашингтон':
        user.city = 'Ви живете у столиці США'
        break;
    case 'Лондон':
        user.city = 'Ви живете у столиці Великої Британії'
        break;
    default:
        user.city = `Ви живете у ${user.city}`
        break
}

// Любимый спорт
sportsMan = ["Мбапе", 'Майкл Джордан', 'Майк Тайсон']

switch (sport){
    case null:
        user.sport = `Шкода, що Ви не захотіли ввести свій(ю) улюбленій вид спорту`
        break;
    case 'Футбол':
        user.sport = `Круто! Хочеш стати ${sportsMan[0]}?`
        break;
    case 'Баскетбол':
        user.sport = `Круто! Хочеш стати ${sportsMan[1]}?`
        break
    case 'Бокс':
        user.sport = `Круто! Хочеш стати ${sportsMan[2]}?`
        break
    default:
        user.sport = `Твій улюблений вид спорту ${sport}`
}

alert(`${user.age} \n
${user.city} \n
${user.sport}`)