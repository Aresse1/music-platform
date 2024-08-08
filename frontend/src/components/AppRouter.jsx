import React from "react";
import { Routes, Route } from "react-router-dom";
import {LibraryPage} from "./pages/LibraryPage";
import {TrackPage} from "./pages/TrackPage";

const AppRouter = () => {
  return (
      <Routes>
        <Route path="/library" Component={LibraryPage} />
        <Route path="/tracks/:id" Component={TrackPage} />
      </Routes>
  );
};

export default AppRouter;