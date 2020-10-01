/* user из БД */
const user = {
    name: "Name",
    lastname : "Lastname",
    email: "name@lst.na",
    id: "1",
    about: "Что-то обо мне...",
    avatar: "https://static8.depositphotos.com/1207999/1027/i/950/depositphotos_10275222-stock-photo-office-avatar-man.jpg"
}
const users = {
    0: {name: "Марина", lastname: "Крутелева"},
    1: {name: "Евгений", lastname: "Гребешков"},
    2: {name: "Камаз", lastname: "Отходов"},
    3: {name: "Отряд", lastname: "Ковбоев"},
    4: {name: "Борис", lastname: "Бритвин"},
    5: {name: "Гарри", lastname: "Поттер"},
    6: {name: "Олег", lastname: "Патручев"},
    7: {name: "Иван", lastname: "Петров"},
    8: {name: "Юнона", lastname: "Авосина"},
    9: {name: "Гектор", lastname: "Троянов"}
}

export function getUser(){
    return user;
}
export function getUsers(){
    return users;
}

