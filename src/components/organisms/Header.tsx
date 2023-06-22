import { useState } from "react";
import { NavLink } from "react-router-dom";
import menu from "../../utils/menu";
import Hamburgers from "../molecules/Hamburguer";

const Header = ()=>{
  const [active, setActive] = useState(false);
  const ToggleMenuFunction = () => {
    !active ? setActive(true) : setActive(false);
  };
  const menuHidden = () => {
    setActive(false)
  }
  return(
    <header className="Header px-16 h-16 flex justify-items-start items-center gap-x-16">

      <NavLink to="/" className={'logo'} >
        Logo
      </NavLink>
      <nav className="me-auto">
        <Hamburgers active={active} action={ToggleMenuFunction} />
        <ul className={`main-menu ${active ? 'is-active' : ''}`}>
          {
            menu && menu.map((item:any, index:number)=>(
              <li onClick={ToggleMenuFunction} key={index}>
              <NavLink to={item.link} onClick={ToggleMenuFunction}>{item.title}</NavLink>
            </li>
            ))
          }
        </ul>

      </nav>
      <ul className="Header__icons">
        <li className="Header__icons-item">
          <img src="/search.svg" alt="bag" />
        </li>
        <li className="Header__icons-item">
          <img src="/bag.svg" alt="bag" />
        </li>
      </ul>
    </header>
  )
}

export default Header
