import school from '../Assets/School.png';
const Service = () => {
  return (
    <div>
      <div className="flex flex-row p-8 mx-4  shadow-2xl mt-8 bg-white ">
        <div className="">
          <div className=" border-l border-t border-b border-red-500 w-[760px] shadow-2xl text-justify p-4 font-Text rounded-l-lg ml-3 ">
            <p class="p-3 font-normal text-gray-700">
              La Fontaine est un établissement privé qui accueille des élèves de
              la maternelle jusqu'au lycée, offrant ainsi un parcours éducatif
              complet. Notre groupe scolaire s'engage résolument dans une
              approche pédagogique axée sur l'excellence, avec un accent
              particulier sur le développement du projet personnel de chaque
              élève.
            </p>

            <p class="p-3 font-normal text-gray-700 ">
              Au cœur de notre projet d'éducation se trouvent des valeurs
              essentielles visant à cultiver la personnalité des enfants, à
              éveiller leur amour pour la culture, et à favoriser leur réussite
              scolaire. Nous croyons fermement que l'éducation ne se limite pas
              à la transmission de connaissances académiques, mais qu'elle doit
              également contribuer au développement personnel de l’élève.
            </p>

            <p class="p-3 font-normal text-gray-700 ">
              Un aspect significatif de notre programme éducatif est le
              multilinguisme, avec un fort accent sur l’anglais, le français et
              l'arabe, notamment dans les domaines scientifiques. Nous croyons
              que la maîtrise de ces deux langues est essentielle pour préparer
              nos élèves à une insertion sans faille dans l'enseignement
              supérieur. Cette compétence linguistique renforcée tout au long du
              cursus scolaire offre à nos élèves une base solide pour aborder
              des domaines académiques plus avancés.
            </p>

            <p class="p-3 font-normal text-gray-700 ">
              À La Fontaine, notre engagement envers l'excellence éducative se
              reflète dans nos résultats exceptionnels, notamment au niveau des
              années du baccalauréat. En 2018, nous avons obtenu la première
              moyenne du baccalauréat au Maroc, une réalisation dont nous sommes
              particulièrement fiers. Cependant, notre quête de l'excellence ne
              s'arrête pas là, et au fil des années, nous avons maintenu un
              niveau de performance élevé, obtenant à deux reprises la meilleure
              moyenne régionale. Ces réalisations témoignent de l'efficacité de
              notre approche pédagogique et de l'engagement de notre personnel
              enseignant. Nous sommes déterminés à continuer à fournir un
              enseignement de qualité qui prépare nos élèves à réussir non
              seulement au baccalauréat mais aussi dans leurs futures études et
              carrières.
            </p>
          </div>
        </div>

        <div>
          <img
            className=" h-full rounded-r-lg border-r border-t border-b border-red-500 "
            src={school}
            alt="School"
          />
        </div>
      </div>
    </div>
  );
};

export default Service;
