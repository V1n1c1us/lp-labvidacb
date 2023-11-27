import Image from "next/image";
import { Container } from "./Container";
import { Button } from "../../@/components/ui/button";

export const Hero = () => {
  return (
    <section className="flex w-full h-[64.5vh]">
      <div className="base-container">
        <div className="flex-1 max-w-[500px]">
          <h1 className="text-7xl font-bold text-secondary">LabVida</h1>
          <span>Qualidade e excelencia</span>

          <p className="text-xl mt-3 mb-8 max-w-[408px] text-black">
            At Collax we specialize in designing, building, shipping and scaling
            beautiful, usable products with blazing-fast efficiency
          </p>

          <Button
            type="button"
            className="bg-secondary text-white p-4 rounded-md hover:bg-primary duration-400"
          >
            Resultado dos exames
          </Button>
        </div>

        <Image
          src="/banner-img-4.png"
          alt=""
          width="465"
          height="500"
          className="mr-[41px]"
        />
      </div>
    </section>
    // <section className="w-full h-[70vh] border bg-gray-400">
    //   {/* <div className="flex justify-between h-24 max-w-[1240px] mx-auto"> */}
    //   <div className="flex-1 max-w-[1240px] mx-auto">
    //     <h1 className="text-7xl font-bold">Labvida</h1>
    //     <span>Laboratório de Análises Clínicas</span>

    //     <p className="text-xl mb-8">
    //       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, ad
    //       velit nisi placeat minima fugit
    //     </p>
    //   </div>
    // </section>
  );
};
