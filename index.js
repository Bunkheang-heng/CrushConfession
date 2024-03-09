const yes = document.querySelector("#yes");
const no = document.querySelector("#no");
const confirmation = document.querySelector(".confirmation");
const container = document.querySelector(".container");

yesAnswerMethod = () => {
    container.style.display = 'none'
    confirmation.style.display = 'block'
}

noAnswerMethod = () => {
    no.style.position = 'absolute'

    xPosition = Math.floor(Math.random() * container.clientWidth)
    yPosition = Math.floor(Math.random() * container.clientHeight)

    no.style.top = `${yPosition}px`
    no.style.left = `${xPosition}px`

}

no.addEventListener('click', noAnswerMethod)
yes.addEventListener('click', yesAnswerMethod)

document.getElementById("fix").addEventListener("click", function(){
    window.location= "https://www.facebook.com/heng.bunkheang.3";
}, false);