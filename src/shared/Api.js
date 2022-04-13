import axios from "axios";

const Api = axios.create({
  baseURL: "http://52.78.20.222",
});
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
  roadMypost: () => Api.get("/api/mypage/"),

  //comment

  //user
};
