// Capturar os inputs
const bancoInput = document.querySelector("input[type='text']");
const numeroInputs = document.querySelectorAll(".numeroCartao");
const dataInputs = document.querySelectorAll(".data");
const nomeInput = document.querySelectorAll("input[type='text']")[1]; // O segundo input de texto (nome)


const bancoNoCartao = document.getElementById("bancoNoCartao");
const numeroNoCartao = document.getElementById("numeroNoCartao");
const dataNoCartao = document.getElementById("dataNoCartao");
const nomeNoCartao = document.getElementById("nomeNoCartao");

bancoInput.addEventListener("input", () => {
    bancoNoCartao.textContent = bancoInput.value || "Banco";
});


numeroInputs.forEach((input, index) => {
    input.addEventListener("input", () => {
        let numeroCompleto = Array.from(numeroInputs).map(input => input.value.padEnd(4, "X")).join(" ");
        numeroNoCartao.textContent = numeroCompleto;
    });
});


dataInputs.forEach((input, index) => {
    input.addEventListener("input", () => {
        dataNoCartao.textContent = `${dataInputs[0].value.padStart(2, "0")}/${dataInputs[1].value.padStart(2, "0")}`;
    });
});


nomeInput.addEventListener("input", () => {
    nomeNoCartao.textContent = nomeInput.value || "Nome da Pessoa";
});
