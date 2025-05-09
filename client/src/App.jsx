import { Route, Routes } from "react-router";
import "./App.css";
import { AuthPage } from "./pages/Auth";
import { DashboardLayout } from "./components/DashboardLayout";
import HomePage from "./pages/Home";
import { AuthProvider } from "./contexts/AuthProvider";
import TranscriptPage from "./pages/Transcripts";
import SchoolsPage from "./pages/Schools";
import StudentPage from "./pages/Students";
import IndividualStudentPage from "./pages/IndividualStudent";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<AuthPage />} />
      <Route
        path="dashboard"
        element={
          <AuthProvider>
            <DashboardLayout />
          </AuthProvider>
        }
      >
        <Route index element={<HomePage />} />
        <Route path="transcripts" element={<TranscriptPage />} />
        <Route path="schools" element={<SchoolsPage />} />
        <Route path="students">
          <Route index element={<StudentPage />} />
          <Route path=":studentId" element={<IndividualStudentPage />} />
        </Route>
      </Route>
    </Routes>
  );
}
