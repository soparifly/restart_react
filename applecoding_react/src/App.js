import React, { useState } from "react";
import "./App.css";
// JSX문법
// class 는 className 으로 부여
//style 오브젝트형식으로 -를 빼고 케멜케이스로 전환

function App() {
  //state 변수대신 쓰는 데이터 저장공간
  //[state 변수, state를 변경할 변수 es6 destructure]
  // 문자, 숫자 , array, object 다 저장가능
  // react는 state 내용이 변경되면 버튼이든 뭔가 눌러졌을때 데이터가 변경이되면
  //   새로고침 없이도 자동으로 재렌더링이 된다.

  const [글제목, 글제목변경] = useState(["TODAY", "TOMORROW", "YESTERDAY"]);
  // 데이터 저장법
  // 번수에 넣거나 state에 넣거나
  //상태변수 바꾸기
  // 1. 기존 state 카피본을 만들고
  // 2. 카피본에 수정사항을 반영하고
  // 3. 변경함수()에 집어넣기
  const [조아요, 조아요변경] = useState(0);
  //   const 제목변경 = () => {
  //     const newArray = [...글제목];
  //     // newArray.sort();
  //     글제목변경(newArray);
  //   };

  const [modal, modal변경] = useState(false);
  const modal열고닫기 = () => {};
  const [content, setContent] = useState(false);
  return (
    <div className="App">
      <div className="black-nav">
        <div> Developer  ◕ܫ◕  Kim's Blog </div>
      </div>
      {/* <button onClick={제목변경}></button> */}
      <div className="list">
        <div className="title">
          <h3
            onClick={() => {
              modal변경(true);
            }}
          >
            {글제목[0]}
          </h3>
          <span
            onClick={() => {
              조아요변경(조아요 + 1);
            }}
          >
            👍🏻
          </span>
          {조아요}
        </div>
        <div className="content">
          <p>놀러가고싶다 부럽다.. 무등산</p>
        </div>
      </div>
      <div className="list">
        <div className="title">
          <h3>{글제목[1]}</h3>
        </div>
        <div className="content">
          <p>내일은 스터디</p>
        </div>
        <div className="list">
          <div className="title">
            <h3
              onClick={() => {
                setContent(true);
              }}
            >
              {글제목[2]}
            </h3>
          </div>
          {content && <Content></Content>}
        </div>
        {modal && <modal></modal>}
      </div>
      <button
        onClick={() => {
          modal변경(!modal); // modal default false -> setState(내기본값을 반대로!)
        }}
      >
        버튼
      </button>
      {modal === true ? null : <Modal></Modal>}
    </div>
  );
}
function Content() {
  return (
    <>
      <div className="content">
        <p>어제는 몸살</p>
      </div>
    </>
  );
}
function Modal() {
  // Component
  // 함수만들기  -> 축약을 원하는 HTML에 넣고
  //원하는 곳에서 <함수명/>
  // 이름은 대문자 대괄호
  //태그를 하나로 묶어야함
  //반복적으로 나오는 애들은 Component
  //자주변경
  //페이지를 만들때
  return (
    //Fragment 문법 <></>
    <>
      <div className="modal">
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    </>
  );
}
export default App;
