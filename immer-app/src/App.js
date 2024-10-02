import React, {useRef, useState, useCallback} from 'react';
// 불변성을 유지하기 위한 produce 메소드 임포트
// produce 메소드의 매개변수로 state 현재 값을 받아올 수 있다.
// 리턴되는 값은 새로운 state의 값
import {produce} from 'immer';
import RenderTest2 from './components/RenderTest2';

function App() {
  return(
    <>
    <RenderTest2></RenderTest2>
    </>
  )
}

export default App;
