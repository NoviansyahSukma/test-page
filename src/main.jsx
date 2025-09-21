import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router";
import SitePage from "./components/SitePage";
import SiteList from "./components/site-list/SiteList";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<SitePage />}>
          <Route index element={<SiteList />} />
        </Route>
      </Routes>
    </HashRouter>
  </StrictMode>
);
