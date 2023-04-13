interface Props {
  logout: () => void;
  lightBox: string;
  name: string;
}

function headerlightbox(props: Props) {
  return (
    <div
      className={` ${props.lightBox} duration-300 absolute top-[4.5rem] right-0 py-3 px-2 bg-white shadow-2xl rounded-md w-[250px] max-sm:w-full`}
    >
      <ul className="flex flex-col cursor-pointer">
        <li className="py-4 px-6 hover:bg-slate-200 rounded-md mb-2 font-[500]">
          {props.name}
        </li>
        <hr />
        <li className="py-2 px-6 hover:bg-slate-200 rounded-md mt-2">
          Create Post
        </li>
        <li className="py-2 px-6 hover:bg-slate-200 rounded-md">Settings</li>
        <li
          className="py-2 px-6 hover:bg-slate-200 rounded-md"
          onClick={props.logout}
        >
          Logout
        </li>
      </ul>
    </div>
  );
}

export default headerlightbox;
