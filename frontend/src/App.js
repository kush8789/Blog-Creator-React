// import './App.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./accounts/Login";
import Signup from "./accounts/Signup";
import CreatePost from "./posts/CreatePost";
import PostHome from "./posts/PostHome";
import PostDetail from "./posts/PostDetail";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="accounts">
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />}>
          </Route>
        </Route>
        <Route path="posts">
          <Route index element={<PostHome />} />
          <Route path="createpost" element={<CreatePost />} />
          <Route path="details/:id" element={<PostDetail />}/>
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
