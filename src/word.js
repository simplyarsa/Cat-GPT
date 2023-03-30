const meow = () => {
    let random = Math.floor(Math.random() * 7) + 3;
    return " meow".repeat(random);
}
let char = ['.', '-', '?', '!'];
let random2, string = meow()
let random3 = Math.floor(Math.random() * 3) + 1
for (let i = 0; i < random3; i++) {
    random2 = Math.floor(Math.random() * 3)
    string += (char[random2] + meow())
}
random2 = Math.floor(Math.random() * 3)
string += char[0]
const capitalized =
    string.charAt(1).toUpperCase()
    + string.slice(2)

export default capitalized