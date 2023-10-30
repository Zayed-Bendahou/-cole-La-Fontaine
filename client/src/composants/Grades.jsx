import { fournitures } from '../composants/Pdfs';

export const Grades = () => {
  return (
    <section className="bg-white max-container max-sm:mt-12 rounded-xl shadow-2xl ring-2 ring-slate-900/5 ">
      <div className=" flex flex-col gap-5 text-center">
        <h2 className="pt-8 text-4xl font-palanquin font-bold">
          Fourniture Scolaire 2023-2024
        </h2>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols2 grid-cols-1 sm:gap-4 gap-14 m-4 ">
        {fournitures.map((a) => (
          <div className=" relative overflow-hidden justify-between flex flex-1 flex-col w-full max-sm:w-full">
            <img src={a.imgURL} alt="test" />
            <div className="absolute h-full w-full bg-red-400/20 flex flex-col justify-center m-auto -bottom-10 hover:bottom-0 opacity-0 hover:opacity-100 transition-all duration-500">
              {a.grade.map((sub) => (
                <a
                  href={sub.pdf}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-red-800 text-xl text-white font-bold font-palanquin text-center m-2 rounded-lg ring-4 ring-white"
                >
                  {sub.niveau}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols2 grid-cols-1 sm:gap-4 gap-14">
        {fournitures.map((a) => (
          <div>
            <h3 className="p-4 flex text-2xl justify-center font-semibold font-palanquin">
              {a.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};
