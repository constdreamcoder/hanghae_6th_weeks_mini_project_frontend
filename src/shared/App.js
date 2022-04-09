// components
import Main from "../pages/Main";
import PostDetails from "../pages/PostDetails";
import Head from "../components/Head";

// packages
import { Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Head />
      <BrowserRouter>
        <Route path="/" exact component={Main} />
        <Route path="/detail" exact component={PostDetails} />
      </BrowserRouter>
    </div>
  );
}

export default App;
