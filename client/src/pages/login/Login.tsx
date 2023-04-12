import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGoogle,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import Register from "./RegisterForm";
import LoginForm from "./LoginForm";
interface classPorps {
  className: string;
  className1: string;
  outSide: React.RefObject<HTMLDivElement>;
}
const Loing: React.FC<classPorps> = (props) => {
  const [hide, setHide] = useState(false);

const google = () =>{
  window.open("http://localhost:3000/auth/google", "_self")
}
const github = () =>{
  window.open("http://localhost:3000/auth/github", "_self")
}

  return (
    <div
      className={`${props.className} w-full h-screen absolute left-0 top-0 flex items-center justify-center`}
    >
      <div
        ref={props.outSide}
        className={`${props.className1} overflow-hidden duration-500  bg-white shadow-2xl rounded-md `}
      >
        <div className="flex flex-col gap-y-4 px-6 pt-6">
          <div onClick={google} className="active:scale-75 duration-500 flex items-center justify-center gap-x-8 bg-red-700 text-white p-2 rounded-md cursor-pointer">
            <FontAwesomeIcon icon={faGoogle} className="text-3xl" />
            <span className="whitespace-nowrap ">Continue with Google</span>
          </div>
          <div className="active:scale-75 duration-500 flex items-center  justify-center  gap-x-8 bg-blue-600 text-white p-2 rounded-md cursor-pointer">
            <FontAwesomeIcon icon={faTwitter} className="text-3xl" />
            <span className="whitespace-nowrap">Continue with Twitter</span>
          </div>
          <div onClick={github} className="active:scale-75 duration-500 flex items-center   justify-center gap-x-8  bg-neutral-900 text-white p-2 rounded-md cursor-pointer">
            <FontAwesomeIcon icon={faGithub} className="text-3xl" />
            <span className="whitespace-nowrap">Continue with Github</span>
          </div>

          <p className="flex items-center justify-center after:w-full  after:ml-2 after:h-[2px] after:bg-black before:w-full before:h-[2px] before:bg-black before:mr-2">
            OR
          </p>
        </div>
        <div
          className={` ${
            hide === true ? "h-[25rem]" : "h-[19rem]"
          } items-center flex w-[200%] `}
        >
          <Register
            className={`${hide === true ? "-ml-[50%]" : ""}`}
            handleClick={() => setHide((preValue) => !preValue)}
          />
          <LoginForm handleClick={() => setHide((preValue) => !preValue)} />
        </div>
      </div>
    </div>
  );
};

export default Loing;
