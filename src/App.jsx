import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Articles from "./components/Articles/Articles";
import Article from "./components/Article/Article";
import ErrorPage from "./components/ErrorPage/ErrorPage";

function App() {
  return (
    <>
    <title>This is a tech skills bootcamp project making a front end digital news app as a portfoilio project</title>
      <Header />
      <Nav />
      <Routes>
        <Route path="/article/:article_id" element={<Article />} />
        <Route path="/:topic?" element={<Articles />} />
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    </>
  );
}

export default App;
