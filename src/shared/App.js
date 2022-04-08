import { BrowserRouter, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";

// 임시 (삭제 해야 함)
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import { Switch } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  return (
    <div className="App">
      <ConnectedRouter history={history}>
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
      </ConnectedRouter>
    </div>
  );
}

export default App;
