import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

import Headerlightbox from "./headerlightbox";

interface HeaderProps {
  handleClick: () => void;
  user: any;
  response: any;
}

function Header(props: HeaderProps) {
  const { user, response } = props;
  const [open, setOpen] = useState(false);

  const logout = () => {
    window.open("http://localhost:3000/auth/logut", "_self");
  };

  return (
    <header>
      <nav className="h-24 flex justify-between items-center relative">
        <div className="font-bold text-lg">Blogify</div>
        <div className="flex gap-x-6 items-center ">
          <a
            href="#"
            className="hover:bg-slate-800 hover:text-white hover:underline duration-300 py-2 px-5 border border-slate-900 font-semibold rounded-lg"
          >
            Create Post
          </a>
          {user === null || response === null ? (
            <div className="flex items-center justify-center bg-slate-800 w-9 h-9 rounded-full active:scale-75 duration-500 text-2xl relative  after:absolute after:-top-[1.5rem] after:-left-[.5rem] after:content-['Login'] after:text-xs after:bg-slate-800 after:text-white after:p-1 after:opacity-0 after:hover:opacity-100 after:rounded-md cursor-pointer ">
              <FontAwesomeIcon
                onClick={props.handleClick}
                icon={faRightToBracket}
                className="text-white"
              />
            </div>
          ) : (
            <>
              <div
                onClick={() => setOpen((preValue) => !preValue)}
                className={` active:scale-75 duration-300 cursor-pointer text-xl font-bold w-10 h-10 text-white flex items-center justify-center `}
              >
                <img
                  src={user.photos[0].value}
                  className={`${
                    open ? "outline outline-[3px] outline-slate-300" : ""
                  } rounded-full `}
                />
                
                {/* <div
                  className={`${
                    open ? "outline outline-[3px] outline-slate-300" : ""
                  } rounded-full  bg-black`}
                >
                  {user.displayName}
                </div> */}

                {/* {user ? (
                  <img
                    src={user.photos[0].value}
                    className={`${
                      open ? "outline outline-[3px] outline-slate-300" : ""
                    } rounded-full `}
                  />
                ) : (
                  <div className={`${ open ? "outline outline-[3px] outline-slate-300" : "" } rounded-full  bg-black`}
                  >{response.displayName}</div>
                )} */}

              </div>
              <Headerlightbox
                logout={logout}
                name={user.displayName}
                lightBox={`${!open ? "scale-0 opacity-0" : ""}`}
              />
            </>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
