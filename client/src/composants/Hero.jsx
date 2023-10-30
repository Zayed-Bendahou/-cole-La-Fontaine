import vac from '../Assets/vac.pdf';
import { AiOutlineDownload } from 'react-icons/ai';
export const Hero = () => {
  return (
    <div className="flex lg:flex-rows-2 md:flex-cols-3 sm:flex-cols flex-cols-1 sm:gap-4 justify-center">
      <div className="py-12 flex flex-row  bg-red-400 rounded-lg shadow-2xl hover:bg-red-700">
        <h1 className="text-white font-montserrat text-2xl font-bold pl-6 underline">
          Charte Scolaire (2023-2024)
        </h1>
        <a
          class="bg-red-800 text-white font-bold py-2 px-4 rounded inline-flex items-center mx-6"
          href={vac}
          target="_blank"
          rel="noreferrer"
        >
          Telecharger
          <AiOutlineDownload className="text-2xl ml-2" />
        </a>
      </div>
      <div className="py-12 flex flex-row  bg-red-400 rounded-lg shadow-2xl hover:bg-red-700">
        <h1 className="text-white font-montserrat text-2xl font-bold pl-4 underline">
          Vacance Scolaire (2023-2024)
        </h1>
        <a
          href={vac}
          target="_blank"
          rel="noreferrer"
          class="bg-red-800 text-white font-bold py-2 px-4 rounded inline-flex items-center mx-6"
        >
          Telecharger
          <AiOutlineDownload className="text-2xl ml-2" />
        </a>
      </div>
    </div>
  );
};
