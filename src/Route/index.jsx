import React, { useState, useEffect } from "react";

import { Login } from "../pages/Login";
import { Books } from "../pages/Books";
import { Header } from "../pages/Header";
import { CreateBook } from "../pages/CreateBook";
import { EditBook } from "../pages/EditBook";

import { Home } from "../pages/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import style from "./route.module.css";

export function Router() {
  const [login, setLogin] = useState(false);

  useEffect(() => {
    const isLogin = localStorage.getItem("user");

    if (isLogin) {
      setLogin(true);
    }
  }, []);

  return (
    <div>
      {!login ? (
        <Login />
      ) : (
        <div className={style.container}>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/books" element={<Books />} />
              <Route path="/create_book" element={<CreateBook />} />
              <Route path="/edit_book/:id" element={<EditBook />} />
            </Routes>
          </BrowserRouter>
        </div>
      )}
    </div>
  );
}
