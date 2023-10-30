import logo from '../Assets/logoFontaine.png';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Dropdown } from 'flowbite-react';
import { AiOutlineHome } from 'react-icons/ai';
import Button from './Button';

const Header = () => {
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -120;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  };

  return (
    <div>
      <nav class="bg-red-800 ring-1 ring-black shadow-2xl  h-24  font-Title2 fixed w-full top-0 z-50 ">
        <div class="max-w-screen flex flex-wrap items-center justify-between  p-4 mx-10 ml-52">
          <Link to="/" class="flex items-center">
            <img
              src={logo}
              class="h-48 absolute top-0 left-20  "
              alt="La fontaine logo"
            />
          </Link>

          <div class="hidden w-full md:block md:w-auto " id="navbar-dropdown ">
            <ul class="flex flex-col text-2xl p-4 md:p-4 mt-4  md:flex-row md:space-x-12 md:mt-0 md:border-0  ">
              <li>
                <Link
                  to="/"
                  class=" py-2 pl-3 pr-4  rounded md:bg-transparent  md:p-0 underline-offset-8 hover:underline text-white flex gap-2 items-center focus:underline"
                >
                  <AiOutlineHome /> Accueil
                </Link>
              </li>

              <li>
                <Link
                  to="/Service"
                  class="block py-2 pl-3 pr-4  md:border-0  md:p-0 underline-offset-8 hover:underline text-white focus:underline"
                >
                  Présentation de l'école
                </Link>
              </li>
              <li>
                <Link
                  to="/Contact"
                  class="block py-2 pl-3 pr-4  rounded   md:border-0  md:p-0 underline-offset-8 hover:underline text-white focus:underline "
                >
                  Contactez-Nous
                </Link>
              </li>

              <li className="underline-offset-8 hover:underline text-white focus:underline">
                <Dropdown
                  className="bg-red-800 ring-1 ring-white z-20"
                  label="Cycles d'éducation"
                  inline
                >
                  <Dropdown.Item
                    className="text-xl text-white hover:text-red-600 "
                    as={HashLink}
                    smooth={true}
                    scroll={scrollWithOffset}
                    to="/Cycle#1"
                  >
                    Maternelle
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="text-xl text-white hover:text-red-600"
                    as={HashLink}
                    scroll={scrollWithOffset}
                    smooth
                    to="/Cycle#2"
                  >
                    Primaire
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="text-xl text-white hover:text-red-600"
                    as={HashLink}
                    smooth
                    scroll={scrollWithOffset}
                    to="/Cycle#3"
                  >
                    Collège
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="text-xl text-white hover:text-red-600"
                    as={HashLink}
                    smooth
                    // scrollOffsset={20}
                    to="/Cycle#4"
                  >
                    Lycée
                  </Dropdown.Item>
                </Dropdown>
              </li>
            </ul>
          </div>
          <div>
            <Button />
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Header;
