# π λμ₯κ³ λ₯Ό λΆνν΄π

λ§€μΌλ§€μΌ νλ£¨ μ΅λ κ³ λ―Ό **_"μ€λ λ­ λ¨Ήμ§?!?!"_**, </br>
μλ‘μ λμ₯κ³ λ₯Ό κ³΅μ νμ¬ μλ¦¬λ₯Ό μΆμ²λ°μ λ³΄μΈμ!! ππ

</br>

![image](https://user-images.githubusercontent.com/95998675/163396131-1374d101-47eb-43b8-9928-69a0e4e3db77.png)
![image](https://user-images.githubusercontent.com/95998675/163380435-ce054ea7-60a2-48b1-b3cf-d1d274b774f9.png)

</br>

## π μ μ κΈ°κ° λ° νμ μκ°

- 2022.04.08 ~ 2022.04.14
- κ°μ±μ§ : κ²μκΈ μμ±, λ§μ΄νμ΄μ§ λ΄λΉ
- μλ―Όκ²½ : λ‘κ·ΈμΈ, νμκ°μ λ΄λΉ
- μ₯μμ°¬ : λ©μΈ, μμΈ νμ΄μ§ λκΈ λ΄λΉ

</br>

## π Website

<a href="http://naeng-bu.s3-website.ap-northeast-2.amazonaws.com/">'λμ₯κ³ λ₯Ό λΆνν΄' λ°λ‘κ°κΈ° (ν΄λ¦­)</a>

</br>

## π¬ μμ° μμ

<a href="https://youtu.be/DvVvXFBrmig">μμ λ°λ‘κ°κΈ° (ν΄λ¦­)</a>

</br>

## π λΈμ μ€κ³ νμ΄μ§

<a href="https://www.notion.so/6956f7850311474a944658f0652771d4">λΈμ νμ΄μ§ λ°λ‘κ°κΈ°</a>

</br>

## π μμ΄μ΄ νλ μ

![image](https://user-images.githubusercontent.com/95998675/163371909-b07f32c8-c5f8-4ada-ab06-577c606245be.png)

</br></br>

## π  Front-end κΈ°μ  μ€ν λ° κ°λ° νκ²½ π¨

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

## π API μμΈ

| API κΈ°λ₯        | Method | URL                       | request                                                                                                                       | response                                                                                                                                                                                                                                                                                                                                                                                                     | STATTUS                      |
| --------------- | ------ | ------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------- |
| λ‘κ·ΈμΈ μμ²­     | POST   | /api/login                | { email: "sun123@naver.comβ, password: "1234" }                                                                               | { result:false } // λ‘κ·ΈμΈμ€ν¨μ, { result:true, token:ν ν°κ° λ‘κ·ΈμΈμ±κ³΅}                                                                                                                                                                                                                                                                                                                                    | success: 200</br> error: 401 |
| νμκ°μ        | POST   | /api/signup               | { email: "sungji@naver.comβ, nickname: βκΏλ ν΄β, password: "1234"}                                                            | { result:false } // κ°μ μ€ν¨μ, { result:true // κ°μ μ±κ³΅μ}                                                                                                                                                                                                                                                                                                                                               | success: 201</br> error: 400 |
| λ‘κ·Έμμ        | GET    | /api/logout               |                                                                                                                               |                                                                                                                                                                                                                                                                                                                                                                                                              | success: 200</br> error: 400 |
| λ‘κ·ΈμΈ μ λ³΄μ‘°ν | GET    | /api/islogin              |                                                                                                                               | { userInfo: { email: sungji@naver.comβ, nickname: βκΏλ ν΄β,}}                                                                                                                                                                                                                                                                                                                                                | success: 200</br> error: 401 |
| κ²μκΈ λͺ©λ‘μ‘°ν | GET    | /api/postList             |                                                                                                                               | postList: { { postId: postId, title:βλμμ£ΌμΈμ!β, content: "μ  λμ₯κ³ μλλ€", item: βλΉκ·Όβ, image:"/images/cancle.png", createdAt:βYYYY-MM-DD hh:mm:ssβ } }                                                                                                                                                                                                                                                 | success: 200</br> error: 400 |
| κ²μκΈ μμ±     | POST   | /api/posts                | { title:βλμμ£ΌμΈμ!β, content: "μ  λμ₯κ³ μλλ€", item: βλΉκ·Όβ, image:"/images/cancle.png", createdAt:βYYYY-MM-DD hh:mm:ssβ} |                                                                                                                                                                                                                                                                                                                                                                                                              | success: 201</br> error: 400 |
| κ²μκΈ μμ      | PUT    | /api/posts/{postId}       | { title:βλμμ£ΌμΈμ!β, content: "μ  λμ₯κ³ μλλ€", item: βλΉκ·Όβ, image:"/images/cancle.png" }                                 |                                                                                                                                                                                                                                                                                                                                                                                                              | success: 200</br> error: 400 |
| κ²μκΈ μ­μ      | DELETE | /api/posts/{postId}       |                                                                                                                               |                                                                                                                                                                                                                                                                                                                                                                                                              | success: 200</br> error: 400 |
| λ΄ κ²μκΈ μ‘°ν     | GET | /api/mypage      |                                                                                                                               |                                                                                                                                                                                                                                                                                                                                                                                                              | success: 200</br> error: 400 |
| κ²μκΈ μμΈμ‘°ν | GET    | /api/posts/{postId}       |                                                                                                                               | { postId: 1, title:β λμμ£ΌμΈμ!β, content: "μ  λμ₯κ³ μλλ€", item: βλΉκ·Όβ, image:"/images/cancle.png", createdAt:βYYYY-MM-DD hh:mm:ssβ, nickname: βjavakingβ, comments: [{ commentId: 1,nickname: βκΏλ ν΄β, profile: νμΌ, comment: "λλ λ°κ°μμ", createdAt:βYYYY-MM-DD hh:mm:ssβ }, { commentId: 2, nickname: βκΏλ ν΄β, profile: νμΌ, comment: "λλ λ°κ°μμ", createdAt:βYYYY-MM-DD hh:mm:ssβ } ] } | success: 200</br> error: 400 |
| λκΈ μμ±       | POST   | /api/comments/{postId}    | { comment: "λλ λ°κ°μμ",createdAt:βYYYY-MM-DD hh:mm:ssβ }                                                                  |                                                                                                                                                                                                                                                                                                                                                                                                              | success: 201</br> error: 400 |
| λκΈ μ­μ        | DELETE | /api/comments/{commentId} |                                                                                                                               |                                                                                                                                                                                                                                                                                                                                                                                                              | success: 200</br> error: 400 |
| λκΈ μμ        | PUT    | /api/comments/{commentId} | { comment: "λλ λ°κ°μμ",createdAt:βYYYY-MM-DD hh:mm:ssβ }                                                                  |                                                                                                                                                                                                                                                                                                                                                                                                              | success: 200</br> error: 400 |
| λκΈ μ‘°ν       | GET    | /api/comments/{postId}    |                                                                                                                               | commentsList:{ { comments: [ { commentId: 1, nickname: βκΏλ ν΄β, email: βmean0@email.comβ, comment: "λλ λ°κ°μμ", createdAt:βYYYY-MM-DD hh:mm:ssβ, }, { commentId: 2, nickname: βκΏλ ν΄β, email: βramenboy@email.comβ, comment: "λλ λ°κ°μμ", createdAt:βYYYY-MM-DD hh:mm:ssβ } ] } }                                                                                                                  | success: 200</br> error: 400 |

</br>

## ποΈνμ΄μ§λ³ κΈ°λ₯

β λ‘κ·ΈμΈ, νμκ°μ

- JWTλ₯Ό μ΄μ©ν λ‘κ·ΈμΈ, νμκ°μ κ΅¬ν
- μ κ·μ ννμ μ΄μ©ν μ΄λ©μΌ, λλ€μ, λΉλ°λ²νΈ μ²΄ν¬(λλ€μ : 3κΈμ μ΄μμ μνλ²³κ³Ό μ«μ, λΉλ°λ²νΈ : 4κΈμ μ΄μ)
- νμμ λ³΄λ₯Ό DBμ μ μ₯ν ν, μλ£λλ©΄ λ‘κ·ΈμΈ νμ΄μ§λ‘ μ΄λ

β λ©μΈ νμ΄μ§

- λͺ¨λ  κ²μκΈμ μμλλ‘ νμΈ κ°λ₯
- κ²μκΈμ ν΄λ¦­ μ μμΈνμ΄μ§λ‘ μ΄λ
- λ΄κ° μ¬λ¦° κ²μκΈμ νμΈν  μ μμ΅λλ€.

β κ²μκΈ μμ± νμ΄μ§

- μ¬μ§ μλ‘λ λ° λ―Έλ¦¬ λ³΄κΈ° κ°λ₯

β κ²μκΈ μμΈ νμ΄μ§

- λκΈ μΆκ°, μμ , μ­μ  κ°λ₯
- μ€μκ° λκΈ νμΈ κ°λ₯
- λκΈμ λ¬λ©΄ μ μΌ μμμ λ°°μΉ

β κ²μκΈ μμ  νμ΄μ§

- κ²μκΈ λ΄μ© λλ μ¬μ§μ μμ 

</br>

## βοΈ κ°λ° μ€ λ§λ¬λ λ¬Έμ λ€

- νμ€νΈ, μ΄λ―Έμ§ μ€ μλ ₯ μλκ² μλ€λ©΄ κ²μκΈ μμ± λ²νΌ λΉνμ±ν

**1)  axios νμΌμ λΆλ¦¬νμ¬ import νλ λ°©μμΌλ‘ μλ²μ ν΅μ μ μλ νμ λ headerμ ν ν°μ΄ μλ€λ μ€λ₯κ° μ§μμ μΌλ‘ λ°μ νμ΅λλ€.**

β axios νΈμΆ ν¨μμμ ν€λμ ν ν°μ λ£μ΄μ£Όλ λ°©λ²μΌλ‘ ν΄κ²°νμ΅λλ€.

 
**2) 404, 400, 500 μ€λ₯κ° λ°μ νμ λ λ°±μλμ νλ‘ νΈμλ μ€μμ μ΄λ λΆλΆμμ μ€λ₯κ° λλ μ§ λ°λΉ λ₯΄κ² μλ κ² μ€μνλ€κ³  μκ° νμ΅λλ€.**

β μ²μ μλ² APIμ μμ²­μ λ³΄λμ λ μ€λ₯κ° λ§μ΄ λ°μ νμλ λ° νλ‘ νΈμλμμ μλͺ» μμ²­ ν μ€ μκ³  1μκ° μ λλ₯Ό ν€λ§¨ μ μ΄ μμ΅λλ€. μ΄λ΄ λ λ°±μλ λΆλ€μκ² μμ²­μ΄ μ λ€μ΄ κ°λ μ§ λ° λΉ λ₯΄κ² μ¬μ­€ λ³΄μλλΌλ©΄ μ’μ§ μμμκΉ μκ° νμ΅λλ€.

**3) μμ΄μ΄ νλ μ μμ± μ κ΅¬μ²΄μ μΌλ‘ μ΄λ»κ² μ§ν ν  κ²μΈμ§ μμΈνκ² μ νμ§ λͺ»ν΄μ CSSλ Viewλ₯Ό κ΅¬ν ν  λ νμ μλ μμ μ΄ λ§μ΄ λ°μ νλ κ² κ°μ΅λλ€.**

β λ€μ νλ‘μ νΈλ₯Ό μ§ν ν  λλ μμ΄μ΄ νλ μμ΄λ APIλ₯Ό μμ± ν  λ λ λ§μ μκ°μ λ€μ¬μ νλ‘μ νΈκ° μ΄λ»κ² λ§λ€μ΄ μ§λ©΄ μ’μ μ§ μ΄λ€ κΈ°λ₯μ΄ νμν λ° ν° κ·Έλ¦ΌμΌλ‘ λ΄€μ λ μ΄λ€ requestκ° νμνκ³  μ΄λ€ responseκ° λμμμΌ νλ μ§λ₯Ό κΌΌκΌΌνκ² μ€μ νλ©΄ μ’μ κ² κ°μ΅λλ€.

