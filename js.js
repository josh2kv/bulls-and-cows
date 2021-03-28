// 입력창에 숫자만 입력할 수 있도록
// 같은 숫자를 1개이상 입력할 수 없도록
// 4자리미만의 숫자를 입력할 수 없도록
// 새게임 시작버튼->시작하면 사라짐
// 게임 끝나면 입력창 및 버튼 비활성화
// 입력한 번호 및 결과 출력 & 기록 공간 따로
// 정답출력 공간 따로
// 남은 기회 출력 공간 따로

let answerNum = [];
let inputNum = [];
let inputNumString = 0;
let printResult = 0;
let strikeCount = 0;
let ballCount = 0;
let outCount = 0;

let printResultArea = document.createElement('h1');
let inputForm = document.createElement('form');
let inputArea = document.createElement('input');
let inputButton = document.createElement('button');

function getNewAnswerNum() {
  const baseNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let pickedNum = [];
  for (let i = 0; i < 4; i++) {
    pickedNum[i] = baseNum.splice(Math.floor(Math.random() * 9 - i), 1)[0];
  }
  return pickedNum;
}

document.body.append(printResultArea);
document.body.append(inputForm);
inputForm.append(inputArea);
inputForm.append(inputButton);

inputArea.type = 'text';
inputArea.maxLength = 4;
inputButton.textContent = 'Swing!';
inputArea.value = '';
inputArea.focus();

answerNum = getNewAnswerNum();

inputForm.addEventListener('submit', (event) => {
  event.preventDefault();
  outCount++;
  console.log('정답', answerNum);
  inputNumString = inputArea.value;

  // String -> Array(String)
  inputNum = inputNumString.split('');
  // Array(String) -> Array(Number)
  inputNum = Array.from(inputNum).map(Number);
  console.log('입력된 값', inputNum);

  // Strike & Ball count
  // 이중 반복문보다 효율적이고 간단함
  for (let i = 0; i < 4; i++) {
    if (answerNum[i] === inputNum[i]) {
      strikeCount++;
    } else if (inputNum.indexOf(answerNum[i]) > -1) {
      ballCount++;
    }
  }
  // Print result
  if (strikeCount === 4) {
    result = `${answerNum.join('')} HOMERUN!`;
    answerNum = getNewAnswerNum();
    outCount = 0;
  } else if (outCount === 5) {
    result = `GAME OVER!`;
  } else {
    result = `${strikeCount} STRIKE, ${ballCount} BALL!`;
  }
  printResultArea.textContent = result;
  strikeCount = 0;
  ballCount = 0;
  inputArea.value = '';
  inputArea.focus();
});

// // VARIABLES for HTML
// let printResult = document.createElement('h1');
// let inputForm = document.createElement('form');
// let inputArea = document.createElement('input');
// let inputButton = document.createElement('button');

// // VARIABLES for JS
// let strikeScore = 0;
// let ballScore = 0;
// let triedNum = 0;
// let answerNum = 0;

// // FUNCTIONS
// function getNewAnswerNum() {
//   inputArea.value = '';
//   inputArea.focus();
//   let baseNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//   let answerNumArr = [];
//   for (let i = 0; i < 4; i += 1) {
//     // splice(a,b) : a가 배열의 배열의 길이를 넘는 인덱스로 되면 없는 배열값을 b에 저장하게 되므로 undefined 됨 -> 따라서 -i해줘야댐

//     answerNumArr[i] = baseNum.splice(Math.floor(Math.random() * 9) - i, 1)[0];
//   }

//   return answerNumArr.join('');
// }

// function gradeTriedNum() {
//   if (answerNum === triedNum) {
//     printResult = 'HOMERUN!';
//     printGrade(printResult);
//     getNewAnswerNum();
//   } else {
//     let answerNumArr = [];
//     answerNumArr = answerNum.split('');
//     Number(triedNum);
//     triedNum = triedNum.split('');
//     // 중첩반복문으로 처리하는 것보다 효율적이고 간단

//     for (let i = 0; i < 4; i += 1) {
//       if (answerNumArr[i] === triedNum[i]) {
//         strikeScore += 1;
//       }
//       // 있으면 해당 index, 없으면 -1 반환
//       else if (triedNum.indexOf(answerNumArr[i]) > -1) {
//         ballScore += 1;
//       }
//     }
//     printResult;
//   }
// }

// function printGrade(Result) {
//   printResult.textContent = result;
//   strikeScore = 0;
//   ballScore = 0;
//   inputArea.value = '';
//   inputArea.focus();
// }

// // HTML
// document.body.append(printResult);
// document.body.append(inputForm);
// inputForm.append(inputArea);
// inputForm.append(inputButton);

// inputArea.type = 'text';
// inputArea.maxLength = 4;
// inputButton.textContent = 'Swing!';

// // JS
// answerNum = getNewAnswerNum();

// inputForm.addEventListener('submit', function (event) {
//   event.preventDefault();
//   triedNum = inputArea.value;
//   console.log(answerNum, triedNum);
//   console.log(`${answerNum === triedNum}`);
//   gradeTriedNum();
// });
