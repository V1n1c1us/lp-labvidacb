import Image from "next/image";
import { FaInstagram } from "react-icons/fa6";
import {
  MdOutlineEmail,
  MdOutlineWhatsapp,
  MdOutlineFacebook,
  MdLocationOn,
  MdPhone,
} from "react-icons/md";

export const Footer = () => {
  return (
    <>
      <div className="">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220">
          <path
            fill="#e9f8f8"
            fillOpacity="1"
            d="M0,32L80,48C160,64,320,96,480,122.7C640,149,800,171,960,165.3C1120,160,1280,128,1360,112L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
      <footer className="bg-[#e9f8f8]">
        <div className="base-container">
          <div className="flex flex-col">
            <figure className="mb-3">
              <Image src="/logo.svg" alt="" width={150} height={120} />
            </figure>

            {/* <nav className="flex gap-6">
              <a href="" title="Insagram">
                <FaInstagram size={24} color="#2c396a" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61550062811718&locale=pt_BR"
                target="_blank"
                rel="noreferrer"
              >
                <MdOutlineFacebook size={24} color="#2c396a" />
              </a>
              <a
                href="https://wa.me/5551993315081"
                target="_blank"
                rel="noreferrer"
              >
                <MdOutlineWhatsapp size={24} color="#2c396a" />
              </a>
            </nav> */}

            {/* <p>LabVida © {new Date().getFullYear()}</p> */}
          </div>
          <div className="flex flex-col">
            <h2 className="text-lg">Central de Atendimento</h2>

            <p>
              Para tirar suas dúvidas ou marcar seus exames, clique no botão
            </p>

            <a
              href="https://wa.me/5551993315081"
              target="_blank"
              rel="noreferrer"
              className="bg-slate-300 p-2 border"
            >
              <MdOutlineWhatsapp size={24} color="#2c396a" />
            </a>
          </div>
          <div className="flex flex-col">
            <div className="flex gap-2">
              <MdLocationOn size={24} color="#2c396a" />
              <span>Rua Oscar Lamb, 317</span>
            </div>
            <div className="flex gap-2">
              <MdPhone size={24} color="#2c396a" />
              <span>(51) 9 99331-5081</span>
            </div>
            <div className="flex gap-2">
              <MdOutlineEmail size={24} color="#2c396a" />
              <span>(51) 9 99331-5081</span>
            </div>
          </div>
        </div>

        {/* <div className="relative pt-[140px] pb-[75px] border-b">
          <div>
            <div className="absolute left-[175px] top-[35px] w-[93px] h-[93px] bg-no-repeat z-[1] bg-[url('http://azim.commonsupport.com/Laborex/assets/images/shape/shape-14.png')]"></div>
            <div className="absolute right-[90px] top-[125px] w-[93px] h-[93px] bg-no-repeat z-[1] bg-[url('http://azim.commonsupport.com/Laborex/assets/images/shape/shape-14.png')]"></div>
            <div className="absolute left-[50px] top-[140px] w-[195px] h-[195px] rounded-[50%]"></div>
            <div className="absolute right-[115px] top-[70px] w-[195px] h-[195px] rounded-[50%]"></div>
          </div>
          <div className="base-container">
            <div className="relative mt-[-18px]">
              <div className="relative mb-[33px]">
                <Image src="/logo.svg" alt="" width={120} height={120} />
              </div>
              <div>
                <p>Nostrud exertation ullamco labor aliquip commodo duis.</p>
                <ul>
                  <li>asd</li>
                  <li>asd</li>
                  <li>asd</li>
                </ul>
              </div>
            </div>
          </div>
        </div> */}

        <div className="relative w-full p-3 text-center border-t mt-5">
          <p>LabVida © {new Date().getFullYear()}</p>
        </div>
      </footer>
    </>
  );
};
