// 전역으로 axios 객체 만들기

/*
axios 객체를 전역으로 만들면, 매번 헤더나 url 전체를 설정해주지 않아도 됩니다!

+) 전역으로 만든 객체에서는 더 다양한 일을 할 수 있어요. 요청을 보내기 전에 같은 요청이 가진 않았나 확인한다거나 요청에 실패하면 잽싸게 가로채서 재요청을 보낼수도 있답니다.(인터셉터라고 해요!)
*/

import axios from "axios";
// http://52.78.20.222/api/comments
const instance = axios.create({
  baseURL: "http://52.78.20.222", // 요청을 www.aa.com/user로 보낸다면, www.aa.com까지 기록
});

// 토큰  추가
// instance.interceptors.request.use(function (config) {
// 	const accessToken = document.cookie.split('=')[1];
// 	config.headers.common['X-AUTH-TOKEN'] = `${accessToken}`;
// 	return config;
// });

// 가지고 있는 토큰 넣어주기!
// 로그인 전이면 토큰이 없으니 못 넣어요.
// 그럴 땐 로그인 하고 토큰을 받아왔을 때 넣어줍시다.
instance.defaults.headers.common[
  "authorization"
] = `Bearer ${localStorage.getItem("token")}`;

export default instance;
