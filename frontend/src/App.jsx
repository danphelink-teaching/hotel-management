import { useState } from "react";
import "./App.css";
import Login from "./component/Login";

function App() {
  return (
    <>
      <div className="flex flex-col justify-center items-center p-5 bg-blue-500 ">
        <h1 className="text-white text-3xl font-bold mb-4 lg:text-5xl p-2">
          Welcome to the Hotel Management System
        </h1>
        <p className="text-2xl">
          Manage your bookings and customers with ease.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <Login />
      </div>
    </>
  );
}

export default App;
