//Lesson-01~02：DOMに要素を追加-Level2
const data02_List = document.querySelector("#contents-data02 > ul");

// 追加データを別DOMで作成
const data02_newFragment = document.createDocumentFragment();

for (let i = 0; i < 3; i++) {
  const $li = document.createElement("li");
  data02_newFragment.appendChild($li);
}

data02_List.appendChild(data02_newFragment);
