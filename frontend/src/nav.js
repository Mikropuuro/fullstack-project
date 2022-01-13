import React from "react";
import { Route, Routes, NavLink, HashRouter } from "react-router-dom";
import WordFinnish from "./word";
import WordEnglish from "./wordenglish";

export default function Nav() {
  return (
    <HashRouter>
      <NavLink to="/wordenglish">Guess words in Finnish</NavLink>
      <br />
      <NavLink to="/word">Guess words in English</NavLink>
      <br />

      <Routes>
        <Route path="/wordenglish" element={<WordEnglish />} />
        <Route path="/word" element={<WordFinnish />} />
      </Routes>
    </HashRouter>
  );
}
