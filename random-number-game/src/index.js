const setNumberValue = document.querySelector("#setnumber");
const guessNumberInput = document.querySelector("#quessnumber");
const playBtn = document.querySelector("#playbtn");

//숫자 범위 설정하기
function setNumberRange() {
    const value = setNumberInput.value;

}

//Play 클릭 이벤트
function guessNumber() {
    const userGuess = parseInt(guessNumberInput.value);
    if (isNaN(userGuess) || userGuess < 0) {
        alert("0이상의 숫자를 입력해주세요");
    } else if (userGuess === randomNumber) {
        const message = document.createElement("p")
        document.body.appendChild(message);
        message.innerText = "You won!";

    } else { message.innerText = "You lost!" }
}

//랜덤 숫자 만들기
function randomNumber(number) {
    return Math.ceil(Math.random() * number)
}

//플레이 버튼 클릭 시 이벤트 리스너
playBtn.addEventListener("click", guessNumber);