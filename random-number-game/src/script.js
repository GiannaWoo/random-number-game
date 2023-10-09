const title = document.createElement("h1");
title.innerText = "Random Number Game";
document.body.appendChild(title);

const guide = document.createElement("h2");
guide.innerText = "Generate a number between 0 and";
document.body.appendChild(guide);


//특정값을 입력하면 0부터 특정값까지의 정수로 구성된 array 만들기
//해당 어레이에서 랜덤 숫자 하나 선택
//랜덤 숫자와 유저 입력값 비교 => 같으면 "You won!", 다르면 "You lost!"