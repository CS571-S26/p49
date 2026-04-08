import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";
import SchedulePage from "./pages/SchedulePage";
import MembershipPage from "./pages/MembershipPage";
import CoachesPage from "./pages/CoachesPage";
import MyClassesPage from "./pages/MyClassesPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="schedule" element={<SchedulePage />} />
        <Route path="myclasses" element={<MyClassesPage />} />
        <Route path="membership" element={<MembershipPage />} />
        <Route path="coaches" element={<CoachesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}