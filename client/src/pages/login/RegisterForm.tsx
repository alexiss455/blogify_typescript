import axios from "axios";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

interface Props {
  handleClick: () => void;
  setHide: React.Dispatch<React.SetStateAction<boolean>>;
}
const LoginForm = (props: Props) => {
  const { setHide } = props;
  const [register, setRegister] = useState({
    displayName: "",
    email: "",
    password: "",
  });
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:3000/api/register", {
        displayName: register.displayName,
        email: register.email,
        password: register.password,
      });
      if (data === "This email is already registered.") {
        toast.error(` ${data} `);
        setRegister({ ...register, email: "" });
      } else if (data === "User registered successfully.") {
        setRegister({ displayName: "", email: "", password: "" });
        toast.success(` ${data} `);
        setHide(false);
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-1/2 px-6">
      <label htmlFor="displayName">DisplayName</label>
      <input
        className="shadow-md bg-slate-200 py-2 px-1 rounded-md outline-slate-600"
        type="text"
        value={register.displayName}
        onChange={(e) =>
          setRegister({
            ...register,
            displayName: e.target.value,
          })
        }
        required
      />
      <label htmlFor="email" className="mt-4">
        E-mail
      </label>
      <input
        className="shadow-md bg-slate-200 py-2 px-1 rounded-md outline-slate-600"
        type="email"
        value={register.email}
        onChange={(e) =>
          setRegister({
            ...register,
            email: e.target.value,
          })
        }
        required
      />
      
      <label htmlFor="password" className="mt-4">
        Password
      </label>
      <input
        className="shadow-md bg-slate-200 py-2 px-1 rounded-md outline-slate-600"
        type="password"
        value={register.password}
        onChange={(e) =>
          setRegister({
            ...register,
            password: e.target.value,
          })
        }
        required
      />
      <button className="active:scale-75 duration-500 mt-10 py-3 bg-slate-900 text-white rounded-md font-semibold tracking-wide">
        REGISTER
      </button>

      <p className="text-[.80rem] mt mt-4">
        Already have an account?{" "}
        <span
          onClick={props.handleClick}
          className="text-blue-600 cursor-pointer hover:underline"
        >
          Login
        </span>
      </p>
    </form>
  );
};

export default LoginForm;
