import fourniture from '../Assets/fourniture.png';
import AC3 from '../Assets/3AC.pdf';
import AC1 from '../Assets/1AC.pdf';
import AC2 from '../Assets/2AC.pdf';
import CE1 from '../Assets/CE1.pdf';
import CE2 from '../Assets/CE2.pdf';
import CE3 from '../Assets/CE3.pdf';
import CE4 from '../Assets/CE4.pdf';
import CE5 from '../Assets/CE5.pdf';
import CE6 from '../Assets/CE6.pdf';
import TC from '../Assets/TC.pdf';
import BAC1 from '../Assets/BAC1.pdf';
import BAC2 from '../Assets/BAC2.pdf';

export const fournitures = [
  {
    imgURL: fourniture,
    name: 'Maternelle',
    grade: [
      { niveau: 'Toute Petite section', pdf: CE6 },
      { niveau: 'Petite Section', pdf: CE4 },
      { niveau: 'Moyenne Section', pdf: CE2 },
      { niveau: 'Grande Section', pdf: CE1 },
    ],
  },
  {
    imgURL: fourniture,
    name: 'Primaire',
    grade: [
      { niveau: 'CE1', pdf: CE1 },
      { niveau: 'CE2', pdf: CE2 },
      { niveau: 'CE3', pdf: CE3 },
      { niveau: 'CE4', pdf: CE4 },
      { niveau: 'CE5', pdf: CE5 },
      { niveau: 'CE6', pdf: CE6 },
    ],
  },
  {
    imgURL: fourniture,
    name: 'College',
    grade: [
      { niveau: '1ere Annee Colleege', pdf: AC1 },
      { niveau: '2eme Annee Collge', pdf: AC2 },
      { niveau: '3eme Annee College', pdf: AC3 },
    ],
  },
  {
    imgURL: fourniture,
    name: 'Lycee',
    grade: [
      { niveau: 'TC', pdf: TC },
      { niveau: '1ere BAC', pdf: BAC1 },
      { niveau: '2eme BAC', pdf: BAC2 },
    ],
  },
];
