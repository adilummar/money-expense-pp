import { Link } from "react-router-dom";
import {RxAvatar} from 'react-icons/rx'


export default function Header() {
  return (
    <header className="w-5/6 mx-auto bg-main rounded-lg ">
    <div className="flex justify-between p-3 mt-3 mx-auto items-center">
      <div>
        <Link to={"/"}>
          <p className="our-green font-extrabold ">logo</p>
        </Link>
      </div>
      <div>
        <ul className="flex gap-4 ">
          <Link to={"/"}>
            <li className="hidden sm:inline">Home</li>
          </Link>
          <Link to={"/generel"}>
            <li className="hidden sm:inline">general</li>
          </Link>
          <Link to={"/income"}>
            <li className="hidden sm:inline" >income</li>
          </Link>
          <Link to={"/expense"}>
            <li className="hidden sm:inline" >expense</li>
          </Link>
          <Link to={"/category"}>
            <li className="hidden sm:inline" >category</li>
          </Link>
        </ul>
      </div>
      <div className="flex items-center gap-3">
        <Link to={"/sign-in"}>
          <p className="font-extrabold">login</p>
        </Link>
        <div className="rounded-full bg-white p-2">
          <RxAvatar color="#24F07D" size="2rem"/>
        </div>
      </div>
    </div>
  </header>
  );
}
