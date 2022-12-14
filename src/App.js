import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import MyContext from "./Mycontext";
import HabitsPage from "./pages/HabitsPage";
import HistoryPage from "./pages/HistoryPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import TodayPage from "./pages/TodayPage";

export default function App() {
  const [userInfo, setUserInfo] = useState({}); // estado global
  const [percentage, setPercentage] = useState(0);
  const [habitsVector, setHabitsVector] = useState(null);
  const [updateStatus, setUpdateStatus] = useState(false);
  
  return (
    <BrowserRouter>
      <MyContext.Provider
        value={{ userInfo, setUserInfo, percentage, setPercentage,habitsVector, setHabitsVector,updateStatus, setUpdateStatus }}
      >
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/cadastro" element={<SignUpPage />} />
          <Route path="/habitos" element={<HabitsPage />} />
          <Route path="/historico" element={<HistoryPage />} />
          <Route path="/hoje" element={<TodayPage />} />
        </Routes>
      </MyContext.Provider>
    </BrowserRouter>
  );
}
