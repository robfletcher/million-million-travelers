import { roll1d2, tableD66 } from "./dice";

const forms = [
  ['Armor', 'Blade', 'Blood', 'Bone', 'Bronze', 'Clay'],
  ['Crystal', 'Dream', 'Earth', 'Fire', 'Flesh', 'Flower'],
  ['Glass', 'Gold', 'Hand', 'Ice', 'Light', 'Mist'],
  ['Moss', 'Root', 'Rust', 'Salt', 'Sand', 'Shadow'],
  ['Silver', 'Smoke', 'Soil', 'Song', 'Sound', 'Stone'],
  ['Thunder', 'Tongue', 'Vine', 'Water', 'Web', 'Wind']
];

const shapes = [
  ['Absorbing', 'Animating', 'Alluring', 'Banishing', 'Binding', 'Blackening'],
  ['Blossoming', 'Burning', 'Calming', 'Choking', 'Clarifying', 'Comforting'],
  ['Concealing', 'Consuming', 'Corroding', 'Draining', 'Entangling', 'Enticing'],
  ['Freezing', 'Grasping', 'Horrifying', 'Illuminating', 'Impaling', 'Imprisoning'],
  ['Innervating', 'Liquefying', 'Manipulating', 'Mending', 'Nullifying', 'Prismatic'],
  ['Purifying', 'Scrying', 'Soothing', 'Twisting', 'Warding', 'Withering']
];

const randomWord = () => {
  if (roll1d2() == 1) {
    return tableD66(forms);
  } else {
    return tableD66(shapes);
  }
};

export const randomWords = (n) => {
  const items = [];
  while (items.length < n) {
    const item = randomWord();
    if (!items.includes(item)) {
      items.push(item);
    }
  }
  return items;
};
