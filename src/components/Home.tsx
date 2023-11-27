import { Button } from "../../@/components/ui/button";
import Image from "next/image";

export const Home = () => {
  return (
    <>
      <div className="flex justify-between items-center w-[92%] mx-auto">
        <div className="md:grid grid-cols-2 w-full mt-14">
          <div className="border flex flex-col justify-center">
            <h1 className="text-[4.5rem] mb-1">Para você...</h1>
            <p className="font-semibold">
              Um novo conceito em diagnóstico laboratorial. <br />
              <strong>Qualidade, segurança e agilidade</strong> no resultado dos
              seus exames.
            </p>
            <div>
              <Button>Teste</Button>
              <Button>Teste</Button>
            </div>
          </div>

          <div className="border flex justify-end">
            <Image
              src="/banner-img-4.png"
              alt=""
              width="454"
              height="500"
              className="mr-[41px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};
