import { tableD66 } from './dice.js';

const belongings = [
  [
    {
      description: 'Jug of honeyed wine.',
      slots: 1
    },
    {
      description: 'Stygian lotus.',
      slots: 1
    },
    {
      description: 'Hempen rope (120’).',
      slots: 1
    },
    {
      description: 'Blasphemous scroll.',
      slots: 1
    },
    {
      description: 'Blackened bronze cooking-pot.',
      slots: 1
    },
    {
      description: 'Bronze file.',
      slots: 1
    }
  ],
  [
    {
      description: 'Ashwood torch (3).',
      slots: 1
    },
    {
      description: 'Trained corvid.',
      slots: 1
    },
    {
      description: 'Grease (3 uses).',
      slots: 1
    },
    {
      description: 'Small, vicious dog.',
      slots: 1
    },
    {
      description: 'Pack donkey (pack animal)',
      slots: 0
    },
    {
      description: 'Jar of fireflies (2d6).',
      slots: 1
    }
  ],
  [
    {
      description: 'Linen tent, for 1 person.',
      slots: 1
    },
    {
      description: 'Silver nails (d6).',
      slots: 1
    },
    {
      description: 'Small votive candles (6).',
      slots: 1
    },
    {
      description: 'Vial of troll blood (1 use).',
      slots: 1
    },
    {
      description: 'White chalk (6 uses).',
      slots: 1
    },
    {
      description: 'Necklace of ears.',
      slots: 1
    }
  ],
  [
    {
      description: 'Tin shovel.',
      slots: 1
    },
    {
      description: '‘Trained’ monkeys (d6).',
      slots: 1
    },
    {
      description: 'Soap (6 uses).',
      slots: 1
    },
    {
      description: 'Spool of yarn (24’).',
      slots: 1
    },
    {
      description: 'Cloak of unspecified leather.',
      slots: 1
    },
    {
      description: 'Tin of khat (6 uses).',
      slots: 1
    }
  ],
  [
    {
      description: 'Sickly horse (pack animal)',
      slots: 0
    },
    {
      description: 'Magnesium strip.',
      slots: 1
    },
    {
      description: 'Polished brass mirror.',
      slots: 1
    },
    {
      description: 'Cage of rats (d6).',
      slots: 1
    },
    {
      description: 'Thick furs, brilliant orange.',
      slots: 1
    },
    {
      description: 'Ancestor’s ashes.',
      slots: 1
    }
  ],
  [
    {
      description: 'Bronze chain (12’).',
      slots: 1
    },
    {
      description: 'Numbing herbs (6 uses).',
      slots: 1
    },
    {
      description: 'Pot of tar (3 uses).',
      slots: 1
    },
    {
      description: 'Porcelain death-mask.',
      slots: 1
    },
    {
      description: 'Fishing net, twine.',
      slots: 1
    },
    {
      description: 'Mummified paw.',
      slots: 1
    }
  ]
];

export const randomItem = () => tableD66(belongings);
