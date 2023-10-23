// ページ読み込みが完了した時刻を記録
const pageLoadTime = Date.now();

// ページ読み込み完了時の処理
window.addEventListener("load", () => {
  // 現在の時刻を取得
  const currentTime = Date.now();

  // ページ読み込みが3秒以内に完了した場合
  if (currentTime - pageLoadTime < 3000) {
    // 3秒後に要素に "hidden" クラスを追加して非表示にする
    setTimeout(() => {
      const opContainer = document.querySelector(".op_Container");
      if (opContainer) {
        opContainer.classList.add("hidden");
      }
    }, 3000);
  } else {
    // ページ読み込みが3秒以上かかった場合、即座に非表示にする
    const opContainer = document.querySelector(".op_Container");
    if (opContainer) {
      opContainer.classList.add("hidden");
    }
  }
});
