import React, {  useEffect, useState } from "react";
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from "./component/header/Header";
import Main from "./component/main/Main";
import Footer from "./component/footer/Footer";
import Login from "./component/login/Login";
import Signup from "./component/signup/Signup";
import EmailSignup from "./component/signup/EmailSignup";
import SocialSignup from "./component/signup/SocialSignup";
import Board from "./component/board/Board";
import HotPosting from "./component/board/HotPosting";
import Postup from "./component/postup/Postup";
import PostView from "./component/postview/PostView";
import Ranking from "./component/ranking/Ranking";
import Mypage from "./component/mypage/Mypage";
import InfoEdit from "./component/infoedit/InfoEdit";
import Mypost from "./component/mypost/Mypost";
import Myliked from "./component/myliked/Myliked";
import Mycomment from "./component/mycomment/Mycomment";
import Search from "./component/search/Search";
import FullSearch from "./component/search/FullSearch";
import FullBoard from "./component/board/FullBoard";
import HotBoard from "./component/board/HotBoard";


function App() {
  const [search, setSearch] = useState('');
  const [fullSearch, setFullSearch] = useState('');
  const location = useLocation();

  useEffect(()=> {
    setFullSearch('');
  }, [location]);

  return (
    <>
      <Header fullSearch={fullSearch} setFullSearch={setFullSearch}/>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/signup/email" element={<EmailSignup />}></Route>
        <Route path="/signup/social" element={<SocialSignup />}></Route>
        <Route path="/board/hot" element={<HotBoard />}></Route>
        <Route path="/board/all" element={<FullBoard />}></Route>
        <Route path="/board/:name" element={<Board search={search} setSearch={setSearch}/>}></Route>
        <Route path="/board/:name/hot" element={<HotPosting search={search} setSearch={setSearch}/>}></Route>
        <Route path="/board/all/search/:keyword" element={<FullSearch/>}></Route>  
        <Route path="/board/:name/search/:keyword" element={<Search search={search} setSearch={setSearch}/>}></Route>
        <Route path="/board/postup/:name" element={<Postup />}></Route>
        <Route path="/board/view/:id" element={<PostView />}></Route>
        <Route path="/ranking" element={<Ranking />}></Route>
        <Route path="/mypage" element={<Mypage />}></Route>
        <Route path="/mypage/edit" element={<InfoEdit />}></Route>
        <Route path="/mypage/posting" element={<Mypost />}></Route>
        <Route path="/mypage/comment" element={<Mycomment />}></Route>
        <Route path="/mypage/liked" element={<Myliked />}></Route>           
      </Routes>
      <Footer />
    </>
  );
}

export default App;
