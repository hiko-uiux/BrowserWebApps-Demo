// コンテンツデータにアクセス
const contAceess = document.querySelectorAll("#contAceess_Box > article");
const contOuter = document.querySelector("#contData_Outer");
const contDataBG = document.querySelector("#contData_BlockBG");
const contOffBtn = document.querySelector("#contOff_btn");
const offTrigger = [contDataBG, contOffBtn];

// コンテンツデータ(本体)
const contInner = document.querySelectorAll(".contData_inner");
const ContInnerArray = Array.from(contInner);

contAceess.forEach((element, i) => {
  element.addEventListener("click", () => {
    contOuter.classList.add("show");

    contInner[i].classList.add("show");
  });
});

offTrigger.forEach((element) => {
  element.addEventListener("click", () => {
    contOuter.classList.remove("show");

    let target = ContInnerArray.find((data, index) => {
      return data.classList.contains("show");
    });
    target.classList.remove("show");
  });
});
