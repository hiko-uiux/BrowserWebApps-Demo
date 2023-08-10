/*
Lesson-01：DOMに要素を追加Level-1
*/
const data01_btn = document.querySelector("#contents-data01 > div > button");
const data01_Title = document.querySelector("#contents-data01 > div > p");
const data01_List = document.querySelector("#contents-data01 > div > ul");

//演出
data01_btn.addEventListener("click", () => {
  for (let count = 3; count >= 0; count--) {
    setTimeout(() => {
      data01_Title.textContent = count;
      data01_Title.classList.add("textZoom");
    }, 1000 * (3 - count));
  }
  //解除
  setTimeout(() => {
    data01_Title.classList.remove("textZoom");
    //Lesson
    const newItem = `<li class="newItem">これです</li>`;
    data01_List.insertAdjacentHTML("afterbegin", newItem);
  }, 4500);
});
