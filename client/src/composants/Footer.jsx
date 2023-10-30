// import Coord from './Coord';
import { AiFillFacebook, AiFillInstagram } from 'react-icons/ai';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer class=" p-4 bg-red-400 text-white border-t-2 border-black shadow-xl">
      {/* <div className=" fixed bottom-20 right-20 ">
        <Coord />
      </div> */}
      <div class="  mx-auto w-full max-w-screen-xl p-2 lg:py-0 ">
        <hr class=" my-6 border-black sm:mx-auto  lg:my-4" />
        <div class="sm:flex sm:items-center sm:justify-between font-Nav ">
          <span class="text-l text-black  sm:text-center ">
            © 2023{' '}
            <a href="/" class="hover:underline">
              La Fontaine
            </a>{' '}
            All Rights Reserved.
          </span>
          <div class="flex mt-4 space-x-5 sm:justify-center sm:mt-0 text-white items-center">
            <div className="text-black font-Nav ">
              Suivez-nous sur nos réseaux sociaux :
            </div>
            <div className="text-3xl  hover:bg-red-800 cursor-pointer rounded-lg p-1">
              <Link
                to="https://www.facebook.com/EtablissementLaFontaineMarrakech/?locale=fr_FR"
                target="_blank"
              >
                <AiFillFacebook />
              </Link>
            </div>
            <div className="text-3xl hover:bg-red-800 cursor-pointer rounded-lg p-1">
              <Link to="#" target="_blank">
                <AiFillInstagram />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
