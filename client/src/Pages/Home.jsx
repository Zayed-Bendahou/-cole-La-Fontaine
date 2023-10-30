import { Hero, AboutUs, Slider, Grades, DearParents } from '../composants';

const Home = () => {
  return (
    <main className="w-[1280px] mx-auto bg-slate-50 mt-2">
      <section className="">
        <Slider />
      </section>
      <section className="">
        <Hero />
      </section>
      <section className="sm:px-16 px-8 sm:py-24 py-12">
        <AboutUs />
      </section>
      <section className="sm:px-16 px-8 sm:py-24 py-12">
        <Grades />
      </section>
      <section className="sm:px-16 px-8 sm:py-32 w-full">
        <DearParents />
      </section>
    </main>
  );
};

export default Home;
