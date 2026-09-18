import { Navigate, Route, Routes } from "react-router-dom";
import Tasks from "./pages/Tasks";

function App() {
  return (
    <Routes>
      <Route path="/tasks" element={<Tasks />} />
      <Route path="*" element={<Navigate to="/tasks" replace />} />
    </Routes>
  );
}

export default App;