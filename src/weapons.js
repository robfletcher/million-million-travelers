import { tableD20, tableD66 } from './dice.js';

const weapons = {
  aspects: ['Ritual', 'Nomad', 'Parasitic', 'Masterwork', 'Crude', 'Venomous', 'Copper', 'Meteoric', 'Obsidian', 'Silver', 'Brass', 'Fungal', 'Vorpal', 'Clockwork', 'Ancient', 'Corroded', 'Alien', 'Stone', 'Bronze', 'Ceremonial'],
  types: [
    {
      form: 'Knife',
      type: 'Small, One-handed, Close, explodes on a 6.'
    },
    {
      form: 'Punch-dagger',
      type: 'Small, One-handed, Close, explodes on a 6.'
    },
    {
      form: 'Cudgel',
      type: 'Small, One-handed, Close, explodes on a 6.'
    },
    {
      form: 'Kris',
      type: 'Small, One-handed, Close, explodes on a 6.'
    },
    {
      form: 'Sling',
      type: 'Small ranged, One-handed, Near, explodes on a 6.'
    },
    {
      form: 'Javelin',
      type: 'Small ranged, One-handed, Near, explodes on a 6.'
    },
    {
      form: 'Bow',
      type: 'Small ranged, One-handed, Near, explodes on a 6.'
    },
    {
      form: 'Khopesh',
      type: 'Medium. One-handed, Close, explodes on a 5+.'
    },
    {
      form: 'Duckbill ax',
      type: 'Medium. One-handed, Close, explodes on a 5+.'
    },
    {
      form: 'Mace',
      type: 'Medium. One-handed, Close, explodes on a 5+.'
    },
    {
      form: 'Battleax',
      type: 'Heavy. Two-handed, Close, explodes on a 4+.'
    },
    {
      form: 'Spear',
      type: 'Heavy. Two-handed, Close, explodes on a 4+.'
    },
    {
      form: 'Falx',
      type: 'Heavy. Two-handed, Close, explodes on a 4+.'
    },
    {
      form: 'Heavy crossbow',
      type: 'Heavy ranged. Two-handed, Far, explodes on a 5+.'
    },
    {
      form: 'Siege bow',
      type: 'Heavy ranged. Two-handed, Far, explodes on a 5+.'
    },
    {
      form: 'Horse bow',
      type: 'Heavy ranged. Two-handed, Far, explodes on a 5+.'
    },
    {
      form: 'Handlock',
      type: 'Light firearm. One-handed, Near, Firearm, explodes on a 4+.'
    },
    {
      form: 'Hand cannon',
      type: 'Light firearm. One-handed, Near, Firearm, explodes on a 4+.'
    },
    {
      form: 'Matchlock',
      type: 'Heavy firearm. Two-handed, Far, Firearm, explodes on a 3+.'
    },
    {
      form: 'Hand-rocket',
      type: 'Heavy firearm. Two-handed, Far, Firearm, explodes on a 3+.'
    },
  ]
};

const armor = {
  aspects: ['Ancestral', 'Studded', 'Nomad', 'Spiked', 'Bronze', 'Fur-lined', 'Copper', 'Silk-lined', 'Brass', 'Tarnished', 'Ancient', 'Fungal', 'Ceremonial', 'Gaudy', 'Corroded', 'Ornate', 'Ritual', 'Stone', 'Masterwork', 'Alien'],
  types: [
    {
      form: 'War-shirt',
      type: 'Heavy clothing. 2 AV.'
    },
    {
      form: 'Loincloth',
      type: 'Heavy clothing. 2 AV.'
    },
    {
      form: 'Veil',
      type: 'Heavy clothing. 2 AV.'
    },
    {
      form: 'Wrapping',
      type: 'Heavy clothing. 2 AV.'
    },
    {
      form: 'Cape',
      type: 'Heavy clothing. 2 AV.'
    },
    {
      form: 'Tunic',
      type: 'Light armor. 4 AV.'
    },
    {
      form: 'Half-scale',
      type: 'Light armor. 4 AV.'
    },
    {
      form: 'Jazerant',
      type: 'Light armor. 4 AV.'
    },
    {
      form: 'Half-chain',
      type: 'Light armor. 4 AV.'
    },
    {
      form: 'Robes',
      type: 'Light armor. 4 AV.'
    },
    {
      form: 'Lamellar',
      type: 'Heavy armor. 6 AV.'
    },
    {
      form: 'Coat of scales',
      type: 'Heavy armor. 6 AV.'
    },
    {
      form: 'Cuirass',
      type: 'Heavy armor. 6 AV.'
    },
    {
      form: 'Linothorax',
      type: 'Heavy armor. 6 AV.'
    },
    {
      form: 'Panoply',
      type: 'Heavy armor. 6 AV.'
    },
    {
      form: 'Blocker',
      type: 'Shield. +1 AV.'
    },
    {
      form: 'Parma',
      type: 'Shield. +1 AV.'
    },
    {
      form: 'Roundshield',
      type: 'Shield. +1 AV.'
    },
    {
      form: 'Tower',
      type: 'Shield. +1 AV.'
    },
    {
      form: 'Aspis',
      type: 'Shield. +1 AV.'
    },
  ]
};

export const randomWeapon = () => {
  const weapon = tableD20(weapons.types);
  return {
    description: tableD20(weapons.aspects) + ' ' + weapon.form,
    type: weapon.type
  };
};

export const randomArmor = () => {
  const a = tableD20(armor.types);
  return {
    description: tableD20(armor.aspects) + ' ' + a.form,
    type: a.type
  };
};
