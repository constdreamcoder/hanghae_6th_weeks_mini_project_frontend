# 냉장고를 부탁해

매일매일 하루 최대 고민 **_"오늘 뭐 먹지?!?!"_**
서로의 냉장고를 공유하여 요리를 추천받아 보세요!! 👍👍

![image](https://user-images.githubusercontent.com/95998675/163380435-ce054ea7-60a2-48b1-b3cf-d1d274b774f9.png)
</br>

## 📆 제작 기간 및 팀원 소개

-   2022.04.08 ~ 2022.04.14
-   강서지 : 로그인, 회원가입 담당
-   소민경 : 게시글 작성 담당
-   장수찬 : 메인, 상세 페이지, 댓글 담당

</br>

## 🌎 Website

<a href="https://github.com/doremilan/Chap5_project.git">'냉장고를 부탁해' 바로가기 (클릭)</a>

</br>

## 시연 영상

<a href="https://youtu.be/DvVvXFBrmig">영상 바로가기 (클릭)</a>

</br>

## 📝 노션 설계 페이지

<a href="https://www.notion.so/6956f7850311474a944658f0652771d4">노션 페이지 바로가기</a>

## 와이어 프레임

![image](https://user-images.githubusercontent.com/95998675/163371909-b07f32c8-c5f8-4ada-ab06-577c606245be.png)

</br>

## 🛠 Front-end 기술 스택 및 개발 환경 🔨

<br>
<p align="center">
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
<img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
<img src="https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=react&logoColor=black">
<img src="https://img.shields.io/badge/axios-007CE2?style=for-the-badge&logo=axios&logoColor=white">
</br>
<img src="https://img.shields.io/badge/reactrouterdom-375BD2?style=for-the-badge&logo=reactrouterdom&logoColor=white">
<img src="https://img.shields.io/badge/styledcomponents-181717?style=for-the-badge&logo=styledcomponents&logoColor=white">
<img src="https://img.shields.io/badge/amazonaws-232F3E?style=for-the-badge&logo=amazonaws&logoColor=white">
<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">

</br>

## 🗒️페이지별 기능

✔ 로그인, 회원가입

-   JWT를 이용한 로그인, 회원가입 구현
-   정규식 표현을 이용한 이메일, 닉네임, 비밀번호 체크(닉네임 : 3글자 이상의 알파벳과 숫자, 비밀번호 : 4글자 이상)
-   회원정보를 DB에 저장하 후, 완료되면 로그인 페이지로 이동

✔ 메인 페이지

-   모든 게시글을 순서대로 확인 가능
-   게시글을 클릭 시 상세페이지로 이동
-   내가 올린 게시글을 확인할 수 있습니다.

✔ 게시글 작성 페이지

-   사진 업로드 및 미리 보기 가능

✔ 게시글 상세 페이지

-   댓글 추가, 수정, 삭제 가능
-   실시간 댓글 확인 가능
-   댓글을 달면 제일 상위에 배치

</br>

## ⚙️ Trouble Shooting

1. AJAX POST rendering 문제
   -> AJAX로 포스트요청을 서버에 보낸후
   서버측에서 다른 페이지로 랜더링 해도 페이지 이동이 안되는 현상
   → 해결 : Success 함수 안에 해당 코드를 포함하면 해결.
   document.write(response); -> response로
   html안의 내용이 전달되어 오기 때문에 해당 내용을 써주면 된다!
2. Ec2 서버에서의 app.py 실행 시, 토큰 인코딩 값이 바이트로 타입이 지정됨..
   → 해결 : .decode(‘utf-8’)을 붙여 스트링 값으로 바꿔주어 해결함.

3. Jinja2에서 html에서 python 서버로 변수에 값을 담아 보내는 방법..
   → html에서는 {{ 변수이름 }}, app.py에서 받을 때 <변수이름>으로 받을 수 있었다!"
