// コンテンツデータにアクセス
const contAceess = document.querySelectorAll("#contAceess_Box > article");
const contData = document.querySelector("#contData_Block");
const contDataBG = document.querySelector("#contData_BlockBG");
const contOffBtn = document.querySelector("#contOff_btn");
const offTrigger = [contDataBG, contOffBtn];

contAceess.forEach((element) => {
  element.addEventListener("click", (e) => {
    contData.classList.add("show");
  });
});

offTrigger.forEach((element) => {
  element.addEventListener("click", (e) => {
    contData.classList.remove("show");
  });
});
