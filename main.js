
const getYourColor=()=>
{
    const randomNumber = Math.floor(Math.random() *16777215);
    const randomValue = "#" + randomNumber.toString(16);
    document.body.style.backgroundColor = randomValue;
    document.getElementById("color-name").innerText = randomValue
}

document.getElementById("btn").addEventListener("click", getYourColor)

getYourColor();