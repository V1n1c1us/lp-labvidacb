import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/NavBar.module.css";
import useViewport from "../utils/useViewport";
import Link from "next/link";
import { FaBars, FaXmark, FaHeart } from "react-icons/fa6";
import { BsHeartPulse } from "react-icons/bs";
import { Button } from "../../@/components/ui/button";

export const Nav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [stickyClass, setStickyClass] = useState("relative");
  const { isMobile } = useViewport();

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 10
        ? setStickyClass(`absolute`)
        : setStickyClass(`border mb-5`);
    }
  };
  console.log(stickyClass);
  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  const DASHBOARD_MENUS = [
    {
      id: "1",
      path: "/",
      label: "Home",
    },
    {
      id: "2",
      path: "/",
      label: "Laboratório",
    },
    {
      id: "3",
      path: "/",
      label: "Exames",
    },
    {
      id: "4",
      path: "/",
      label: "Convênios",
    },
    {
      id: "5",
      path: "/",
      label: "Contato",
    },
  ];
  console.log(toggleMenu);
  return (
    <>
      <nav className="fixed w-full">
        <div className="max-w-7x1 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* <div className="flex items-center"> */}
            <a href="" className="flex-shrink-0">
              <Image
                src="/logo.svg"
                alt="LabVida - Laboratório de Análises Clínicas"
                width={150}
                height={150}
              />
            </a>

            <div className="hidden lg:block">
              <div className="ml-10 flex items-baseline">
                <ul className="flex md:flex-row flex-col md:items-cente space-x-14">
                  {DASHBOARD_MENUS.map((menu, index) => (
                    <>
                      <li key={index + 1}>
                        <Link
                          className="text-[#2c396a] font-bold text-lg rounded-md px-3 py-2 hover:text-[#01a298] hover:bg-gray-300 transition duration-300 ease-in-out"
                          href={menu.path}
                        >
                          {menu.label}
                        </Link>
                      </li>
                    </>
                  ))}
                </ul>
              </div>
            </div>
            <div
              className="mr-2 flex lg:hidden"
              aria-label="menu"
              aria-expanded={toggleMenu}
            >
              {!toggleMenu ? (
                <FaBars
                  className="text-3xl cursor-pointer xl:hidden"
                  size={24}
                  onClick={() => setToggleMenu(!toggleMenu)}
                />
              ) : (
                <FaXmark
                  className="text-3xl cursor-pointer md:hidden"
                  onClick={() => setToggleMenu(!toggleMenu)}
                  size={24}
                />
              )}
            </div>
          </div>
          {/* </div> */}
        </div>

        <div
          id="menu"
          className={`${
            toggleMenu
              ? "bg-slate-500 w-full md:hidden absolute duration-500"
              : "hidden"
          }`}
        >
          <div className="px-2 pt-2 pb-3 sm:px-3">
            <ul className="block">
              {DASHBOARD_MENUS.map((menu, index) => (
                <>
                  <li key={index + 1} className="mb-2">
                    <Link
                      className="text-[#2c396a] font-bold text-lg rounded-md px-3 py-2 hover:text-[#01a298] hover:bg-gray-300 transition duration-300 ease-in-out"
                      href={menu.path}
                    >
                      {menu.label}
                    </Link>
                  </li>
                </>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
  /**
  <header className={`w-full mt-3 ${stickyClass}`}>
        {/* <div className="grid grid-cols-3 grid-rows-2 gap-2">
        <nav className="flex justify-between items-center w-[92%] mx-auto">
          <div>
            <Image src="/logo.svg" alt="" width={150} height={150} />
          </div>
          <div
            className={`backdrop-blur duration-500 md:static absolute md:min-h-fit min-h-[60vh] left-0 ${
              toggleMenu ? "top-[10%]" : "top-[-100%]"
            } md:w-auto w-full flex items-center px-5`}
          >
            <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
              {DASHBOARD_MENUS.map((menu, index) => (
                <>
                  <li key={index + 1}>
                    <Link
                      className="text-[#2c396a] font-bold text-lg hover:text-[#01a298]"
                      href={menu.path}
                    >
                      {menu.label}
                    </Link>
                  </li>
                </>
              ))}
            </ul>
          </div>

          <div className="flex items-center justify-around gap-4">
            <Button className="hidden lg:flex p-2 w-36 bg-[#2c396a] text-white ">
              <BsHeartPulse
                className="mr-2 text-3xl cursor-pointer text-[#01a298]"
                size={24}
              />
              Resultados
            </Button>

            {!toggleMenu ? (
              <FaBars
                className="text-3xl cursor-pointer xl:hidden"
                size={24}
                onClick={() => setToggleMenu(!toggleMenu)}
              />
            ) : (
              <FaXmark
                className="text-3xl cursor-pointer md:hidden"
                onClick={() => setToggleMenu(!toggleMenu)}
                size={24}
              />
            )}
          </div>
        </nav>
      </header>
      */
  // return (
  //   <header className={`w-full ${stickyClass}`}>
  //     <nav className={`base-container `}>
  //       <div className={styles.navbar_logo}>
  //         <Image src="/logo.svg" alt="" width={200} height={200} />
  //       </div>
  //       {!isMobile && (
  //         <div className={styles.navbarLinks_container}>
  //           <a className="">Início</a>
  //           <a className="">Exames</a>
  //           <a className="">Sobre nós</a>
  //           <a className="">Teste</a>
  //           <a className="">Fale conosco</a>

  //           <a
  //             href="https://portaldoexame.com.br/labvidacb"
  //             target="_blank"
  //             className="primary_button"
  //             rel="noreferrer"
  //           >
  //             Resultados
  //           </a>
  //         </div>
  //       )}

  //       {isMobile && (
  //         <div onClick={handleOpenMenu}>
  //           {!openMenu && <MdMenu size={24} />}
  //           {openMenu && <MdClose size={24} />}
  //         </div>
  //       )}
  //     </nav>
  //   </header>
  // );
};
