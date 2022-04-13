import axios from "axios";

const Api = axios.create({
  baseURL: "http://52.78.20.222",
  //header 뭐지?
});
// 토큰  추가
// api.interceptors.request.use(function (config) {
// 	const accessToken = document.cookie.split('=')[1];
// 	config.headers.common['X-AUTH-TOKEN'] = `${accessToken}`;
// 	return config;
// });
Api.defaults.headers.common["authorization"] = `Bearer ${localStorage.getItem(
  "token"
)}`;
export const Apis = {
  // post
  addPost: (contents) => Api.post("/api/posts", contents),
  editPost: (postId, contents) => Api.put(`api/posts/${postId}`, contents),
  deletePost: (postId) => Api.delete(`api/posts/${postId}`),
  roadPostList: () => Api.get("/api/postList"),
  roadPost: (postId) => Api.get(`/api/posts/${postId}`),

  //comment

  //user
};
