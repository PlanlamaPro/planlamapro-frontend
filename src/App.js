import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import EventRoom from "./pages/EventRoom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EventRoom></EventRoom>}></Route>
        <Route path="*">"Hata"</Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
