import { tableD2 } from './dice';

const archetypes = [
  {
    name: 'Sword',
    description: '<p>When you kill an enemy, you may immediately make another attack.</p><p>You can make a number of Free Attacks per combat round equal to your level.</p><p>You are skilled at tasks related to fighting.</p>',
    will: 5,
    stamina: 6,
    weapons: 2,
    words: 0
  },
  {
    name: 'Sorcerer',
    description: '<p>You can make one Free Attack per Round.</p><p>You begin play knowing three random Words of Creation, and learn new Words automatically.</p><p>You are skilled at tasks related to sorcery.</p>',
    will: 4,
    stamina: 6,
    weapons: 1,
    words: 3
  }
];

export const sword = archetypes[0];
export const sorcerer = archetypes[1];
export const randomArchetype = () => tableD2(archetypes);
