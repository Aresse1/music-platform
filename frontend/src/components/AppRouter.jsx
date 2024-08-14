import React from "react";
import { Routes, Route } from "react-router-dom";
import {LibraryPage} from "./pages/LibraryPage";
import {TrackPage} from "./pages/TrackPage";
import HomePage from "./pages/HomePage";

const AppRouter = () => {
  return (
      <Routes>
        <Route path="/library" Component={LibraryPage} />
        <Route path="/tracks/:id" Component={TrackPage} />
        <Route path="/" Component={HomePage} />
      </Routes>
  );
};

export default AppRouter;