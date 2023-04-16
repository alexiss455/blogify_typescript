import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

interface propsClass {
  className: string;
  handleClick: () => void;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setRespone:  any;
}
const login: React.FC<propsClass> = (props) => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api/login", {
        email: login.email,
        password: login.password,
      });

      const token = response.data.token;
      props.setRespone(response.data.user);

      localStorage.setItem("token", token);
      toast.success("Logged in successfully!");
      props.setOpen(true);
      // redirect to dashboard or homepage here
    } catch (error) {
      setLogin({ email: "", password: "" });
      console.error("Network error:", error);
      toast.error("Failed to log in!");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`${props.className} flex flex-col w-1/2 transition-all  px-6`}
    >
      <label htmlFor="email">E-mail</label>
      <input
        className="shadow-md bg-slate-200 py-2 px-1 rounded-md outline-slate-600"
        type="email"
        required
        value={login.email}
        onChange={(e) => setLogin({ ...login, email: e.target.value })}
      />
      <label htmlFor="password" className="mt-4">
        Password
      </label>
      <input
        className="shadow-md bg-slate-200 py-2 px-1 rounded-md outline-slate-600"
        type="password"
        required
        value={login.password}
        onChange={(e) => setLogin({ ...login, password: e.target.value })}
      />
      <button
        type="submit"
        className="active:scale-75 duration-500 mt-10 py-3 bg-slate-900 text-white rounded-md font-semibold tracking-wide"
      >
        LOGIN
      </button>
      <p className="text-[.80rem] mt mt-4">
        Don't have an account?
        <span
          onClick={props.handleClick}
          className="text-blue-600 cursor-pointer hover:underline"
        >
          Resgister
        </span>
      </p>
    </form>
  );
};

export default login;
