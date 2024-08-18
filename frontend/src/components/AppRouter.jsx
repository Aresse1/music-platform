import React from "react";
import { Routes, Route } from "react-router-dom";
import {LibraryPage} from "./pages/LibraryPage";
import HomePage from "./pages/HomePage";
import { SearchPage } from "./pages/SearchPage";

const AppRouter = () => {
  return (
      <Routes>
        <Route path="/library" Component={LibraryPage} />
        <Route path="/" Component={HomePage} />
        <Route path="/search/:id" Component={SearchPage}/>
      </Routes>
  );
};

export default AppRouter;