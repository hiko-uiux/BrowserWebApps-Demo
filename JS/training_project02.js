//ToDoリストアプリ
//Lesson-03~05：DOMに要素を追加-Level2
const data02_List = document.querySelector("#contents-data02 > div > ul");
const data02_InputBTN = document.getElementById("data02-text_taskInputBTN");

// 追加データを別DOMで作成
// const data02_newFragment = document.createDocumentFragment();

// for (let i = 0; i < 3; i++) {
//   const $li = document.createElement("li");
//   data02_newFragment.appendChild($li);
// }

// data02_List.appendChild(data02_newFragment);

// input-valueテスト
data02_InputBTN.addEventListener("click", funcTest);
function funcTest(event) {
  event.preventDefault();
  const data02_TaskInput = document.getElementById("data02-text_taskInput");
  console.log(data02_TaskInput.value);
}
// const funcTest = () => {
//   const data02_TaskInput = document.getElementById("data02-text_taskInput");
//   console.log(data02_TaskInput.value);
// };
