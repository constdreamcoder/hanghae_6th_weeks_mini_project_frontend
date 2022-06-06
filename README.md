# 🚀 냉장고를 부탁해🚀

매일매일 하루 최대 고민 **_"오늘 뭐 먹지?!?!"_**, </br>
서로의 냉장고를 공유하여 요리를 추천받아 보세요!! 👍👍

</br>

![image](https://user-images.githubusercontent.com/95998675/163396131-1374d101-47eb-43b8-9928-69a0e4e3db77.png)
![image](https://user-images.githubusercontent.com/95998675/163380435-ce054ea7-60a2-48b1-b3cf-d1d274b774f9.png)

</br>

## 📆 제작 기간 및 팀원 소개

- 2022.04.08 ~ 2022.04.14
- 강성지 : 게시글 작성, 마이페이지 담당
- 소민경 : 로그인, 회원가입 담당
- 장수찬 : 메인, 상세 페이지 댓글 담당

</br>

## 🌎 Website

<a href="http://naeng-bu.s3-website.ap-northeast-2.amazonaws.com/">'냉장고를 부탁해' 바로가기 (클릭)</a>

</br>

## 🎬 시연 영상

<a href="https://youtu.be/DvVvXFBrmig">영상 바로가기 (클릭)</a>

</br>

## 📝 노션 설계 페이지

<a href="https://www.notion.so/6956f7850311474a944658f0652771d4">노션 페이지 바로가기</a>

</br>

## 📋 와이어 프레임

![image](https://user-images.githubusercontent.com/95998675/163371909-b07f32c8-c5f8-4ada-ab06-577c606245be.png)

</br></br>

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

## 🔗 API 상세

| API 기능        | Method | URL                       | request                                                                                                                       | response                                                                                                                                                                                                                                                                                                                                                                                                     | STATTUS                      |
| --------------- | ------ | ------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------- |
| 로그인 요청     | POST   | /api/login                | { email: "sun123@naver.com”, password: "1234" }                                                                               | { result:false } // 로그인실패시, { result:true, token:토큰값 로그인성공}                                                                                                                                                                                                                                                                                                                                    | success: 200</br> error: 401 |
| 회원가입        | POST   | /api/signup               | { email: "sungji@naver.com”, nickname: “꿀렁해”, password: "1234"}                                                            | { result:false } // 가입 실패시, { result:true // 가입 성공시}                                                                                                                                                                                                                                                                                                                                               | success: 201</br> error: 400 |
| 로그아웃        | GET    | /api/logout               |                                                                                                                               |                                                                                                                                                                                                                                                                                                                                                                                                              | success: 200</br> error: 400 |
| 로그인 정보조회 | GET    | /api/islogin              |                                                                                                                               | { userInfo: { email: sungji@naver.com”, nickname: “꿀렁해”,}}                                                                                                                                                                                                                                                                                                                                                | success: 200</br> error: 401 |
| 게시글 목록조회 | GET    | /api/postList             |                                                                                                                               | postList: { { postId: postId, title:”도와주세요!”, content: "제 냉장고입니다", item: “당근”, image:"/images/cancle.png", createdAt:”YYYY-MM-DD hh:mm:ss” } }                                                                                                                                                                                                                                                 | success: 200</br> error: 400 |
| 게시글 작성     | POST   | /api/posts                | { title:”도와주세요!”, content: "제 냉장고입니다", item: “당근”, image:"/images/cancle.png", createdAt:”YYYY-MM-DD hh:mm:ss”} |                                                                                                                                                                                                                                                                                                                                                                                                              | success: 201</br> error: 400 |
| 게시글 수정     | PUT    | /api/posts/{postId}       | { title:”도와주세요!”, content: "제 냉장고입니다", item: “당근”, image:"/images/cancle.png" }                                 |                                                                                                                                                                                                                                                                                                                                                                                                              | success: 200</br> error: 400 |
| 게시글 삭제     | DELETE | /api/posts/{postId}       |                                                                                                                               |                                                                                                                                                                                                                                                                                                                                                                                                              | success: 200</br> error: 400 |
| 내 게시글 조회     | GET | /api/mypage      |                                                                                                                               |                                                                                                                                                                                                                                                                                                                                                                                                              | success: 200</br> error: 400 |
| 게시글 상세조회 | GET    | /api/posts/{postId}       |                                                                                                                               | { postId: 1, title:” 도와주세요!”, content: "제 냉장고입니다", item: “당근”, image:"/images/cancle.png", createdAt:”YYYY-MM-DD hh:mm:ss”, nickname: “javaking”, comments: [{ commentId: 1,nickname: “꿀렁해”, profile: 파일, comment: "나도 반가워요", createdAt:”YYYY-MM-DD hh:mm:ss” }, { commentId: 2, nickname: “꿀렁해”, profile: 파일, comment: "나도 반가워요", createdAt:”YYYY-MM-DD hh:mm:ss” } ] } | success: 200</br> error: 400 |
| 댓글 작성       | POST   | /api/comments/{postId}    | { comment: "나도 반가워요",createdAt:”YYYY-MM-DD hh:mm:ss” }                                                                  |                                                                                                                                                                                                                                                                                                                                                                                                              | success: 201</br> error: 400 |
| 댓글 삭제       | DELETE | /api/comments/{commentId} |                                                                                                                               |                                                                                                                                                                                                                                                                                                                                                                                                              | success: 200</br> error: 400 |
| 댓글 수정       | PUT    | /api/comments/{commentId} | { comment: "나도 반가워요",createdAt:”YYYY-MM-DD hh:mm:ss” }                                                                  |                                                                                                                                                                                                                                                                                                                                                                                                              | success: 200</br> error: 400 |
| 댓글 조회       | GET    | /api/comments/{postId}    |                                                                                                                               | commentsList:{ { comments: [ { commentId: 1, nickname: “꿀렁해”, email: “mean0@email.com”, comment: "나도 반가워요", createdAt:”YYYY-MM-DD hh:mm:ss”, }, { commentId: 2, nickname: “꿀렁해”, email: “ramenboy@email.com”, comment: "나도 반가워요", createdAt:”YYYY-MM-DD hh:mm:ss” } ] } }                                                                                                                  | success: 200</br> error: 400 |

</br>

## 🗒️페이지별 기능

✔ 로그인, 회원가입

- JWT를 이용한 로그인, 회원가입 구현
- 정규식 표현을 이용한 이메일, 닉네임, 비밀번호 체크(닉네임 : 3글자 이상의 알파벳과 숫자, 비밀번호 : 4글자 이상)
- 회원정보를 DB에 저장하 후, 완료되면 로그인 페이지로 이동

✔ 메인 페이지

- 모든 게시글을 순서대로 확인 가능
- 게시글을 클릭 시 상세페이지로 이동
- 내가 올린 게시글을 확인할 수 있습니다.

✔ 게시글 작성 페이지

- 사진 업로드 및 미리 보기 가능

✔ 게시글 상세 페이지

- 댓글 추가, 수정, 삭제 가능
- 실시간 댓글 확인 가능
- 댓글을 달면 제일 상위에 배치

✔ 게시글 수정 페이지

- 게시글 내용 또는 사진을 수정

</br>

## ⚙️ 개발 중 만났던 문제들

- 텍스트, 이미지 중 입력 안된게 있다면 게시글 작성 버튼 비활성화

**1)  axios 파일을 분리하여 import 하는 방식으로 서버와 통신을 시도 했을 때 header에 토큰이 없다는 오류가 지속적으로 발생 했습니다.**

→ axios 호출 함수에서 헤더에 토큰을 넣어주는 방법으로 해결했습니다.

 
**2) 404, 400, 500 오류가 발생 했을 때 백엔드와 프론트엔드 중에서 어느 부분에서 오류가 나는 지 발빠르게 아는 게 중요하다고 생각 했습니다.**

→ 처음 서버 API에 요청을 보냈을 때 오류가 많이 발생 했었는 데 프론트엔드에서 잘못 요청 한 줄 알고 1시간 정도를 헤맨 적이 있습니다. 이럴 때 백엔드 분들에게 요청이 잘 들어 갔는 지 발 빠르게 여쭤 보았더라면 좋지 않았을까 생각 했습니다.

**3) 와이어 프레임 작성 시 구체적으로 어떻게 진행 할 것인지 자세하게 정하지 못해서 CSS나 View를 구현 할 때 필요 없는 수정이 많이 발생 했던 것 같습니다.**

→ 다음 프로젝트를 진행 할 때는 와이어 프레임이나 API를 작성 할 때 더 많은 시간을 들여서 프로젝트가 어떻게 만들어 지면 좋을 지 어떤 기능이 필요한 데 큰 그림으로 봤을 때 어떤 request가 필요하고 어떤 response가 돌아와야 하는 지를 꼼꼼하게 설정하면 좋을 것 같습니다.

