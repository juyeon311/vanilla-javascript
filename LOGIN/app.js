const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";

/*const link = document.querySelector("a"); */
/* 기본적으로 적용되는 function이 있는데
그게 바로 preventDefault이다. 
preventDefault를 호출하면 브라우저의 기본동작을 막아준다*/
/*지금 하고 있는 것은 onLoginSubmit이라는 function을 만들고
이 function이 하나의 argument를 받도록 하고 그걸 js에 넘겨주고 있음
누군가 form을 submit하면 js가 이 function을 호출하도록 하고 있음
js가 하게 될 일 -> onLoginSubmit 함수의 
첫번째 argument로 발생한 일에 대해 필요로 할만한 정보를 주는 것*/

function onLoginSubmit(event) {
    event.preventDefault(); /* 기본동작을 막고 */
    loginForm.classList.add(HIDDEN_CLASSNAME); /*id login-form이 있는 곳에 class hidden을 추가하고(그러면 form이 없어짐)*/
    const username = loginInput.value; /*username을 loginInput의 vlaue라고 지정하고*/
    localStorage.setItem("username", username) /*"username"은 저장될 아이템의 이름, 값은 username 변수이다. */
    greeting.innerText = `Hello ${username}`; /*id greeting이 있는 h1에 hello하고 username을 넣어준다*/ /* = "Hello(string) "+ username(변수명);*/
    greeting.classList.remove(HIDDEN_CLASSNAME); /*h1에 있었던 class hidden을 없애서 h1을 보여준다*/
}

/*우리가 브라우저에 공짜로 뭔가를 기억할 수 있게 해주는 기능이 존재함. 
그 API이름은 local storage임
local storage는 우리가 브라우저이 뭔가를 저장할 수 있게 해준다. 
그래서 그거를 나중에 가져다 쓸 수 있다.*/
/*local storage API를 살펴보면 다양한 method들을 볼 수 있는데 
그 중 하나는 setItem 이다. 
setItem을 활용하면 local storage에 정보를 저장할 수 있다.
저장하는 방법 : localStorage.setItem("저장할 값의 이름(key)","저장할 값(value)") 
저장한 값 불러오는 방법 : localStorage.getItem("username")
저장한 값 삭제하는 방법 : localStorage.removeItem("username")*/
/*이제 할 일은 유저가 이름을 제출할 때 그걸 저장해주는 것. */
/*그런데 아직도 새로고침을 하면 여전히 이 form이 표시되고 있다. 
우리가 바라는 것은 이게 아님. 그래도 적어도 이제는 유저명은 기억하고 있음. */


/* function handleLinkClick(event) {
    event.preventDefault();
    console.log(event);
} 
*/

/* alert("clicked!");*/

/*alert가 이 페이지가 다른 동작을 하지 못하도록 하고 있음
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