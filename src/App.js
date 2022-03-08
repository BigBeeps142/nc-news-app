import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Article from "./components/Articles/Article";
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
          <Route path="/articles/article/:article_id" element={<Article />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
