

let iconTranslete = document.querySelector('.iconTranslate');

translateTesxt = "Welcome to Daily Rate Calculation, this application aims to help and speed up the final procedure of settling accounts for the driver, based on the current value of daily allowances for the professional."
originalText = "Bem Vindo ao Calculo de Diarias, essa aplicação tem como objetivo auxiliar e agilizar o procedimento final de acerto de contas ao motorista, com base no valor atual de diarias destinada ao profissional."

let text = document.querySelector('.textSubtitle').innerHTML = originalText

iconTranslete.addEventListener('mousedown', () => {
    let text = document.querySelector('.textSubtitle')

    text.textContent = translateTesxt;
})

iconTranslete.addEventListener('mouseup', () => {
    let text = document.querySelector('.textSubtitle')

    text.textContent = originalText;
})