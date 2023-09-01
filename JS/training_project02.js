//ToDoリストアプリ
//Lesson-03~05：DOMに要素を追加-Level2
const data02_taskInput = document.querySelector("#data02-text_taskInput");
const data02_List = document.querySelector("#data02-taskOutput > ul");
const data02_AddBTN = document.getElementById("data02-taskAddBTN");
const data02_status = document.getElementById("data02-statusBox");

// task追加⇒ 完了btn追加
data02_AddBTN.addEventListener("click", addList);

async function addList(event) {
  event.preventDefault();

  // 1.入力値の登録
  const data02_TaskName = document
    .getElementById("data02-text_taskInput")
    .value.trim();

  data02_AddBTN.classList.add("disabled"); //クリック禁止開始
  // 2.DOM：追加
  if (data02_TaskName !== "") {
    // 2-1.item追加
    $li = document.createElement("li");
    $li.classList.add("textBox", "flexBox", "flexBetween");
    data02_List.appendChild($li);

    // 2-2.task名追加
    $taskName = document.createElement("p");
    $taskName.textContent = data02_TaskName;
    $taskName.classList.add("gridBox", "itemCenter");
    $li.appendChild($taskName);

    // 2-3.btnボックス追加
    $BTNs = document.createElement("div");
    $BTNs.classList.add("flexBox", "data02-BTNs");
    $li.appendChild($BTNs);

    // 2-3.DOM：削除btn追加
    $rmBTN = document.createElement("button");
    $rmBTN.textContent = "削除";
    $rmBTN.classList.add("btnBox_s", "boxBorder_SR", "grayL_bg");
    $BTNs.appendChild($rmBTN);

    // 2-2.DOM：完了btn追加
    $compBTN = document.createElement("button");
    $compBTN.textContent = "完了";
    $compBTN.classList.add(
      "btnBox_s",
      "boxBorder_SR",
      "black_bg",
      "white_text"
    );
    $BTNs.appendChild($compBTN);

    // 3.DOM：入力欄value削除
    data02_taskInput.value = "";

    // 4.DOM：statusMsg追加
    await statusMsg("タスクを追加しました", 1, 200, 1000, 300);
  }
  data02_AddBTN.classList.remove("disabled"); //クリック禁止終了

  // task完了リストの登録
  const taskRmBRNs = document.querySelectorAll("#data02-taskOutput > ul > li");
}

// Plus+：task完了
data02_List.addEventListener("click", async (event) => {
  event.preventDefault();
  const item = event.target;

  // 実験：item削除⇒：複数の削除メッセージが同時に表示
  if (item.textContent === "削除") {
    item.closest("li").remove();
    await statusMsg("タスクを削除しました", 0, 200, 1000, 300);
  } else if (item.textContent === "完了") {
    item.classList.remove("black_bg");
    item.classList.add("green_bg");
    item.textContent = "✓";
    await statusMsg("タスクが完了しました", 2, 200, 1000, 300);
  }
});

// Promise：⇒ taskステータスメッセージ
function statusMsg(msgText, event, duration1, duration2, duration3) {
  // msgデータ登録
  const $msgTextAdd = `<p class="data02-statusMsg textBox white_text grayD_bg">${msgText}</p>`;
  const $msgTextRM = `<p class="data02-statusMsg textBox white_text red_bg">${msgText}</p>`;
  const $msgTextComp = `<p class="data02-statusMsg textBox white_text green_bg">${msgText}</p>`;
  // 非同期処理その1
  return (
    new Promise((resolve) => {
      setTimeout(() => {
        // メッセージ内容の分岐
        switch (event) {
          case 1:
            data02_status.insertAdjacentHTML("beforeend", $msgTextAdd);
            break;
          case 0:
            data02_status.insertAdjacentHTML("beforeend", $msgTextRM);
            break;
          case 2:
            data02_status.insertAdjacentHTML("beforeend", $msgTextComp);
            break;
        }
        data02_status.classList.add("show", "fadeUp");
        resolve();
      }, duration1);
    })
      // 非同期処理その2
      .then(() => {
        return new Promise((resolve) => {
          setTimeout(() => {
            data02_status.classList.remove("show", "fadeUp");
            resolve();
          }, duration2);
        });
      })
      // 非同期処理その3
      .then(() => {
        return new Promise((resolve) => {
          setTimeout(() => {
            const data02_statusText = document.querySelector(
              "#data02-statusBox > p"
            );
            data02_status.removeChild(data02_statusText);
            resolve();
          }, duration3);
        });
      })
  );
}

// ...
// 実験
// ...
