var square = document.getElementById('quadrado');
var press;

square.addEventListener("mousedown", (e) => { // evento acionado quando o botão do mouse é pressionado (nesse evento que o Long Click ocorre)
        press = window.setTimeout(() => {
            e.target.classList.toggle('expand'); // realiza a transformação do quadrado
        },500);
})

square.addEventListener("mouseup", () => { // evento acionado quando Long click acaba
    clearTimeout(press); // limpa o cronômetro definido pelo setTimeout()
})

