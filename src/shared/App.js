// components
import Main from "../pages/Main";

// packages
import { Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" exact component={Main} />
      </BrowserRouter>
    </div>
  );
}

export default App;
