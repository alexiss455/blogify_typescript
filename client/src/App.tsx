import Login from "./pages/login/Login";
import Header from "./components/header/header";
import { useRef, useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import axios from "axios";

interface User {
  photos: { value: string }[];
  displayName: string;
}

interface response {
  displayName: string;
}
function App() {
  const [open, setOpen] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const [response, setRespone] = useState<response | null>(null);

  console.log(response?.displayName);
  
  const outSide = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (outSide.current && !outSide.current.contains(event.target as Node)) {
        setOpen(true);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/auth/login/success",
          { withCredentials: true }
        );
        if (response.status === 200) {
          setUser(response.data.user);
          console.log(response.data);
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
    <div className="max-w-screen-lg mx-auto max-lg:px-6">
      <Toaster position="top-center" reverseOrder={false} />
      <Header
        user={user}
        response={response}
        handleClick={() => setOpen((preValue) => !preValue)}
      />
      <Login
        setRespone={setRespone}
        setOpen={setOpen}
        outSide={outSide}
        className={`${open ? "-z-50" : "backdrop-blur-sm z-[100]"}`}
        className1={`${open === true ? "-translate-y-[1000px]" : ""}`}
      />
    </div>
  );
}

export default App;
