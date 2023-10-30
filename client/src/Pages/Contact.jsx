import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { GiRotaryPhone } from 'react-icons/gi';
import { GrMail } from 'react-icons/gr';
import { FaMapMarkerAlt } from 'react-icons/fa';
import backgroundImage from '../Assets/map.PNG';
const Contact = () => {
  const [name, setName] = useState('');
  const [num, setNum] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const form = useRef();

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    minHeight: '280px',
    // Ensure the background covers the entire viewport height
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = 'service_eotfa4j';
    const templateId = 'template_90m6cu7';
    const publicKey = 'v3BbwgBVX0fD8imVp';

    const templateParams = {
      from_name: name,
      from_email: email,
      from_num: num,
      to_name: 'Jalil',
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("l'email a ete envoye avec succes", response);
        setName('');
        setNum('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div style={backgroundStyle}>
      <div className="w-full h-full mt-16 ml-16 ">
        <div className=" md:p-6 w-full min-h-screen justify-center items-center ">
          <div className="flex flex-col md:flex-row md:space-x-10 md:space-y-0 space-y-6 bg-red-800 w-full max-w-4xl p-6 rounded-xl shadow-lg text-white ">
            <div className="bg-white rounded-xl shadow-lg p-10 text-gray-600 md:w-full ">
              <form
                onSubmit={handleSubmit}
                className="emailForm flex flex-col space-y-4 "
                ref={form}
              >
                <input
                  type="text"
                  placeholder="Votre Nom et Prenom."
                  className=" w-full rounded-md px-4 py-2 outine-none focus:border-red-800 focus:ring-red-800 "
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Votre Numero de télephone."
                  className=" w-full rounded-md px-4 py-2 outine-none focus:border-red-800 focus:ring-red-800 "
                  value={num}
                  onChange={(e) => setNum(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Votre Email."
                  className=" w-full rounded-md px-4 py-2 outine-none focus:border-red-800 focus:ring-red-800"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <textarea
                  cols={30}
                  rows={10}
                  placeholder="Votre Message."
                  className=" w-full rounded-md px-4 py-2 outine-none focus:border-red-800 focus:ring-red-800"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <button
                  type="submit"
                  placeholder="Votre Message."
                  className=" inline-block self-end bg-red-800 text-white font-bold rounded-lg px-6 py-2 hover:bg-white hover:text-red-800 hover:border border-red-800 border"
                >
                  Envoyer
                </button>
              </form>
            </div>
            <div className="flex flex-col space-y-8 justify-evenly">
              <div>
                <h1 className="font-bold text-4xl md:tracking-wide font-Title">
                  Contactez-nous !
                </h1>
                <p className="pt-2 text-cyan-100 text-sm text-justify font-Text">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Exercitationem tempora eos id quia laudantium,
                </p>
              </div>
              <div className="flex flex-col space-y-6">
                <div className="inline-flex space-x-2 items-center font-Text">
                  <GiRotaryPhone className="text-white text-2xl" />
                  <span>05 24 49 55 55</span>
                </div>
                <div className="inline-flex space-x-2 items-center font-Text">
                  <GrMail className="text-white text-2xl" />
                  <span>lafontaine@yahoo.fr</span>
                </div>
                <div className="inline-flex space-x-2 items-center font-Text ">
                  <FaMapMarkerAlt className="text-white text-2xl" />
                  <span>123 lotissement Masmoudi targa, Marrakech 40000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
