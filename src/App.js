import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Article from "./components/Articles/Article";
import Articlespage from "./components/Articles/ArticlesPage";
import Topicbar from "./components/Articles/TopicBar";
import Errorpage from "./components/ErrorPage";
import Header from "./components/Header";

import { UserContext } from "./contexts/UserContext";

function App() {
  const [user, setUser] = useState({
    username: "tickle122",
    name: "Tom Tickle",
    avatar_url:
      "https://vignette.wikia.nocookie.net/mrmen/images/d/d6/Mr-Tickle-9a.png/revision/latest?cb=20180127221953",
  });
  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <div className="App">
          <Header />
          <Topicbar />
          <Routes>
            <Route path="/articles" element={<Articlespage />} />
            <Route path="/articles/:topic" element={<Articlespage />} />
            <Route path="/articles/article/:article_id" element={<Article />} />
            <Route
              path="*"
              element={
                <Errorpage error={{ msg: "Page not found", status: 404 }} />
              }
            />
          </Routes>
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
