import { v4 as uuidv4 } from 'uuid';

const reviews = [
  {
    author: 'James Noori',
    comment:
      'Riktigt trevliga, de håller vad de säger och krånglar inte alls! Väldigt nöjd att ha sålt min bil till dem!',
    id: uuidv4(),
  },
  {
    author: 'Enepsigoss',
    comment:
      'Trevlig personal och flexibla när de kommer till att låna. Köpte en bil där och fick el-spark med på köpet. Det verkar som de har koll på de mesta när de kommer till bilarna de säljer',
    id: uuidv4(),
  },
  {
    author: 'Theres Pavval',
    comment:
      'Riktigt bra service har köpt två bilar och sålt en hos dem. Seriösa, ärliga och står för vad dom lovar! Rekommenderar varmt!!',
    id: uuidv4(),
  },
  {
    author: 'Gustav Frisell',
    comment:
      'Mycket trevlig upplevelse att sälja bilen till killarna på AM Bilar! Bra tillgänglighet, sakligt och bra bud på min bil. /Gustav',
    id: uuidv4(),
  },
  {
    author: 'Jahn S',
    comment: 'Mycket nöjd med affären hos de, hjälpte mig efteråt också fast garantin hade gått ut. Rekommenderar.',
    id: uuidv4(),
  },
];

export default reviews;
