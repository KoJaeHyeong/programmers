// 대소문자 바꿔서 출력하기
// 문제 설명
// 영어 알파벳으로 이루어진 문자열 str이 주어집니다. 각 알파벳을 대문자는 소문자로 소문자는 대문자로 변환해서 출력하는 코드를 작성해 보세요.

// 제한사항
// 1 ≤ str의 길이 ≤ 20
// str은 알파벳으로 이루어진 문자열입니다.
// 입출력 예
// 입력 #1

// aBcDeFg
// 출력 #1

// AbCdEfG

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let result = "";

rl.on("line", function (line) {
  input = [line];
}).on("close", function () {
  //     str = input[0];

  //     str.split('').map((e) => {
  //         if (e === e.toUpperCase()) {

  //             result += e.toLowerCase();

  //         } else {
  //             result += e.toUpperCase();
  //         }

  //     });

  //      console.log(result);
  str = input[0];
  const regex = /[A-Z]/;
  // const array = []
  // for (let i = 0; i < str.length; i++) {
  //     regex.test(str[i]) ? array.push(str[i].toLowerCase()) : array.push(str[i].toUpperCase());
  // }
  // console.log(array.join(''))
  console.log(
    [...str]
      .map((v) => (regex.test(v) ? v.toLowerCase() : v.toUpperCase()))
      .join("")
  );
});
