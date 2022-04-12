import React from "react";

import { BrowserRouter, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { actionCreators as postActions } from "../redux/modules/post";
import { actionCreators as commentActions } from "../redux/modules/comment";


// pages
import Main from "../pages/Main";
import PostDetails from "../pages/PostDetails";
import Head from "../components/Head";

import Login from "../pages/Login";
import Signup from "../pages/Signup";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import PostWrite from "../pages/PostWrite";
import PostEdit from "../pages/PostEdit";
// 수정삭제페이지테스트

function App() {
    const dispatch = useDispatch();
    const post_list = useSelector((state) => state.post.list);

    // 페이지 조회할 때마다 실행, token이 유효한지 여부 체크
    React.useEffect(() => {
        if (localStorage.getItem("token")) {
            dispatch(userActions.loginCheckFB());
        }
    });

    React.useEffect(() => {
        if (post_list.length === 0) {
            console.log(post_list);
            dispatch(postActions.getPostFB());
            console.log("=====조회됐음====");
        }
    }, []);

    return (
        <div className="App">
            <Head />
            <ConnectedRouter history={history}>
                <Route path="/" exact component={Main} />
                <Route path="/detail/:postId" exact component={PostDetails} />
                <Route path="/login" exact component={Login} />
                <Route path="/signup" exact component={Signup} />
                <Route path="/write" exact component={PostWrite} />
                <Route path="/write/:postId" exact component={PostEdit} />
            </ConnectedRouter>
        </div>
    );
}

export default App;
