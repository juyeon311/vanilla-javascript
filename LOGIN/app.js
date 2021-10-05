const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");
/* 기본적으로 적용되는 function이 있는데
그게 바로 preventDefault이다. 
preventDefault를 호출하면 브라우저의 기본동작을 막아준다*/
/*지금 하고 있는 것은 onLoginSubmit이라는 function을 만들고
이 function이 하나의 argument를 받도록 하고 그걸 js에 넘겨주고 있음
누군가 form을 submit하면 js가 이 function을 호출하도록 하고 있음
js가 하게 될 일 -> onLoginSubmit 함수의 
첫번째 argument로 발생한 일에 대해 필요로 할만한 정보를 주는것*/
/*console.log(loginInput.value) 이렇게 하면 
버튼을 클릭해도 새로고침이 안됨 */
function onLoginSubmit(event) {
    event.preventDefault();
    console.log(loginInput.value);
}

/* function handleLinkClick(event) {
    event.preventDefault();
    console.log(event);
} */
/* alert("clicked!");
alert가 이 페이지가 다른 동작을 하지 못하도록 하고 있음
하지만 ok를 눌러서 alert가 없어지면 이 브라우저의 기본동작이 실행됨
방금 일어난 event에 대한 정보를 담은 이 object는 handleLinkClick를 위한
EventListener 함수의 첫번째 인자로 주어지게 될 것임
우리는 공간만 만들고 받기만 하면 된다.*/
loginForm.addEventListener("submit", onLoginSubmit);
/*link.addEventListener("click", handleLinkClick);*/
/* 우리는 말 그대로 아무것도 안하더라도,
아무것도 하지 않음으로써 JS가 event object를 담은 정보를 담은 채로 function을
호출한다는 것을 배웠음. */
/* submit event가 발생할 때 JS는 onLoginSubmit를 호출하고 있고
이때 event object를 argument로 주고 있고,
우리는 기본동작이 실행되는 것을 막아주고 있다. */
/* 모든 EventListener function의 첫번째 argument는 항상
지금 막 벌어진 일들에 대한 정보가 될 것임.
argument 공간만 제공하면 js가 알아서 방금 일어난 event에 대한
정보를 지닌 argument를 채워 넣을 것임*/

/*addEventListener안에 있는 함수는 직접 실행하지 않는다.
내가 하는 것이 아니라 브라우저가 해준다.
브라우저는 실행만 시켜주는 것이 아니라 event에 대한 정보도 담아준다*/