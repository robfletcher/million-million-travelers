import { tableD20 } from './dice.js';

const weapons = {
  aspects: ['Ritual', 'Nomad', 'Parasitic', 'Masterwork', 'Crude', 'Venomous', 'Copper', 'Meteoric', 'Obsidian', 'Silver', 'Brass', 'Fungal', 'Vorpal', 'Clockwork', 'Ancient', 'Corroded', 'Alien', 'Stone', 'Bronze', 'Ceremonial'],
  types: [
    {
      form: 'Knife',
      type: 'Small, One-handed, Close, explodes on a 6.',
      slots: 1
    },
    {
      form: 'Punch-dagger',
      type: 'Small, One-handed, Close, explodes on a 6.',
      slots: 1
    },
    {
      form: 'Cudgel',
      type: 'Small, One-handed, Close, explodes on a 6.',
      slots: 1
    },
    {
      form: 'Kris',
      type: 'Small, One-handed, Close, explodes on a 6.',
      slots: 1
    },
    {
      form: 'Sling',
      type: 'Small ranged, One-handed, Near, explodes on a 6.',
      slots: 1
    },
    {
      form: 'Javelin',
      type: 'Small ranged, One-handed, Near, explodes on a 6.',
      slots: 1
    },
    {
      form: 'Bow',
      type: 'Small ranged, One-handed, Near, explodes on a 6.',
      slots: 1
    },
    {
      form: 'Khopesh',
      type: 'Medium. One-handed, Close, explodes on a 5+.',
      slots: 2
    },
    {
      form: 'Duckbill ax',
      type: 'Medium. One-handed, Close, explodes on a 5+.',
      slots: 2
    },
    {
      form: 'Mace',
      type: 'Medium. One-handed, Close, explodes on a 5+.',
      slots: 2
    },
    {
      form: 'Battleax',
      type: 'Heavy. Two-handed, Close, explodes on a 4+.',
      slots: 3
    },
    {
      form: 'Spear',
      type: 'Heavy. Two-handed, Close, explodes on a 4+.',
      slots: 3
    },
    {
      form: 'Falx',
      type: 'Heavy. Two-handed, Close, explodes on a 4+.',
      slots: 3
    },
    {
      form: 'Heavy crossbow',
      type: 'Heavy ranged. Two-handed, Far, explodes on a 5+.',
      slots: 3
    },
    {
      form: 'Siege bow',
      type: 'Heavy ranged. Two-handed, Far, explodes on a 5+.',
      slots: 3
    },
    {
      form: 'Horse bow',
      type: 'Heavy ranged. Two-handed, Far, explodes on a 5+.',
      slots: 3
    },
    {
      form: 'Handlock',
      type: 'Light firearm. One-handed, Near, Firearm, explodes on a 4+.',
      slots: 1
    },
    {
      form: 'Hand cannon',
      type: 'Light firearm. One-handed, Near, Firearm, explodes on a 4+.',
      slots: 1
    },
    {
      form: 'Matchlock',
      type: 'Heavy firearm. Two-handed, Far, Firearm, explodes on a 3+.',
      slots: 3
    },
    {
      form: 'Hand-rocket',
      type: 'Heavy firearm. Two-handed, Far, Firearm, explodes on a 3+.',
      slots: 3
    },
  ]
};

export const randomWeapon = () => {
  const weapon = tableD20(weapons.types);
  return {
    description: tableD20(weapons.aspects) + ' ' + weapon.form,
    type: weapon.type,
    slots: weapon.slots
  };
};
