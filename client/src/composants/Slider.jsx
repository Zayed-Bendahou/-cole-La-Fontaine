import AwesomeSlider from 'react-awesome-slider';
import './Slider.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import Slider1 from '../Assets/Slider1.jpg';
import Slider2 from '../Assets/hopla.jpg';

export const Slider = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);

  return (
    <AutoplaySlider
      play={true}
      cancelOnInteraction={false} // should stop playing on user interaction
      interval={1500}
    >
      <div>
        <img
          className="w-full hover:opacity-80 content-center"
          src={Slider1}
          alt="acceuil"
        />
      </div>

      <div>
        <img
          className="w-full hover:opacity-80  justify-center flex  h-[580px]"
          src={Slider2}
          alt="biblio"
        />
      </div>
    </AutoplaySlider>
  );
};
