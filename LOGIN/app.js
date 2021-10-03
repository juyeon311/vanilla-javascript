const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

/* 기본적으로 적용되는 function이 있는데
그게 바로 preventDefault이다. 
preventDefault를 호출하면 브라우저의 기본동작을 막아준다*/
function onLoginSubmit(event) {
    event.preventDefault();
    console.log(loginInput.value);
}

loginForm.addEventListener("submit", onLoginSubmit);
/* 우리는 말 그대로 아무것도 안하더라도,
아무것도 하지 않음으로써 JS가 event object를 담은 정보를 담은 채로 function을
호출한다는 것을 배웠음. */
/* submit event가 발생할 때 JS는 onLoginSubmit를 호출하고 있고
이때 event object를 argument로 주고 있고,
우리는 기본동작이 실행되는 것을 막아주고 있다. */