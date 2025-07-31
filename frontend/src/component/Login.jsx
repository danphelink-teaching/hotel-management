import { React, useState } from "react";

const Login = () => {
  const [loginText, setLoginText] = useState(false);

  function handleLogin() {
    setLoginText(!loginText);
  }
  return (
    <div className="flex flex-col m-5 rounded-lg  gap-5">
      {loginText && (
        <div className="flex flex-col justify-center items-center p-5 bg-blue-500">
          <h1 className="text-white text-3xl font-bold mb-4 lg:text-5xl p-2">
            Login Successful
          </h1>
        </div>
      )}

      <div className="flex flex-col justify-center items-center p-5 ">
        <p>Email:</p>
        <input
          className="border-solid border-2 border-sky-500 rounded-lg"
          type="email"
          name=""
          id=""
        />
      </div>
      <div className="flex flex-col justify-center items-center p-5 ">
        <p>Password:</p>
        <input
          className="border-solid border-2 border-sky-500 rounded-lg"
          type="password"
          name=""
          id=""
        />
      </div>
      <div className="flex flex-col justify-center items-center p-5 ">
        <button
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
