import MainScreen from "./Mainscreen/MainScreen";
import HomePage from "./components/HomePage";
import SignUp from "./components/Signup";
import Login from "./components/Login";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import EventRoom from "./pages/EventRoom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mainpage" element={<MainScreen />} />
          <Route path="/eventroom" element={<EventRoom />} />
          <Route path="/hakkimizda" element={<h1>Hakkımızda</h1>} />
          <Route path="/roomCreate" element={<h1>Oda Oluştur</h1>} />
          <Route path="/myRooms" element={<h1>Odalarım</h1>} />
          <Route path="/profile" element={<h1>Profil</h1>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
