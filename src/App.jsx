import "./App.css";
import { useState } from "react";
import {Route, Routes} from "react-router-dom" 
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Articles from "./components/Articles/Articles";
import Article from "./components/Article/Article";

function App() {
  const [articles, setArticles] = useState([]);
  const [article, setArticle] = useState({})

  return (
    <>
      <Header />
      <Nav />
      <Routes>
        <Route path="/article/:article_id" element={<Article article={article}/>}/>
        <Route path="/" element={<Articles articles={articles} setArticles={setArticles} setArticle={setArticle}/>}/>
      </Routes>
    </>
  );
}

export default App;