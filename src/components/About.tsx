import { Container } from "./Container";

export const About = () => (
  <>
    <section className="base-container mt-24">
      <div className="flex flex-col justify-center h-[600px]">
        <div>
          <h2>Teste</h2>
          <h2 className="text-3xl mt-2">
            Reliable Journal of <br />
            Medical Health Research.
          </h2>
        </div>
        <div className="mt-8">
          <p className="mt-3">
            Excepteur sint occaecat cupidatat non proident sunt culpa qui
            officia deserunt mollit anim id est laborum. sed spiciatis unde
            omnis natus error Inventore.
          </p>

          <p className="text-slate-400">
            quasi architebeat vitae dicta sunt explicabo nemo enim ipsam
            voluptatem quia voluptassit.
          </p>
        </div>
      </div>
      <img src="/woman.png" alt="" className="w-[50%]" />
    </section>
  </>
);
