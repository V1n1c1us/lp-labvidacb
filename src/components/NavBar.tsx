import Image from "next/image";
import { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";

export const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <nav className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
      <div className="w-full">
        <Image src="/logo.svg" alt="" width={200} height={200} />
      </div>

      <div className="hidden md:flex w-full gap-10 justify-end text-base text-secondary  text-center items-center">
        <a className="font-bold hover:text-primary duration-200 cursor-pointer">
          Início
        </a>
        <a className="font-bold hover:text-primary duration-200 cursor-pointer">
          Exames
        </a>
        <a className="font-bold hover:text-primary duration-200 cursor-pointer">
          Sobre nós
        </a>
        <a className="font-bold hover:text-primary duration-200 cursor-pointer">
          Teste
        </a>
        <a className="font-bold hover:text-primary duration-200 cursor-pointer">
          Fale conosco
        </a>
      </div>
      <div onClick={handleOpenMenu} className="block md:hidden">
        {!openMenu && <MdMenu size={24} />}
        {openMenu && <MdClose size={24} />}
      </div>
    </nav>
  );
};
