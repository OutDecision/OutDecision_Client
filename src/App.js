import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./component/header/Header";
import Main from "./component/main/Main";
import Footer from "./component/footer/Footer";
import Login from "./component/login/Login";
import Signup from "./component/signup/Signup";
import Board from "./component/board/Board";
import Postup from "./component/postup/Postup";
import PostView from "./component/postview/PostView";
import Ranking from "./component/ranking/Ranking";
import Mypage from "./component/mypage/Mypage";
import InfoEdit from "./component/infoedit/InfoEdit";
import Mypost from "./component/mypost/Mypost";

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/board/:name" element={<Board />}></Route>
        <Route path="/board/postup/:name" element={<Postup />}></Route>
        <Route path="/board/view/:id" element={<PostView />}></Route>
        <Route path="/ranking" element={<Ranking />}></Route>
        <Route path="/mypage" element={<Mypage />}></Route>
        <Route path="/mypage/edit" element={<InfoEdit />}></Route>
        <Route path="/mypage/posting" element={<Mypost />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
