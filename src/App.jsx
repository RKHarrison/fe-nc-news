import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Articles from "./components/Articles/Articles";
import Article from "./components/Article/Article";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Routes>
        <Route path="/article/:article_id" element={<Article />} />
        <Route path="/:topic?" element={<Articles />} />
      </Routes>
    </>
  );
}

export default App;
