import Image from "next/image";

export const Header = () => (
  <header className="flex h-20 bg-orange-500">
    <div className="m-3 w-[100%]">
      <div className="flex items-center justify-between ">
        <Image src="/logo.svg" alt="" width={200} height={200} />

        <ul className="flex gap-10">
          <li>Home</li>
          <li>Teste</li>
          <li>Teste</li>
          <li>Contato</li>
        </ul>
      </div>
    </div>
  </header>
);
