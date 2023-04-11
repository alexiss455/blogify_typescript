import React from "react";

interface propsClass {
  handleClick: () => void;
}
const LoginForm: React.FC<propsClass> = (props) => {
  return (
    <form className="flex flex-col w-1/2 px-6">
      <label htmlFor="email">DisplayName</label>
      <input
        className="shadow-md bg-slate-200 py-2 px-1 rounded-md outline-slate-600"
        type="text"
        required
      />
      <label htmlFor="email" className="mt-4">
        E-mail
      </label>
      <input
        className="shadow-md bg-slate-200 py-2 px-1 rounded-md outline-slate-600"
        type="email"
        required
      />
      <label htmlFor="password" className="mt-4">
        Password
      </label>
      <input
        className="shadow-md bg-slate-200 py-2 px-1 rounded-md outline-slate-600"
        type="password"
        required
      />
      <button className="active:scale-75 duration-500 mt-10 py-3 bg-slate-900 text-white rounded-md font-semibold tracking-wide">
        Loign
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
