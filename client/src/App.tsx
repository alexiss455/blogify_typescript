import Logs from "./pages/login/Login";
import Header from "./components/header/header";
import { useRef, useEffect, useState } from "react";

function App() {
  const [open, setOpen] = useState(true);

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
  return (
    <div className="max-w-screen-lg mx-auto">
      <Header handleClick={() => setOpen((preValue) => !preValue)} />
      <Logs
        outSide={outSide}
        className={`${open ? "" : "backdrop-blur-sm z-[100]"}`}
        className1={`${open === true ? "-translate-y-[1000px]" : ""}`}
      />

    </div>
  );
}

export default App;
