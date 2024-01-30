import "./App.css";
import Calendar from "./components/Calendar/Calendar";
import { Routes, Route } from "react-router-dom";
import SignIn from "./pages/SingIn";

function App() {
  return (
    <div>
      <header className="bg-blue-500 text-white text-center py-4">
        <h1 className="text-2xl font-bold">Quart de les Valls</h1>
        <h4 className="font-bold">Instalaciones / Pista de padel</h4>
      </header>

      <div className="container mx-auto mt-4">
        <SignIn />
        <div className="grid grid-cols-9 gap-4">
          <div className="col-span-1"></div>
          {/* <Calendar />   */}
          <div className="col-span-1"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
