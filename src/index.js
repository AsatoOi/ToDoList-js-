import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

//未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

//未完了リストに追加する関数
const createIncompleteList = (text) => {
  // liを生成
  const list = document.createElement("li");

  // divを生成
  const div = document.createElement("div");
  div.className = "list-row";

  // pタグを生成
  const pTag = document.createElement("p");
  pTag.innerHTML = text;

  // button(完了)タグを生成
  const completeButton = document.createElement("button");
  completeButton.innerHTML = "完了";
  completeButton.addEventListener("click", () => {
    //押された完了ボタンの先祖要素(li)を未完了リストから削除
    deleteFromIncompleteList(div.parentElement);
    //完了タグに追加する要素
    const addTarget = completeButton.parentElement;
    //テキストを取得
    const text = addTarget.firstElementChild.innerText;
    //div以下を初期化
    addTarget.textContent = null;
    //完了タグ要素(p)の生成
    const pTag = document.createElement("p");
    pTag.innerHTML = text;
    //完了タグ要素(button)の生成
    const backButton = document.createElement("button");
    backButton.innerHTML = "戻る";
    backButton.addEventListener("click", () => {
      //押された戻すボタンの祖先タグを完了リストから削除
      const deleteTaget = backButton.closest("li");
      document.getElementById("complete-list").removeChild(deleteTaget);
      //テキストを取得
      const text = backButton.parentElement.firstElementChild.innerHTML;
      createIncompleteList(text);
    });
    //liの生成
    const list = document.createElement("li");
    //完了div要素に各要素を設定
    addTarget.appendChild(pTag);
    addTarget.appendChild(backButton);
    list.appendChild(addTarget);

    //完了リストに追加
    document.getElementById("complete-list").appendChild(list);
  });

  //button(削除)タグを作成
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの先祖要素（li）を未完了リストから削除
    deleteFromIncompleteList(div.parentElement);
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
