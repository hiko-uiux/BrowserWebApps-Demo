//Lesson-01~02：DOMに要素を追加
const data01_Title = document.querySelector("#contents-data01 p");
const data01_Box = document.querySelector("#contents-data01 > figure");
const data01_List = document.querySelector("#contents-data01 > ul");
const data01_btn1 = document.querySelector("#contents-data01 > div > button");

//出力内容
let data01_clickCount = 0;
const data01_wordList1 = ["明日", "明後日", "3日後の", "4日後の", "5日後の"];
const data01_wordList2 = [
  "午前6時",
  "午前10時",
  "14時",
  "18時",
  "22時",
  "午前2時",
];
const data01_wordList3 = [
  "とっても良いことが起きる！",
  "良いことが起きる！",
  "恋に落ちるかも...",
  "かわいい犬と遭遇する",
  "欲しいものがセール中！",
];
const data01_wordGroup = [data01_wordList1, data01_wordList2, data01_wordList3];

const data01_imgList = [
  { src: "./MEDIA/shining.png", alt: "代替" },
  { src: "./MEDIA/music.png", alt: "代替" },
  { src: "./MEDIA/hearts.png", alt: "代替" },
  { src: "./MEDIA/dog.png", alt: "代替" },
  { src: "./MEDIA/sale.png", alt: "代替" },
];

// clickイベント-btn
data01_btn1.addEventListener("click", (event) => {
  //追加待ち
  data01_clickCount++;

  // 状態1
  for (let count = 3; count >= 1; count--) {
    setTimeout(() => {
      data01_Title.textContent = count;
      data01_Title.classList.add("textZoom"); //カウントダウン演出
    }, 1000 * (3 - count));
  }

  data01_btn1.classList.add("On");

  setTimeout(() => {
    data01_btn1.classList.remove("On");
    data01_Title.classList.remove("textZoom"); //カウントダウン演出解除
    data01_Title.textContent = "これからの運勢は...";

    for (let i = 1; i <= 3; i++) {
      if (data01_clickCount === i) {
        let index = Math.floor(Math.random() * data01_wordGroup[i - 1].length);
        const newChild = `<li class="textBox grayL_bg boxBorder_SR">${
          data01_wordGroup[i - 1][index]
        }</li>`;
        data01_List.insertAdjacentHTML("beforeend", newChild);
        data01_btn1.textContent = "つづける";
      }
    }

    if (data01_clickCount === 3) {
      // Add-Contents
      const newImageBox = document.createElement("a");
      const newImage = document.createElement("img");

      let resultWord = data01_List.lastElementChild.textContent;
      switch (resultWord) {
        case data01_wordList3[0]:
          newImageBox.href = "https://unsplash.com/s/photos/happy-holiday";
          newImage.src = data01_imgList[0].src;
          newImage.alt = data01_imgList[0].alt;
          break;
        case data01_wordList3[1]:
          newImageBox.href = "https://unsplash.com/s/photos/happy-family";
          newImage.src = data01_imgList[1].src;
          newImage.alt = data01_imgList[1].alt;
          break;
        case data01_wordList3[2]:
          newImageBox.href = "https://unsplash.com/s/photos/heart";
          newImage.src = data01_imgList[2].src;
          newImage.alt = data01_imgList[2].alt;
          break;
        case data01_wordList3[3]:
          newImageBox.href = "https://unsplash.com/s/photos/dog-lovely";
          newImage.src = data01_imgList[3].src;
          newImage.alt = data01_imgList[3].alt;
          break;
        case data01_wordList3[4]:
          newImageBox.href = "https://www.amazon.co.jp/gp/goldbox";
          newImage.src = data01_imgList[4].src;
          newImage.alt = data01_imgList[4].alt;
          break;
      }

      data01_Box
        .appendChild(newImageBox)
        .insertAdjacentElement("afterbegin", newImage);

      // BTNリセット
      data01_btn1.textContent = "やり直し";
      data01_btn1.classList.remove("black_bg");
      data01_btn1.classList.add("red_bg");
    }
  }, 3000);

  // クリック回数の確認
  // console.log(data01_clickCount);

  // 状態2
  if (data01_clickCount === 4) {
    data01_btn1.textContent = "結果は";
    data01_btn1.classList.remove("red_bg");
    data01_btn1.classList.add("black_bg");

    // wordクリア
    const data01_ListItems = document.querySelectorAll(
      "#contents-data01 > ul > li"
    );

    for (let i = 0; i < data01_ListItems.length; i++) {
      data01_List.removeChild(data01_ListItems[i]);
    }

    // img(a)クリア
    data01_Box.removeChild(document.querySelector("a"));

    data01_clickCount = 1;
  }
});
