export const DearParents = () => {
  return (
    <div className=" w-full shadow-2xl rounded-lg ring-2 ring-slate-900/5 bg-white">
      <div className="w-full bg-red-600  rounded-t-lg">
        <h1 className=" font-Title text-4xl font-bold text-slate-50 p-2   ml-16">
          Chers Parents
        </h1>
      </div>
      <div className="m-6 space-y-8 p-6">
        <div className="bg-green-100 rounded-r-lg ring-1 ring-green-500 border-l-8 border-green-500 font-Text">
          <p className="p-4 text-lg font-montserrat text-green-400 ">
            <span className="font-bold">Un nouveau numéro WhatsApp</span> a été
            mis à votre disposition pour l’envoi des avis de virement relatifs
            aux frais de scolarité de vos enfants:
            <span className="font-bold"> 0654924400</span>
          </p>
        </div>
        <div className="rounded-r-lg ring-1 ring-red-500 border-l-8 border-red-500 font-Text">
          <ul className="p-4 text-xl font-montserrat text-red-500">
            <li>
              * RIB Campus ALIZDIHAR (Banque Populaire) :
              <span className="font-bold"> 145450212110409337000549</span>
            </li>
            <li>
              * RIB Campus ISSIL et Campus ENNAKHIL (Banque Populaire) :
              <span className="font-bold"> 145450212119614460000090</span>
            </li>
          </ul>
        </div>
        <div className="rounded-r-lg ring-1 ring-blue-500 border-l-8 border-blue-500 font-Text">
          <p className="p-4 text-lg font-montserrat text-blue-500">
            Afin de nous permettre d’affecter correctement vos virements,
            veuillez nous indiquer les renseignements suivants : Nom et prénom
            de l’élève, son niveau, le Campus (ISSIL, ENNAKHIL ou ALIZDIHAR) et
            le motif (mois payé(s), inscription…)
          </p>
        </div>
      </div>
    </div>
  );
};
