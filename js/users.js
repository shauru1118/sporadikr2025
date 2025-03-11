
// fs.readFile('../database/users.txt', 'utf8', (err, data) => {
//     if (err) {
//         throw err
//     }
//     let user_password = data.split("\r\n")
//     console.log(user_password.forEach(element => console.log(element)))
// })

export async function check_user(login, password) {
    let flag = false
    try {
        const response = await fetch('../database/users.txt'); // Загружаем файл
        const text = await response.text();
        console.log(text);
        const users = text.split(' ');
        console.log(users, login + "#" + password, users.includes(login + "#" + password));
        if (users.includes(login + "#" + password) == true) {
            flag = true
        } else {
            flag = false
        }
    } catch (error) {
        console.error('Ошибка загрузки:', error);
    }
    console.log("flag: " + flag)
    return flag
}

// console.log("Hello, world!")
// module.exports = check_user


