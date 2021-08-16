import { tableD20 } from './dice.js';

const armor = {
  aspects: ['Ancestral', 'Studded', 'Nomad', 'Spiked', 'Bronze', 'Fur-lined', 'Copper', 'Silk-lined', 'Brass', 'Tarnished', 'Ancient', 'Fungal', 'Ceremonial', 'Gaudy', 'Corroded', 'Ornate', 'Ritual', 'Stone', 'Masterwork', 'Alien'],
  types: [
    {
      form: 'War-shirt',
      type: 'Heavy clothing. 2 AV.',
      av: 2,
      slots: 1
    },
    {
      form: 'Loincloth',
      type: 'Heavy clothing. 2 AV.',
      av: 2,
      slots: 1
    },
    {
      form: 'Veil',
      type: 'Heavy clothing. 2 AV.',
      av: 2,
      slots: 1
    },
    {
      form: 'Wrapping',
      type: 'Heavy clothing. 2 AV.',
      av: 2,
      slots: 1
    },
    {
      form: 'Cape',
      type: 'Heavy clothing. 2 AV.',
      av: 2,
      slots: 1
    },
    {
      form: 'Tunic',
      type: 'Light armor. 4 AV.',
      av: 4,
      slots: 2
    },
    {
      form: 'Half-scale',
      type: 'Light armor. 4 AV.',
      av: 4,
      slots: 2
    },
    {
      form: 'Jazerant',
      type: 'Light armor. 4 AV.',
      av: 4,
      slots: 2
    },
    {
      form: 'Half-chain',
      type: 'Light armor. 4 AV.',
      av: 4,
      slots: 2
    },
    {
      form: 'Robes',
      type: 'Light armor. 4 AV.',
      av: 4,
      slots: 2
    },
    {
      form: 'Lamellar',
      type: 'Heavy armor. 6 AV.',
      av: 6,
      slots: 3
    },
    {
      form: 'Coat of scales',
      type: 'Heavy armor. 6 AV.',
      av: 6,
      slots: 3
    },
    {
      form: 'Cuirass',
      type: 'Heavy armor. 6 AV.',
      av: 6,
      slots: 3
    },
    {
      form: 'Linothorax',
      type: 'Heavy armor. 6 AV.',
      av: 6,
      slots: 3
    },
    {
      form: 'Panoply',
      type: 'Heavy armor. 6 AV.',
      av: 6,
      slots: 3
    },
    {
      form: 'Blocker',
      type: 'Shield. +1 AV.',
      av: 1,
      slots: 1
    },
    {
      form: 'Parma',
      type: 'Shield. +1 AV.',
      av: 1,
      slots: 1
    },
    {
      form: 'Roundshield',
      type: 'Shield. +1 AV.',
      av: 1,
      slots: 1
    },
    {
      form: 'Tower',
      type: 'Shield. +1 AV.',
      av: 1,
      slots: 1
    },
    {
      form: 'Aspis',
      type: 'Shield. +1 AV.',
      av: 1,
      slots: 1
    },
  ]
};

export const randomArmor = () => {
  const a = tableD20(armor.types);
  return {
    description: tableD20(armor.aspects) + ' ' + a.form,
    type: a.type,
    av: a.av,
    slots: a.slots
  };
};
