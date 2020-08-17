# 칵테일 메이커

<img width="1353" alt="칵메1" src="https://user-images.githubusercontent.com/50289067/90365134-5a253b00-e0a0-11ea-9e89-9af6d70a175a.png">


## 개발기간 : 2020.06.11 ~ 2020.06.29
## 개발인원 : 1명
## 사용 : React 라이브러리
css 모듈
## 설명:
리액트 인터넷 강의를 들으며 학습한 내용을 바탕으로 간단한 칵테일 메이커 게임을 만들어보았습니다. 주어진 레시피가 존재하고 이에 맞게 재료를 입력하면 원하는 음료를 만들 수 있습니다. 레시피에 없는 재료 조합은 failure라는 문구와 함께 먹지못하는 음료를 완성합니다.

## 개발단계
1. Mockup Design -> Adobe XD를 이용하여 메인 페이지 요소 배치와 색조합을 정했다.
2. 컴포넌트 구조 구상
![칵테일컴포넌트구조](https://user-images.githubusercontent.com/50289067/90365650-0ebf5c80-e0a1-11ea-8750-87628ae30489.png)

미리 컴포넌트 구조를 짜서 컴포넌트의 재사용성을 높이고, 계층구조를 확실히 하여 혼란을 줄일 수 있었다.


3. 본격적인 개발!

<table style="border: none;">
  <tr>
    <td valign="top"><img width="1200" alt="칵메1" src="https://user-images.githubusercontent.com/50289067/90365134-5a253b00-e0a0-11ea-9e89-9af6d70a175a.png"></td>
    <td valign="top"><h2 style="font-size:18px;">재미있는 게임 느낌</h2>
    <h4> start 버튼에 마우스를 가져다대면 흔들리는 애니메이션</span></h4>
  </tr>
  <tr>
    <td valign="top"><img width="1200" alt="칵메2" src="https://user-images.githubusercontent.com/50289067/90365140-5db8c200-e0a0-11ea-876e-cff3969f854a.png"></td>
    <td valign="top"><h2 style="font-size:18px;">버튼 제어</h2>
      <h4>해당 재료의 수가 0일 때 LESS 버튼은 회색으로 비활성화</h4>
      <h4>재료가 하나라도 추가되었을 때 SHAKE 버튼이 활성화</h4>
      </td>
  </tr>
  <tr>
    <td valign="top"><img width="1200" alt="칵메3" src="https://user-images.githubusercontent.com/50289067/90365147-627d7600-e0a0-11ea-8390-b6532dad9697.png"></td>
    <td valign="top"><h2 style="font-size:18px;">모달창</h2>
      <h4>일치하는 레시피가 있다면 표시됨</h4>
      <h4>모달창 밖을 누르거나 CANCEL 버튼을 누르면 창이 사라짐</h4>
      </td>
  </tr>
  <tr>
    <td valign="top"><img width="1000" height="700" alt="칵메4" src="https://user-images.githubusercontent.com/50289067/90365164-65786680-e0a0-11ea-9eea-5ca9440ae514.png"></td>
    <td valign="top"><h2 style="font-size:18px;">완성된 음료</h2>
      <h4>성공이라면 해당하는 음료와 함께 문구가 나옴</h4>
      <h4>음료와 컵,얼음은 이미지파일이 아닌 css로 구현하여 다른 음료가 추가됐을 때도 활용할 수 있음</h4>
      </td>
  </tr>
</table>


## 데모영상
https://catstanets.tistory.com/118




##### 참고 및 사용한 소스
1. 강의: https://www.udemy.com/share/101WbyB0ASc1xVQXQ=/ 
- Udemy의 "React - The Complete Guide (incl Hooks, React Router, Redux)" by Maximilian Schwarzmüller 
2. 아이콘 (Tropical Leaf & maracas)  <div>Icons made by <a href="http://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
  3. css 디자인 (cup & ice cube)
https://codepen.io/MarcMalignan/pen/svLux
