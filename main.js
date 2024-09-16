document.getElementById("js-form").addEventListener("submit", function (event) {
  event.preventDefault();
  // アニメーションが動く
  // バックエンド側にデータを渡す命令JS
  // 非同期で受け取って
  // async/await
  // 成功したら完了画面
  // 失敗したらその場でエラー出す
});

const obj = {
  name: "TOM",
  age: 55,
  city: "LA ",
  country: "AMERICA",
  preventDefault: () => {
    // 元のイベント消す
  },
};
