const form = document.querySelector(".form");
const input = form.querySelector(".form__input");
const ul = document.querySelector(".toDoList");
const button = document.querySelector(".button");
const msg = document.querySelector(".msg");

button.addEventListener("click", onSubmit);

function onSubmit(e) {
  // 1
  e.preventDefault(); 

  // 3
  if (input.value === "") {
    msg.style.display = "block";
    setTimeout(() => (msg.style.display = "none"), 2000);
    return;
  }

  // 2
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";

  // 4
  li.addEventListener("click", function () {
    li.style.textDecoration = "line-through";
  });

  // 5
  li.addEventListener("dblclick", function () {
    ul.removeChild(li);
  });
}
// 1
// <form> 태그는 <button>이나 다른 태그에 의해 submit이 될 경우,
// 페이지를 다시 Reload 하는 기능을 내장하고 있다.
// input box의 text-field에 text를 입력하고 submit을 눌렀는데,
// 바로 Reload가 되어버릴 경우 text-field에 입력된 데이터를 전달할 수가 없다.
// 이를 막기 위해 preventDefault()라는 메소드가 있다.
// preventDefault()는 click이나 submit이라는 이벤트가 발생했을 경우,
// 사전에 페이지가 Reload 되는 것을 막아주는 기능을 갖고 있다.

// 2
// click이라는 이벤트가 발생했을 경우 <li> 태그를 생성하고,
// <li> 태그 내에 input box의 text-field가 가지고 있는 value를 주입하고,
// <ul> 태그의 자식으로 위에서 만든 <li> 태그를 넣어준다.
// 모든 과정이 끝났으면 input box에 내가 입력한 데이터를 초기화 시킨다.

// 3
// input box에 아무런 value도 입력하지 않았다면,
// <li> 태그 내에 공백이 입력될 것이기 때문에 이를 방지해주는 조건을 작성한다.
// <form> 태그 아래에 있는 <p> 태그를 통해 값을 입력하라는 메세지를 출력 해준다.
// 메세지가 계속해서 노출되면 안되기 때문에 setTimeout()이라는 메소드를 이용해,
// 2초 후에 메세지가 사라지도록 구현해준다.

// 4, 5
// 이미 수행완료된 리스트는 구분해주어야 하기 때문에,
// 한 번 클릭 했을 경우엔, 가운뎃줄을 그어주고,
// 두 번 클릭 했을 경우엔, 완전히 해당 태그를 삭제해주는 코드를 작성한다.
