import Primaire from '../Assets/primaire.JPG';
import Maternelle from '../Assets/maternelle.JPG';
import College from '../Assets/college.png';
import lycee from '../Assets/lycee.JPG';

const Cycle = () => {
  return (
    <div className="w-[1400px] p-24  -mt-3 flex flex-col gap-32 items-center mx-auto bg-white">
      <section
        id="1"
        className="flex flex-col ring-1 ring-red-800 shadow-2xl rounded-lg  w-[1280px] items-center  "
      >
        <div className="font-semibold text-2xl font-Nav bg-red-800 w-full rounded-t-lg cursor-pointer ">
          <h2 className="p-2 text-white ml-6">Maternelle</h2>
        </div>

        <div className="flex flex-row font-Text text-xl gap-4 p-4 items-center ">
          <p className="text-justify leading-10">
            Le cycle de la maternelle à La Fontaine est une période cruciale de
            découverte et d'apprentissage pour nos tout-petits. Notre équipe
            pédagogique dévouée crée un environnement chaleureux et stimulant où
            les enfants développent leurs compétences sociales, émotionnelles et
            cognitives. Nous mettons l'accent sur l'épanouissement personnel,
            l'acquisition du langage, et les premiers pas vers la compréhension
            des mathématiques et des sciences, tout en encourageant la
            créativité et la curiosité.
          </p>
          <img
            src={Maternelle}
            alt="Maternelle"
            className="h-[420px] rounded-lg"
          />
        </div>
      </section>
      <section
        id="2"
        className="flex flex-col ring-1 ring-red-800 shadow-2xl rounded-lg  w-[1280px] items-center"
      >
        <div className="font-semibold text-2xl font-Nav bg-red-800 w-full rounded-t-lg cursor-pointer">
          <h2 className="p-2 text-white ml-6">Primaire</h2>
        </div>
        <div className="flex flex-row font-Text text-xl gap-4 p-4 items-center ">
          <img src={Primaire} alt="Primaire" className="h-[420px] rounded-lg" />
          <p className="text-justify leading-10">
            Au cycle primaire, nous continuons à cultiver la curiosité naturelle
            des enfants et à renforcer leurs bases académiques. Les élèves sont
            encouragés à explorer un large éventail de matières, de l'art à la
            littérature en passant par les sciences. Notre programme éducatif
            encourage l'autonomie et la responsabilité, préparant ainsi les
            élèves à des apprentissages plus avancés. Nous valorisons également
            le développement de compétences sociales et émotionnelles pour
            favoriser un environnement d'apprentissage épanouissant.
          </p>
        </div>
      </section>
      <section
        id="3"
        className="flex flex-col ring-1 ring-red-800 shadow-2xl rounded-lg  w-[1280px] items-center"
      >
        <div className="font-semibold text-2xl font-Nav bg-red-800 w-full rounded-t-lg cursor-pointer">
          <h2 className="p-2 text-white ml-6">Collège</h2>
        </div>
        <div className="flex flex-row font-Text text-xl gap-4 p-4 items-center ">
          <p className="text-justify leading-10">
            Au collège, nos élèves commencent à se préparer de manière plus
            approfondie pour les futurs défis académiques. Nous offrons un
            programme structuré qui couvre un large éventail de matières, tout
            en encourageant la pensée critique et la résolution de problèmes.
            Les élèves sont encouragés à explorer leurs intérêts académiques et
            à développer leurs compétences en préparation pour le lycée. Nous
            maintenons une atmosphère d'apprentissage positive où les valeurs
            telles que la collaboration, le civisme, le respect et la
            responsabilité sont mises en avant.
          </p>
          <img src={College} alt="collège" className="h-[420px] rounded-lg" />
        </div>
      </section>
      <section
        id="4"
        className="flex flex-col ring-1 rounded-lg ring-red-800 shadow-2xl  w-[1280px] items-center"
      >
        <div className="font-semibold text-2xl font-Nav bg-red-800 w-full rounded-t-lg cursor-pointer">
          <h2 className="p-2 text-white ml-6">Lycée</h2>
        </div>
        <div className="flex flex-row font-Text text-xl gap-4 p-4 items-center">
          <img src={lycee} alt="Lycée" className="h-[420px] rounded-lg" />
          <p className="text-justify leading-8">
            Au lycée, nos élèves atteignent le sommet de leur parcours scolaire
            à La Fontaine. Notre programme prépare de manière rigoureuse les
            étudiants pour les examens du baccalauréat, avec un accent
            particulier sur l'excellence académique. Nous offrons un large
            éventail de matières et de cours optionnels pour répondre aux
            intérêts et aux aspirations de chaque élève. Notre objectif est de
            former des individus responsables, bien préparés pour l'enseignement
            supérieur, et dotés des compétences nécessaires pour réussir dans un
            monde en constante évolution. En tant que première étape cruciale
            vers l'avenir, le lycée à La Fontaine offre des opportunités uniques
            pour nos élèves de réaliser leur potentiel et atteindre
            l’excellence.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Cycle;
