import MainScreen from "./Mainscreen/MainScreen";
import HomePage from "./components/HomePage";
import SignUp from "./components/Signup";
import Login from "./components/Login";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import EventRoom from "./pages/EventRoom";
import RoomCreateForm from "./components/RoomCreateForm";
import MyRooms from "./pages/MyRooms";
import Memory from "./pages/Memory";
import About from "./pages/About";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mainpage" element={<MainScreen />} />
          <Route path="/eventroom" element={<EventRoom />} />
          <Route path="/memory" element={<Memory />} />
          <Route path="/hakkimizda" element={<About></About>} />
          <Route path="/roomCreate" element={<RoomCreateForm />} />
          <Route path="/myRooms" element={<MyRooms></MyRooms>} />
          <Route path="/profile" element={<h1>Profil</h1>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
