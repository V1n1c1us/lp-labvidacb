import { Card } from "../../@/components/ui/card";

export const ServicesSection = () => {
  return (
    <section className="mt-32 services relative md:h-[500px] bg-[#e9f8f8]">
      <div className="base-container flex-col">
        <div className="flex flex-col items-center mt-16">
          <h2>LABORATORY SERVICES</h2>
          <h2 className="text-3xl text-center mt-2">
            Reliable & High-Quality <br />
            Laboratory Service
          </h2>
        </div>

        <div className="flex flex-col items-center gap-8 mt-14 md:flex-row">
          <div className="flex flex-col justify-around bg-white p-6 w-[250px] h-[204px] shadow-lg shadow-[#edf2f2] rounded-2xl">
            <img src="/frasco.png" alt="" width={60} className="mb-3" />
            <h4 className="mb-3 font-bold">Análises clnínicas</h4>
            <p className="">Excepteur sint ocecat pro dent sunt in culpa.</p>
          </div>
          <div className="flex flex-col justify-around bg-white p-6 w-[250px] h-[204px] shadow-lg shadow-[#edf2f2] rounded-2xl">
            <div>
              <img src="/frasco.png" alt="" width={60} className="mb-3" />
              <h4 className="mb-3 font-bold">Exames toxicológicos</h4>
              <p className="">CNH</p>
            </div>
          </div>
          <div className="flex flex-col justify-around bg-white p-6 w-[250px] h-[204px] shadow-lg shadow-[#edf2f2] rounded-2xl">
            <img src="/frasco.png" alt="" width={60} className="mb-3" />
            <h4 className="mb-3 font-bold">Sexagem fetal</h4>
            <p className="">Excepteur sint ocecat pro dent sunt in culpa.</p>
          </div>
          <div className="flex flex-col justify-around bg-white p-6 w-[250px] h-[204px] shadow-lg shadow-[#edf2f2] rounded-2xl">
            <img src="/frasco.png" alt="" width={60} className="mb-3" />
            <h4 className="mb-3 font-bold">Exame de DNA</h4>
            <p className="">Excepteur sint ocecat pro dent sunt in culpa.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
