//실험해보고 싶다면 다음의 절차를 진행하세요.
//1. npm install inquirer
//2. ESM 방식으로만 동작하는 외부 CLI 라이브러리
import inquirer from "inquirer";
//? inquirer 라이브러리의 .prompt() 메서드는 프로미스를 반환하도록 작성되어있습니다.
//?then() 매서드로 입력 받은 데이터를 전달할 수 있습니다.

//inquirer 모듈은 Node.js 환경에서 CLI(Command Line Interface)에서
// 대화형 인터페이스를 쉽게 만들어주는 라이브러리입니다. inquirer 모듈을 사용하면 사용자와의 상호작용을 통해 입력을 받고, 선택을 할 수 있는 다양한 질문 유형들을 쉽게 만들 수 있습니다.

function shuffleArray(array) {
  // 배열을 복사하여 원본 배열에 영향을 주지 않도록 합니다.
  const shuffledArray = array.slice();

  // 배열을 랜덤하게 섞습니다.
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  // `confirm` 객체를 배열의 마지막 인덱스로 이동시킵니다.
  const confirmObj = shuffledArray.find((obj) => obj.name === "confirm");
  const confirmIndex = shuffledArray.indexOf(confirmObj);
  shuffledArray.splice(confirmIndex, 1);
  shuffledArray.push(confirmObj);

  return shuffledArray;
}
function exampleOne(array) {
  const shuffledArray = shuffleArray(array);
  return shuffledArray;
}

//Q.2 아래에 작성된 .prompt()는 인자로 배열을 요구하므로,
//위의 작성한 exampleOne을 활용하여 입력 데이터를 실행할 때마다 섞어 출력하도록 하세요.
//공부법으로 유명한 flash card의 주요 코어로직입니다.

inquirer
  .prompt(
    exampleOne([
      {
        type: "input",
        name: "name",
        message: "당신의 이름은 무엇입니까?",
      },
      {
        type: "list",
        name: "like food",
        message: "당신이 좋아하는 우유는 무엇입니까?",
        choices: ["바나나우유", "딸기우유", "초코우유", "그냥우유"],
      },
      {
        type: "confirm",
        name: "confirm",
        message: "확실합니까?",
      },
    ])
  )
  .then((answers) => {
    console.log("Answers:", answers);
  });
//inquirer 모듈에서 제공하는 prompt() 함수를 사용해서 입력 받을 질문 유형과 내용을 정의하고,
//then() 함수에서 사용자가 입력한 값을 출력합니다.

// ? 당신이 좋아하는 우유는 무엇입니까? 초코우유
// ? 당신의 이름은 무엇입니까? 정지은
// ? 확실합니까? Yes
// Answers: { 'like food': '초코우유', name: '정지은', confirm: true }
