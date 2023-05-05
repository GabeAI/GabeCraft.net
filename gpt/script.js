let input = document.getElementById("input");
input.value = "";
let inputColumns = 1;

function resetInputField() {
    input.value = "";
    inputColumns = 1;
    input.style.height = inputColumns * 24 + "px";
}

async function getResponse(element, prompt) {
    element.innerHTML = "<img class=\"loading\" src=\"loading.svg\">"
    await new Promise(r => setTimeout(r, 2000 + Math.random() * 4000));
    element.innerHTML = "<img class=\"abyss\" src=\"https://media.discordapp.net/attachments/985027682070831114/1081124054628577340/abyss.png\">"
}

function onSend() {
    document.getElementById("info").style.display = "none";
    document.getElementById("chat").style.display = "block";
    document.getElementById("chat").insertAdjacentHTML("beforeend", "<p class=\"a\">" + input.value + "</p>");
    document.getElementById("chat").insertAdjacentHTML("beforeend", "<p class=\"b\"></p>");
    getResponse(document.getElementById("chat").lastElementChild, input.value)
    resetInputField();
}

input.addEventListener("keyup", function (event) {
    if (input.scrollWidth > input.clientWidth) {
        inputColumns += 1;
        input.style.height = inputColumns * 24 + "px";
        input.value = input.value.slice(0, input.value.length - 1) + "\n" + input.value.slice(input.value.length - 1);
    }


    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("submit").click();
    }
})