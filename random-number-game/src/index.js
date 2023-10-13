const setNumberInput = document.querySelector("#setnumber");
const guessNumberInput = document.querySelector("#quessnumber");
const playBtn = document.querySelector("#playbtn");
const message = document.createElement("p");
body.appendChild(message);

//숫자 범위 설정하기
function setNumberRange() {
    const value = parseInt(setNumberInput.value);
    if (isNaN(setNumberInput) || setNumberInput < 0) {
        alert("0이상의 숫자를 입력해주세요");
    } else {
        const randomNumber = generateRandomNumber(setNumberInput);
    }

}

// // HTML 엘리먼트 가져오기
// const maxRangeElement = document.getElementById('maxRange');
// const rangeForm = document.getElementById('rangeForm');
// const userMaxRangeInput = document.getElementById('userMaxRange');
// const guessForm = document.getElementById('guessForm');
// const userGuessInput = document.getElementById('userGuess');
// const resultMessage = document.getElementById('resultMessage');

// // 초기 범위 설정 폼 제출 이벤트 처리
// rangeForm.addEventListener('submit', (e) => {
//     e.preventDefault(); // 기본 폼 제출 동작 방지
//     const maxRange = parseInt(userMaxRangeInput.value);

//     if (isNaN(maxRange) || maxRange < 1) {
//         alert('유효한 숫자를 입력하세요.');
//     } else {
//         maxRangeElement.textContent = maxRange;
//         guessForm.style.display = 'block';
//         rangeForm.style.display = 'none';
//         userGuessInput.setAttribute('max', maxRange);
//         userMaxRangeInput.disabled = true;
//         userMaxRangeInput.style.display = 'none';
//         userMaxRangeInput.value = '';
//         randomNumber = generateRandomNumber(maxRange);
//     }
// });

// // Play 버튼 클릭 이벤트 처리
// guessForm.addEventListener('submit', (e) => {
//     e.preventDefault(); // 기본 폼 제출 동작 방지
//     const userGuess = parseInt(userGuessInput.value);

//     if (isNaN(userGuess) || userGuess < 0 || userGuess > maxRangeElement.textContent) {
//         alert('유효한 숫자를 입력하세요.');
//     } else if (userGuess === randomNumber) {
//         resultMessage.textContent = '축하합니다! 승리했습니다.';
//         randomNumber = generateRandomNumber(maxRangeElement.textContent);
//     } else {
//         resultMessage.textContent = '아쉽지만 실패했습니다. 다시 시도하세요.';
//     }
// });


// //Play 클릭 이벤트
// function guessNumber() {

//     const userGuess = parseInt(guessNumberInput.value);
//     if (isNaN(userGuess) || userGuess < 0 || userGuess > setNumberInput.textContent) {
//         alert("0보다 크고 최초 설정값보다 작은 숫자를 입력해주세요");
//     } else if (userGuess === randomNumber) {
//         const message = document.createElement("p")
//         document.body.appendChild(message);
//         message.innerText = "You won!";

//     } else { message.innerText = "You lost!" }
// }

// //랜덤 숫자 만들기
// function randomNumber(number) {
//     return Math.ceil(Math.random() * number)
// }

// //플레이 버튼 클릭 시 이벤트 리스너
// playBtn.addEventListener("click", guessNumber);

// HTML 엘리먼트 가져오기
const maxRangeElement = document.getElementById('maxRange');
const currentMaxRangeElement = document.getElementById('currentMaxRange');
const userMaxRangeInput = document.getElementById('userMaxRange');
const guessForm = document.getElementById('guessForm');
const userGuessInput = document.getElementById('userGuess');
const resultMessage = document.getElementById('resultMessage');

// 초기 범위 설정 함수
function setRange() {
    const maxRange = parseInt(userMaxRangeInput.value);

    if (isNaN(maxRange) || maxRange < 1) {
        alert('유효한 숫자를 입력하세요.');
    } else {
        maxRangeElement.innerHTML = maxRange;
        currentMaxRangeElement.innerHTML = maxRange;
        guessForm.style.display = 'block';
        document.getElementById('rangeForm').style.display = 'none';
        userGuessInput.setAttribute('max', maxRange);
        userMaxRangeInput.disabled = true;
        userMaxRangeInput.style.display = 'none';
        userMaxRangeInput.value = '';
        randomNumber = generateRandomNumber(maxRange);
    }
}

// Play 버튼 클릭 함수
function playGame() {
    const userGuess = parseInt(userGuessInput.value);

    if (isNaN(userGuess) || userGuess < 0 || userGuess > maxRangeElement.textContent) {
        alert('유효한 숫자를 입력하세요.');
    } else if (userGuess === randomNumber) {
        resultMessage.innerHTML = '축하합니다! 승리했습니다.';
        randomNumber = generateRandomNumber(maxRangeElement.textContent);
    } else {
        resultMessage.innerHTML = '아쉽지만 실패했습니다. 다시 시도하세요.';
    }
}

// 랜덤 숫자 생성 함수
function generateRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}