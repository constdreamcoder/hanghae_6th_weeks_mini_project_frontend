import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { actionCreators as commentActions } from "../redux/modules/comment";

// pages
import Main from "../pages/Main";
import PostDetails from "../pages/PostDetails";
import Head from "../components/Head";

import Login from "../pages/Login";
import Signup from "../pages/Signup";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  const dispatch = useDispatch();

  // 페이지 조회할 때마다 실행, token이 유효한지 여부 체크
  React.useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(userActions.loginCheckFB());
    }
  });

  return (
    <div className="App">
      <Head />
      <ConnectedRouter history={history}>
        <Route path="/" exact component={Main} />
        <Route path="/detail" exact component={PostDetails} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
      </ConnectedRouter>
    </div>
  );
}

export default App;
