import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // liを生成
  const list = document.createElement("li");

  // divを生成
  const div = document.createElement("div");
  div.className = "list-row";

  // pタグを生成
  const pTag = document.createElement("p");
  pTag.innerHTML = inputText;

  // button(完了)タグを生成
  const completeButton = document.createElement("button");
  completeButton.innerHTML = "完了";
  completeButton.addEventListener("click", () => {
    alert("完了");
  });

  //button(削除)タグを作成
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの先祖要素（li）を未完了リストから削除
    const deleteTarget = div.parentElement;
    document.getElementById("incomplete-list").removeChild(deleteTarget);
  });

  //liタグの子要素に各要素を設定
  list.appendChild(div);
  div.appendChild(pTag);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(list);
};

document.getElementById("add-button").addEventListener("click", onClickAdd);
