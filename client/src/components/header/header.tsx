import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
interface HeaderProps {
  handleClick: () => void;
}

function Header({ handleClick }: HeaderProps) {
  return (
    <header>
      <nav className="h-24 flex justify-between items-center">
        <div className="font-bold text-lg">Blogify</div>
        <div className="flex gap-x-6 items-center">
          Compose
          <div className="flex items-center justify-center bg-slate-800 w-9 h-9 rounded-full active:scale-75 duration-500 z-50 text-2xl relative  after:absolute after:-top-[1.5rem] after:-left-[.5rem] after:content-['Login'] after:text-xs after:bg-slate-800 after:text-white after:p-1 after:opacity-0 after:hover:opacity-100 after:rounded-md cursor-pointer ">
            <FontAwesomeIcon
              onClick={handleClick}
              icon={faRightToBracket}
              className="text-white"
            />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
