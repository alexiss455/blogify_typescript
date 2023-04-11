import React from 'react'
interface propsClass {
    className: string;
    handleClick: () => void
}
const register: React.FC<propsClass> = (props) => {
  return (
    <form
    className={`${props.className} flex flex-col w-1/2 transition-all  px-6`}
  >
    <label htmlFor="email">E-mail</label>
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
      LOGIN
    </button>
    <p className="text-[.80rem] mt mt-4">
      Don't have an account?{" "}
      <span
        onClick={props.handleClick}
        className="text-blue-600 cursor-pointer hover:underline" >
        Register
      </span>
    </p>
  </form>
  )
}

export default register