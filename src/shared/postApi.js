import axios from "axios";

const postApi = axios.create({
    baseURL: "http://52.78.20.222",
});
// 토큰 받으면 추가
// api.interceptors.request.use(function (config) {
// 	const accessToken = document.cookie.split('=')[1];
// 	config.headers.common['X-AUTH-TOKEN'] = `${accessToken}`;
// 	return config;
// });

export const postApis = {
    // post
    addPost: (contents) => postApi.post("/api/posts", contents),
    editPost: (postId, contents) =>
        postApi.put(`api/posts/${postId}`, contents),
    delPost: (postId) => postApi.delete(`api/posts/${postId}`),
    roadPostList: () => postApi.get("/api/postList"),
    roadPost: (postId) => postApi.get(`/api/posts/${postId}`),
};
