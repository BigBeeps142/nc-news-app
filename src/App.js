import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Articlespage from "./components/Articles/ArticlesPage";
import Header from "./components/Header";
import Pagenav from "./components/PageNav";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Pagenav />
        <Routes>
          <Route path="/articles" element={<Articlespage />} />
          <Route path="/articles/:topic" element={<Articlespage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
