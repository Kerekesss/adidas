import { footerLogo, headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import { useEffect, useState } from "react";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
const Nav = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [theme, setTheme] = useState("Light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <>
      <header className="padding-x fixed z-20 w-full bg-white bg-opacity-80 dark:bg-black dark:bg-opacity-80 ">
        <nav className="flex justify-between items-center max-container ">
          <a href="/" className="dark:hidden scale-75">
            <img src={headerLogo} alt="Logo" width={110} height={29} />
          </a>
          <a href="/" className="hidden dark:flex">
            <img src={footerLogo} alt="Logo" width={110} height={29} />
          </a>
          <button
            className="flex gap-4 lg:ml-10 dark-light p-2 z-10 max-lg:absolute  max-lg:left-[43%] rounded-full   dark:border-white border-black border-[3px] "
            onClick={handleThemeSwitch}
          >
            <FaSun className="text-yellow-400 dark:text-black" />
            <FaMoon className="dark:text-yellow-400" />
          </button>
          <ul className="flex flex-1 justify-center items-center gap-16 max-lg:hidden">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  className="font-montserrat text-lg text-slate-gray dark:text-white"
                  href={item.href}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div
            onClick={handleClick}
            className="lg:hidden text-2xl cursor-pointer z-30 dark:text-white"
          >
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul
            className={
              click
                ? "absolute w-full h-screen bg-white top-0 left-0 flex flex-col justify-center items-center gap-16 lg:hidden dark:bg-black  bg-opacity-95 dark:bg-opacity-95"
                : "hidden"
            }
          >
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  className="font-montserrat text-lg text-slate-gray dark:text-white"
                  href={item.href}
                  onClick={handleClick}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Nav;
