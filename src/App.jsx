import { Navigate, Route, Routes } from "react-router";
import MainPage from "./views/MainPage";
import ProjectInfo from "./views/ProjectInfo/ProjectInfo";
import { PublicRoutes } from "../routes/routes";
import ScrollToTop from "./components/scrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Navigate to={PublicRoutes.HOME} />} />
        <Route path={PublicRoutes.HOME} element={<MainPage />} />
        <Route path={`${PublicRoutes.PROJECT}/:id`} element={<ProjectInfo />} />
      </Routes>
    </>
  );
}
export default App;
