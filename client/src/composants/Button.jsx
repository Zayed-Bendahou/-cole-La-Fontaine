import { CgProfile } from 'react-icons/cg';

const Button = () => {
  return (
    <div>
      <button className=" flex  gap-2  p-3 rounded-full bg-white text-red-800 active:bg-red-600 active:text-white active:ring-2 ring-white shadow-xl ">
        <div className="font-Title2 text-xl">Se connecter </div>
        <div className="text-3xl ">
          <CgProfile />
        </div>
      </button>
    </div>
  );
};

export default Button;
