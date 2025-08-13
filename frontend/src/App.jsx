import { useState } from "react";
import "./App.css";
import Login from "./component/Login";
import BackgroundChange from "./component/BackgroundChange";

function App() {
  const [background, setBackground] = useState("bg-blue-500");

  return (
    <>
      <div
        className={`h-screen flex flex-col justify-center items-center ${background}`}
      >
        {/* <div className="flex flex-col justify-center items-center p-5 bg-blue-500 ">
        <h1 className="text-white text-3xl font-bold mb-4 lg:text-5xl p-2">
          Welcome to the Hotel Management System
        </h1>
        <p className="text-2xl">
          Manage your bookings and customers with ease.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <Login />
      </div> */}
        <BackgroundChange
          background={background}
          setBackground={setBackground}
        />
      </div>
    </>
  );
}

export default App;
