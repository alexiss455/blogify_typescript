import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import axios from 'axios';

interface User {
  photos: { value: string }[];
}
interface HeaderProps {
  handleClick: () => void;
}

function Header({ handleClick }: HeaderProps) {
  
  const logout = () =>{
    window.open("http://localhost:3000/auth/logut", "_self")
  }

  const [user, setUser] = useState<User | null>(null);

  console.log(user);
  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get("http://localhost:3000/auth/login/success", { withCredentials: true });
        if (response.status === 200) {
          setUser(response.data.user);
        } else {
          throw new Error("Authentication has failed");
        }
      } catch (error) {
        console.error(error);
      }
    };
    getUser();
  }, []);
  
  return (
    <header>
      <nav className="h-24 flex justify-between items-center">
        <div className="font-bold text-lg">Blogify</div>
        <div className="flex gap-x-6 items-center">
          Compose
          {!user ? (
            <div className="flex items-center justify-center bg-slate-800 w-9 h-9 rounded-full active:scale-75 duration-500 text-2xl relative  after:absolute after:-top-[1.5rem] after:-left-[.5rem] after:content-['Login'] after:text-xs after:bg-slate-800 after:text-white after:p-1 after:opacity-0 after:hover:opacity-100 after:rounded-md cursor-pointer ">
              <FontAwesomeIcon
                onClick={handleClick}
                icon={faRightToBracket}
                className="text-white"
              />
            </div>
          ) : (
            <>
              <div className="text-xl font-bold w-10 h-10 text-white flex items-center justify-center">
                <img src={user.photos[0].value} className="rounded-full "/>
              </div>
              <p onClick={logout} className="cursor-pointer">Logout</p>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
