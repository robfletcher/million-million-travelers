import { roll1d3, tableD66 } from './dice.js';
import { vocations } from './vocations.js';

export const extras = [
  (traveler) => { 
    const add = roll1d3();
    traveler.attributes.silver += add;
    return '+1d3 (' + add + ') Silver.';
  },
  (traveler) => { 
    const add = roll1d3();
    traveler.attributes.salt += add;
    return '+1d3 (' + add + ') Salt.';
  },
  (traveler) => { 
    const add = roll1d3();
    traveler.attributes.iron += add;
    return '+1d3 (' + add + ') Iron.';
  },
  (traveler) => {
    traveler.inventory.slots += 2;
    return '+2 inventory slots.';
  },
  (traveler) => {
    traveler.inventory.gearBubbles += 1;
    return '+1 Gear Bubble.';
  },
  (traveler) => {
    traveler.vocations.push(tableD66(vocations));
    return 'Gain another vocation.';
  }
];
