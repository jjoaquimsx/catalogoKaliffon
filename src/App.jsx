import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import Page from "./components/imagePage/Page.jsx"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route index path="/catalogoKaliffon" element={<Home />}></Route>
          <Route path="/page/:url" element={<Page />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
